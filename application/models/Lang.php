<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Lang extends OaModel {

  static $table_name = 'langs';

  static $has_one = array (
  );

  static $has_many = array (
    array ('products', 'class_name' => 'Product', 'order' => 'id DESC'),
    array ('menus', 'class_name' => 'Menu', 'order' => 'id DESC'),
    array ('blogs', 'class_name' => 'Blog', 'order' => 'id DESC'),
    array ('banners', 'class_name' => 'Banner', 'order' => 'id DESC'),
  );

  static $belongs_to = array (
  );

  private static $current = '';

  public static function get () {
    if (!$keys = func_get_args ()) return '';
    
    if (!isJson ($file = read_file ($path = FCPATH . 'application' . DIRECTORY_SEPARATOR . 'language' . DIRECTORY_SEPARATOR . Lang::current ()->code . DIRECTORY_SEPARATOR . array_shift ($keys) . '.json')))
      exit ('語言包有誤');

    $file = json_decode ($file, true);

    foreach ($keys as $key)
      if (!isset ($file[$key]))
        return '';
      else
        $file = $file[$key];

    return $file;
  }
  public static function current () {
    if (self::$current !== '') return self::$current;
    return self::$current = ($id = Session::getData ('lang_id')) ? Lang::find_by_id ($id) : Lang::first ();
  }
  public function destroy () {
    if ($this->products)
      foreach ($this->products as $product)
        if (!($product->lang_id = 0) && !$product->save ())
          return false;
        
    if ($this->menus)
      foreach ($this->menus as $menu)
        if (!($menu->lang_id = 0) && !$menu->save ())
          return false;
        
    if ($this->blogs)
      foreach ($this->blogs as $blog)
        if (!($blog->lang_id = 0) && !$blog->save ())
          return false;
        
    if ($this->banners)
      foreach ($this->banners as $banner)
        if (!($banner->lang_id = 0) && !$banner->save ())
          return false;

    return $this->delete ();
  }
  public function __construct ($attributes = array (), $guard_attributes = true, $instantiating_via_find = false, $new_record = true) {
    parent::__construct ($attributes, $guard_attributes, $instantiating_via_find, $new_record);
  }
}