<?php defined ('BASEPATH') OR exit ('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

class Menus extends Admin_controller {
  private $uri_1 = null;
  private $obj = null;

  public function __construct () {
    parent::__construct ();
    
    $this->uri_1 = 'admin/menus';

    if (in_array ($this->uri->rsegments (2, 0), array ('edit', 'update', 'destroy', 'sort')))
      if (!(($id = $this->uri->rsegments (3, 0)) && ($this->obj = Menu::find ('one', array ('conditions' => array ('id = ? AND menu_id = ?', $id, 0))))))
        return redirect_message (array ($this->uri_1), array ('_flash_danger' => '找不到該筆資料。'));

    $this->add_param ('uri_1', $this->uri_1)
         ->add_param ('now_url', base_url ($this->uri_1));
  }
  public function index ($offset = 0) {
    $columns = array ( 
        array ('key' => 'name', 'title' => '名稱', 'sql' => 'name LIKE ?'), 
        array ('key' => 'lang_id', 'title' => '語系', 'sql' => 'lang_id = ?', 'select' => array_map (function ($lang) { return array ('value' => '' . $lang->id, 'text' => $lang->name);}, Lang::all (array ('select' => 'id, name')))),
      );

    $configs = array_merge (explode ('/', $this->uri_1), array ('%s'));
    $conditions = conditions ($columns, $configs);
    OaModel::addConditions ($conditions, 'menu_id = ?', 0);

    $limit = 25;
    $total = Menu::count (array ('conditions' => $conditions));
    $objs = Menu::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'order' => 'sort ASC', 'include' => array ('subs', 'lang'), 'conditions' => $conditions));

    return $this->load_view (array (
        'objs' => $objs,
        'columns' => $columns,
        'pagination' => $this->_get_pagination ($limit, $total, $configs),
      ));
  }
  public function add () {
    return $this->load_view (array (
        'posts' => Session::getData ('posts', true)
      ));
  }
  public function create () {
    if (!$this->has_post ())
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => '非 POST 方法，錯誤的頁面請求。'));

    $posts = OAInput::post ();
    
    if ($msg = $this->_validation_create ($posts))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => $msg, 'posts' => $posts));

    $posts['sort'] = Menu::count ();

    if (!Menu::transaction (function () use (&$obj, $posts) { return verifyCreateOrm ($obj = Menu::create (array_intersect_key ($posts, Menu::table ()->columns))); }))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => '新增失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '新增成功！'));
  }
  public function edit () {
    return $this->load_view (array (
        'posts' => Session::getData ('posts', true),
        'obj' => $this->obj
      ));
  }
  public function update () {
    $obj = $this->obj;

    if (!$this->has_post ())
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '非 POST 方法，錯誤的頁面請求。'));

    $posts = OAInput::post ();

    if ($msg = $this->_validation_update ($posts))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if ($columns = array_intersect_key ($posts, $obj->table ()->columns))
      foreach ($columns as $column => $value)
        $obj->$column = $value;
    
    if (!Menu::transaction (function () use ($obj, $posts) { return $obj->save (); }))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '更新失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '更新成功！'));
  }

  public function destroy () {
    $obj = $this->obj;

    if (!Menu::transaction (function () use ($obj) { return $obj->destroy (); }))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '刪除失敗！'));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '刪除成功！'));
  }

  public function sort ($id, $sort) {
    $obj = $this->obj;

    if (!in_array ($sort, array ('up', 'down')))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '排序失敗！'));

    OaModel::addConditions ($conditions, 'menu_id = ?', 0);
    $total = Menu::count (array ('conditions' => $conditions));

    switch ($sort) {
      case 'up': $sort = $obj->sort; $obj->sort = $obj->sort + 1 >= $total ? 0 : $obj->sort + 1; break;
      case 'down': $sort = $obj->sort; $obj->sort = $obj->sort - 1 < 0 ? $total - 1 : $obj->sort - 1; break;
    }

    $change = array ();
    array_push ($change, array ('id' => $obj->id, 'old' => $sort, 'new' => $obj->sort));
    OaModel::addConditions ($conditions, 'sort = ?', $obj->sort);

    if (!Menu::transaction (function () use ($conditions, $obj, $sort, &$change) { if (($next = Menu::find ('one', array ('conditions' => $conditions))) && array_push ($change, array ('id' => $next->id, 'old' => $next->sort, 'new' => $sort))) { $next->sort = $sort; if (!$next->save ()) return false; } return $obj->save (); }))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '排序失敗！'));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '排序成功！'));
  }
  private function _validation_create (&$posts) {
    if (!isset ($posts['name'])) return '沒有填寫 名稱！';
    if (!isset ($posts['lang_id'])) return '沒有填寫 語系！';

    if (!(is_string ($posts['name']) && ($posts['name'] = trim ($posts['name'])))) return '名稱 格式錯誤！';
    if (!(is_numeric ($posts['lang_id']) && ($posts['lang_id'] = trim ($posts['lang_id'])) && Lang::find_by_id ($posts['lang_id']))) return '語系 格式錯誤！';
    return '';
  }
  private function _validation_update (&$posts) {
    return $this->_validation_create ($posts);
  }
}
