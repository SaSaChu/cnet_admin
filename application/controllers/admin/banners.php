<?php defined ('BASEPATH') OR exit ('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

class Banners extends Admin_controller {
  private $uri_1 = null;
  private $obj = null;
  private $icon = null;

  public function __construct () {
    parent::__construct ();
    
    $this->uri_1 = 'admin/banners';

    if (in_array ($this->uri->rsegments (2, 0), array ('edit', 'update', 'destroy')))
      if (!(($id = $this->uri->rsegments (3, 0)) && ($this->obj = Banner::find ('one', array ('conditions' => array ('id = ?', $id))))))
        return redirect_message (array ($this->uri_1), array ('_flash_danger' => '找不到該筆資料。'));

    $this->add_param ('uri_1', $this->uri_1)
         ->add_param ('now_url', base_url ($this->uri_1));
  }
  public function index ($offset = 0) {
    $columns = array ( 
        array ('key' => 'link', 'title' => '鏈結', 'sql' => 'link LIKE ?'), 
        array ('key' => 'lang_id', 'title' => '語系', 'sql' => 'lang_id = ?', 'select' => array_map (function ($lang) { return array ('value' => '' . $lang->id, 'text' => $lang->name);}, Lang::all (array ('select' => 'id, name')))),
      );

    $configs = array_merge (explode ('/', $this->uri_1), array ('%s'));
    $conditions = conditions ($columns, $configs);

    $limit = 10;
    $total = Banner::count (array ('conditions' => $conditions));
    $objs = Banner::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'include' => array ('lang'), 'order' => 'id DESC', 'conditions' => $conditions));

    return $this->load_view (array (
        'objs' => $objs,
        'columns' => $columns,
        'pagination' => $this->_get_pagination ($limit, $total, $configs),
      ));
  }
  public function add () {
    return $this->load_view (array (
        'posts' => Session::getData ('posts', true),
      ));
  }
  public function create () {
    if (!$this->has_post ())
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => '非 POST 方法，錯誤的頁面請求。'));

    $posts = OAInput::post ();
    $cover = OAInput::file ('cover');
    $cover2 = OAInput::file ('cover2');

    if ($msg = $this->_validation_create ($posts, $cover, $cover2))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if (!Banner::transaction (function () use (&$obj, $posts, $cover, $cover2) { return verifyCreateOrm ($obj = Banner::create (array_intersect_key ($posts, Banner::table ()->columns))) && $obj->cover->put ($cover) && $obj->cover2->put ($cover2); }))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => '新增失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '新增成功！'));
  }
  public function edit () {
    return $this->load_view (array (
        'posts' => Session::getData ('posts', true),
        'obj' => $this->obj,
      ));
  }
  public function update () {
    $obj = $this->obj;

    if (!$this->has_post ())
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '非 POST 方法，錯誤的頁面請求。'));

    $posts = OAInput::post ();
    $cover = OAInput::file ('cover');
    $cover2 = OAInput::file ('cover2');

    if ($msg = $this->_validation_update ($posts, $cover, $cover2, $obj))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if ($columns = array_intersect_key ($posts, $obj->table ()->columns))
      foreach ($columns as $column => $value)
        $obj->$column = $value;

    if (!Banner::transaction (function () use ($obj, $posts, $cover, $cover2) {
      if ($cover && !$obj->cover->put ($cover))
        return false;
      if ($cover2 && !$obj->cover2->put ($cover2))
        return false;
      return $obj->save ();
    }))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '更新失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '更新成功！'));
  }
  public function destroy () {
    $obj = $this->obj;

    if (!Banner::transaction (function () use ($obj) { return $obj->destroy (); }))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '刪除失敗！'));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '刪除成功！'));
  }
  private function _validation_create (&$posts, &$cover, &$cover2) {
    if (!isset ($posts['link'])) $posts['link'] = '';
    if (!isset ($posts['lang_id'])) return '沒有填寫 語系！';
    if (!(is_numeric ($posts['lang_id']) && ($posts['lang_id'] = trim ($posts['lang_id'])) && Lang::find_by_id ($posts['lang_id']))) return '語系 格式錯誤！';

    if (!isset ($cover)) return '沒有選擇 封面！';
    if (!is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 格式錯誤！';
    
    if (!isset ($cover2)) return '沒有選擇 小封面！';
    if (!is_upload_image_format ($cover2, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '小封面 格式錯誤！';
    
    return '';
  }
  private function _validation_update (&$posts, &$cover, &$cover2, $obj) {
    if (!isset ($posts['link'])) $posts['link'] = '';
    if (!isset ($posts['lang_id'])) return '沒有填寫 語系！';
    if (!(is_numeric ($posts['lang_id']) && ($posts['lang_id'] = trim ($posts['lang_id'])) && Lang::find_by_id ($posts['lang_id']))) return '語系 格式錯誤！';

    if (!((string)$obj->cover || isset ($cover))) return '沒有選擇 封面！';
    if ($cover && !is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 格式錯誤！';
    
    if (!((string)$obj->cover2 || isset ($cover2))) return '沒有選擇 小封面！';
    if ($cover2 && !is_upload_image_format ($cover2, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '小封面 格式錯誤！';
    
    return '';
  }
}
