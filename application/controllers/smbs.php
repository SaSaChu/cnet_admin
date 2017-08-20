<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Smbs extends Site_controller {

  public function show ($id = 0) {
    if (!$obj = SmbSolution::find ('one', array ('conditions' => array ('id = ?', $id))))
      return redirect_message (array ('smbs'), array ('_flash_danger' => 'Not found。'));

    return $this->load_view (array (
        'now' => 'smbs',
        'obj' => $obj
      ));
  }
  public function index () {
    return $this->load_view (array (
        'now' => 'smbs',
        'obj' => Smb::first ()
      ));
  }
}
