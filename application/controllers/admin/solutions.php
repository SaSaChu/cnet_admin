<?php defined ('BASEPATH') OR exit ('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

class Solutions extends Admin_controller {
  private $uri_1 = null;
  private $obj = null;
  private $icon = null;

  public function __construct () {
    parent::__construct ();
    
    $this->uri_1 = 'admin/solutions';

    if (in_array ($this->uri->rsegments (2, 0), array ('edit', 'update', 'destroy')))
      if (!(($id = $this->uri->rsegments (3, 0)) && ($this->obj = SmbSolution::find ('one', array ('conditions' => array ('id = ?', $id))))))
        return redirect_message (array ($this->uri_1), array ('_flash_danger' => '找不到該筆資料。'));

    $this->add_param ('uri_1', $this->uri_1)
         ->add_param ('now_url', base_url ($this->uri_1));
         
    if (in_array ($this->uri->rsegments (2, 0), array ('create', 'update')))
      error_reporting (E_ALL & ~E_NOTICE & ~E_WARNING);
  }
  public function index ($offset = 0) {
    $columns = array ( 
        array ('key' => 'menu', 'title' => '選項名稱', 'sql' => 'menu LIKE ?'), 
        array ('key' => 'title', 'title' => '標題', 'sql' => 'title LIKE ?'), 
        array ('key' => 'sub_title', 'title' => '副標題', 'sql' => 'sub_title LIKE ?'), 
      );

    $configs = array_merge (explode ('/', $this->uri_1), array ('%s'));
    $conditions = conditions ($columns, $configs);

    $limit = 10;
    $total = SmbSolution::count (array ('conditions' => $conditions));
    $objs = SmbSolution::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'order' => 'id DESC', 'conditions' => $conditions));

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
    $cover = OAInput::file ('cover');

    if ($msg = $this->_validation_create ($posts, $cover))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if (!SmbSolution::transaction (function () use (&$obj, $posts, $cover) { return verifyCreateOrm ($obj = SmbSolution::create (array_intersect_key ($posts, SmbSolution::table ()->columns))) && $obj->cover->put ($cover); }))
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
    $cover = OAInput::file ('cover');

    if ($msg = $this->_validation_update ($posts, $cover, $obj))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if ($columns = array_intersect_key ($posts, $obj->table ()->columns))
      foreach ($columns as $column => $value)
        $obj->$column = $value;

    if (!SmbSolution::transaction (function () use ($obj, $cover) {
      if ($cover && !$obj->cover->put ($cover))
        return false;
      return $obj->save ();
    }))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '更新失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '更新成功！'));
  }
  public function destroy () {
    $obj = $this->obj;

    if (!SmbSolution::transaction (function () use ($obj) { return $obj->destroy (); }))
      return redirect_message (array ($this->uri_1), array ('_flash_danger' => '刪除失敗！'));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '刪除成功！'));
  }
  private function _validation_create (&$posts, &$cover) {
    if (!isset ($cover)) return '沒有選擇 封面！';
    if (!is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 格式錯誤！';
    
    if (!isset ($posts['menu'])) return '沒有填寫 選項名稱！';
    if (!(is_string ($posts['menu']) && ($posts['menu'] = trim ($posts['menu'])))) return '選項名稱 格式錯誤！';

    if (!isset ($posts['title'])) return '沒有填寫 標題！';
    if (!(is_string ($posts['title']) && ($posts['title'] = trim ($posts['title'])))) return '標題 格式錯誤！';

    if (!isset ($posts['sub_title'])) return '沒有填寫 副標題！';
    if (!(is_string ($posts['sub_title']) && ($posts['sub_title'] = trim ($posts['sub_title'])))) return '副標題 格式錯誤！';

    if (!isset ($posts['content'])) return '沒有填寫 內容！';
    if (!(is_string ($posts['content']) && ($posts['content'] = trim ($posts['content'])))) return '內容 格式錯誤！';

    return '';
  }
  private function _validation_update (&$posts, &$cover, $obj) {
    if (!((string)$obj->cover || isset ($cover))) return '沒有選擇 封面！';
    if ($cover && !is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '封面 格式錯誤！';

    if (!isset ($posts['menu'])) return '沒有填寫 選項名稱！';
    if (!(is_string ($posts['menu']) && ($posts['menu'] = trim ($posts['menu'])))) return '選項名稱 格式錯誤！';

    if (!isset ($posts['title'])) return '沒有填寫 標題！';
    if (!(is_string ($posts['title']) && ($posts['title'] = trim ($posts['title'])))) return '標題 格式錯誤！';

    if (!isset ($posts['sub_title'])) return '沒有填寫 副標題！';
    if (!(is_string ($posts['sub_title']) && ($posts['sub_title'] = trim ($posts['sub_title'])))) return '副標題 格式錯誤！';

    if (!isset ($posts['content'])) return '沒有填寫 內容！';
    if (!(is_string ($posts['content']) && ($posts['content'] = trim ($posts['content'])))) return '內容 格式錯誤！';

    return '';
  }
}
