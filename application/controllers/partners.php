<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Partners extends Site_controller {

  public function index () {
    return $this->load_view (array (
        'now' => 'partner'
      ));
  }
}
