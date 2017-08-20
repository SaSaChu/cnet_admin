<?php defined ('BASEPATH') OR exit ('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

class Smbs extends Admin_controller {
  private $uri_1 = null;
  private $obj = null;
  private $icon = null;

  public function __construct () {
    parent::__construct ();
    
    $this->uri_1 = 'admin/smbs';

    if (in_array ($this->uri->rsegments (2, 0), array ('edit', 'update', 'destroy')))
      if (!(($id = $this->uri->rsegments (3, 0)) && ($this->obj = Smb::find ('one', array ('conditions' => array ('id = ?', $id))))))
        return redirect_message (array ($this->uri_1), array ('_flash_danger' => '找不到該筆資料。'));

    $this->add_param ('uri_1', $this->uri_1)
         ->add_param ('now_url', base_url ($this->uri_1));
  }
  public function index ($offset = 0) {
    $obj = Smb::first ();

    return $this->load_view (array (
        'posts' => Session::getData ('posts', true),
        'obj' => Smb::first (),
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

    if ($msg = $this->_validation_create ($posts, $cover))
      return redirect_message (array ($this->uri_1, 'add'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if (!Smb::transaction (function () use (&$obj, $posts, $cover) { return verifyCreateOrm ($obj = Smb::create (array_intersect_key ($posts, Smb::table ()->columns))) && $obj->cover->put ($cover); }))
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

    if ($msg = $this->_validation_update ($posts, $cover, $obj))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => $msg, 'posts' => $posts));

    if ($columns = array_intersect_key ($posts, $obj->table ()->columns))
      foreach ($columns as $column => $value)
        $obj->$column = $value;

    if (!Smb::transaction (function () use ($obj, $cover) {
      if ($cover && !$obj->cover->put ($cover))
        return false;
      return $obj->save ();
    }))
      return redirect_message (array ($this->uri_1, $obj->id, 'edit'), array ('_flash_danger' => '更新失敗！', 'posts' => $posts));

    return redirect_message (array ($this->uri_1), array ('_flash_info' => '更新成功！'));
  }
  private function _validation_create (&$posts, &$cover) {
    if (!isset ($cover)) return '沒有選擇 底圖！';
    if (!is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '底圖 格式錯誤！';
    
    if (!isset ($posts['title1'])) return '沒有填寫 標題1！';
    if (!(is_string ($posts['title1']) && ($posts['title1'] = trim ($posts['title1'])))) return '標題1 格式錯誤！';

    if (!isset ($posts['sub_title1'])) return '沒有填寫 副標題1！';
    if (!(is_string ($posts['sub_title1']) && ($posts['sub_title1'] = trim ($posts['sub_title1'])))) return '副標題1 格式錯誤！';

    if (!isset ($posts['title2'])) return '沒有填寫 標題2！';
    if (!(is_string ($posts['title2']) && ($posts['title2'] = trim ($posts['title2'])))) return '標題2 格式錯誤！';

    if (!isset ($posts['sub_title2'])) return '沒有填寫 副標題2！';
    if (!(is_string ($posts['sub_title2']) && ($posts['sub_title2'] = trim ($posts['sub_title2'])))) return '副標題2 格式錯誤！';

    return '';
  }
  private function _validation_update (&$posts, &$cover, $obj) {

    if (!((string)$obj->cover || isset ($cover))) return '沒有選擇 底圖！';
    if ($cover && !is_upload_image_format ($cover, 20 * 1024 * 1024, array ('gif', 'jpeg', 'jpg', 'png'))) return '底圖 格式錯誤！';
    
    if (!isset ($posts['title1'])) return '沒有填寫 標題1！';
    if (!(is_string ($posts['title1']) && ($posts['title1'] = trim ($posts['title1'])))) return '標題1 格式錯誤！';

    if (!isset ($posts['sub_title1'])) return '沒有填寫 副標題1！';
    if (!(is_string ($posts['sub_title1']) && ($posts['sub_title1'] = trim ($posts['sub_title1'])))) return '副標題1 格式錯誤！';

    if (!isset ($posts['title2'])) return '沒有填寫 標題2！';
    if (!(is_string ($posts['title2']) && ($posts['title2'] = trim ($posts['title2'])))) return '標題2 格式錯誤！';

    if (!isset ($posts['sub_title2'])) return '沒有填寫 副標題2！';
    if (!(is_string ($posts['sub_title2']) && ($posts['sub_title2'] = trim ($posts['sub_title2'])))) return '副標題2 格式錯誤！';

    return '';
  }
}
