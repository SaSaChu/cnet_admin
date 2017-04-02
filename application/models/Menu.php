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
  public function destroy () {
    if ($this->subs)
      foreach ($this->subs as $sub)
        if (!$sub->destroy ())
          return false;

    return $this->delete ();
  }
}