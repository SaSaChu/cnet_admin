<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Blogs extends Site_controller {

  public function show () {
    $this->load_view ();
  }
  public function index () {
    $this->load_view ();
  }
}
