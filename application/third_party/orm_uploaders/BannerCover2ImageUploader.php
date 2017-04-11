<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class BannerCover2ImageUploader extends OrmImageUploader {

  public function getVersions () {
    return array (
        '' => array (),
        '500x500c' => array ('adaptiveResizeQuadrant', 500, 500, 'c')
      );
  }
}