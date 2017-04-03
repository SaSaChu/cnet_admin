<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class BannerCoverImageUploader extends OrmImageUploader {

  public function getVersions () {
    return array (
        '' => array (),
        '100x100c' => array ('adaptiveResizeQuadrant', 100, 100, 'c'),
        '1140x380c' => array ('adaptiveResizeQuadrant', 1140, 380, 'c')
      );
  }
}