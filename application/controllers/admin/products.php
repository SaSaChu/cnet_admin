<?php defined ('BASEPATH') OR exit ('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

class Products extends Admin_controller {
  private $uri_1 = null;
  private $obj = null;
  private $icon = null;

  public function __construct () {
    parent::__construct ();
    
    $this->uri_1 = 'admin/products';

    if (in_array ($this->uri->rsegments (2, 0), array ('edit', 'update', 'destroy')))
      if (!(($id = $this->uri->rsegments (3, 0)) && ($this->obj = Product::find ('one', array ('conditions' => array ('id = ?', $id))))))
        return redirect_message (array ($this->uri_1), array ('_flash_danger' => '找不到該筆資料。'));

    $this->add_param ('uri_1', $this->uri_1)
         ->add_param ('now_url', base_url ($this->uri_1));
  }
  public function index ($offset = 0) {
    $columns = array ( 
        array ('key' => 'content', 'title' => '內容', 'sql' => 'content LIKE ?'), 
        array ('key' => 'title',   'title' => '標題', 'sql' => 'title LIKE ?'), 
        array ('key' => 'lang_id', 'title' => '語系', 'sql' => 'lang_id = ?', 'select' => array_map (function ($lang) { return array ('value' => '' . $lang->id, 'text' => $lang->name);}, Lang::all (array ('select' => 'id, name')))),
      );

    $configs = array_merge (explode ('/', $this->uri_1), array ('%s'));
    $conditions = conditions ($columns, $configs);

    $limit = 10;
    $total = Product::count (array ('conditions' => $conditions));
    $objs = Product::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'include' => array ('lang', 'features', 'sources', 'downloads'), 'order' => 'id DESC', 'conditions' => $conditions));

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
    $posts['content'] = OAInput::post ('content', false);
    $cover1 = OAInput::file ('cover1');
    $cover2 = OAInput::file ('cover2');
    $cover3 = OAInput::file ('cover3');

    if ($msg = $this->_validation_create ($posts, $cover1, $cover2, $cover3))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if (!Product::transaction (function () use (&$obj, $posts, $cover1, $cover2, $cover3) { return verifyCreateOrm ($obj = Product::create (array_intersect_key ($posts, Product::table ()->columns))) && $obj->cover1->put ($cover1) && $obj->cover2->put ($cover2) && $obj->cover3->put ($cover3); }))
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
    $posts['content'] = OAInput::post ('content', false);
    $cover1 = OAInput::file ('cover1');
    $cover2 = OAInput::file ('cover2');
    $cover3 = OAInput::file ('cover3');

    if ($msg = $this->_validation_update ($posts, $cover1, $cover2, $cover3, $obj))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if ($columns = array_intersect_key ($posts, $obj->table ()->columns))
      foreach ($columns as $column => $value)
        $obj->$column = $value;

    if (!Product::transaction (function () use ($obj, $posts, $cover1, $cover2, $cover3) {
      if ($cover1 && !$obj->cover1->put ($cover1)) return false;
      if ($cover2 && !$obj->cover2->put ($cover2)) return false;
      if ($cover3 && !$obj->cover3->put ($cover3)) return false;
      return $obj->save ();
    }))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '更新失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '更新成功！'));
  }
  public function destroy () {
    $obj = $this->obj;

    if (!Product::transaction (function () use ($obj) { return $obj->destroy (); }))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '刪除失敗！'));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '刪除成功！'));
  }
  private function _validation_create (&$posts, &$cover1, &$cover2, &$cover3) {
    if (!isset ($posts['title'])) return '沒有填寫 標題！';
    if (!isset ($posts['content'])) return '沒有填寫 內容！';
    if (!isset ($posts['lang_id'])) return '沒有填寫 語系！';
    if (!isset ($posts['menu_id'])) return '沒有填寫 選單！';
    
    if (!(is_string ($posts['title']) && ($posts['title'] = trim ($posts['title'])))) return '標題 格式錯誤！';
    if (!(is_string ($posts['content']) && ($posts['content'] = trim ($posts['content'])))) return '內容 格式錯誤！';
    if (!(is_numeric ($posts['lang_id']) && ($posts['lang_id'] = trim ($posts['lang_id'])) && Lang::find_by_id ($posts['lang_id']))) return '語系 格式錯誤！';
    if (!(is_numeric ($posts['menu_id']) && ($posts['menu_id'] = trim ($posts['menu_id'])) && Menu::find_by_id ($posts['menu_id']))) return '選單 格式錯誤！';
        
    if (!isset ($cover1)) return '沒有選擇 封面 1！';
    if (!is_upload_image_format ($cover1, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 1 格式錯誤！';
    
    if (!isset ($cover2)) return '沒有選擇 封面 2！';
    if (!is_upload_image_format ($cover2, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 2 格式錯誤！';
    
    if (!isset ($cover3)) return '沒有選擇 封面 3！';
    if (!is_upload_image_format ($cover3, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 3 格式錯誤！';
    return '';
  }
  private function _validation_update (&$posts, &$cover1, &$cover2, &$cover3, $obj) {
    
    if (!isset ($posts['title'])) return '沒有填寫 標題！';
    if (!isset ($posts['content'])) return '沒有填寫 內容！';
    if (!isset ($posts['lang_id'])) return '沒有填寫 語系！';
    if (!isset ($posts['menu_id'])) return '沒有填寫 選單！';
    
    if (!(is_string ($posts['title']) && ($posts['title'] = trim ($posts['title'])))) return '標題 格式錯誤！';
    if (!(is_string ($posts['content']) && ($posts['content'] = trim ($posts['content'])))) return '內容 格式錯誤！';
    if (!(is_numeric ($posts['lang_id']) && ($posts['lang_id'] = trim ($posts['lang_id'])) && Lang::find_by_id ($posts['lang_id']))) return '語系 格式錯誤！';
    if (!(is_numeric ($posts['menu_id']) && ($posts['menu_id'] = trim ($posts['menu_id'])) && Menu::find_by_id ($posts['menu_id']))) return '選單 格式錯誤！';

    if (!((string)$obj->cover1 || isset ($cover1))) return '沒有選擇 封面 1！';
    if ($cover1 && !is_upload_image_format ($cover1, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 1 格式錯誤！';
    
    if (!((string)$obj->cover2 || isset ($cover2))) return '沒有選擇 封面 2！';
    if ($cover2 && !is_upload_image_format ($cover2, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 2 格式錯誤！';
    
    if (!((string)$obj->cover3 || isset ($cover3))) return '沒有選擇 封面 3！';
    if ($cover3 && !is_upload_image_format ($cover3, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 3 格式錯誤！';
    
    return '';
  }
}
