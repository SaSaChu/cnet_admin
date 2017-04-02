<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Menu extends OaModel {

  static $table_name = 'menus';

  static $has_one = array (
  );

  static $has_many = array (
    array ('subs', 'class_name' => 'Menu', 'order' => 'sort DESC')
  );

  static $belongs_to = array (
    array ('lang', 'class_name' => 'Lang')
  );

  public function __construct ($attributes = array (), $guard_attributes = true, $instantiating_via_find = false, $new_record = true) {
    parent::__construct ($attributes, $guard_attributes, $instantiating_via_find, $new_record);
  }
  public static function alls () {
    return array_map (function ($menu) {
        return array (
            'id' => $menu->id,
            'name' => $menu->name,
            'lang' => $menu->lang_id,
            'subs' => array_map (function ($sub) {
              return array (
                  'id' => $sub->id,
                  'name' => $sub->name,
                );
            }, $menu->subs)
          );
      }, Menu::all (array ('select' => 'id, name, lang_id, menu_id', 'include' => array ('subs'), 'conditions' => array ('menu_id = ?', 0))));
  }
  public function destroy () {
    if ($this->subs)
      foreach ($this->subs as $sub)
        if (!$sub->destroy ())
          return false;

    return $this->delete ();
  }
}