<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class ProductDownload extends OaModel {

  static $table_name = 'product_downloads';

  static $has_one = array (
  );

  static $has_many = array (
  );

  static $belongs_to = array (
  );

  public function __construct ($attributes = array (), $guard_attributes = true, $instantiating_via_find = false, $new_record = true) {
    parent::__construct ($attributes, $guard_attributes, $instantiating_via_find, $new_record);

    OrmFileUploader::bind ('name', 'ProductDownloadNameFileUploader');
  }
  public function destroy () {
    return $this->name->cleanAllFiles () && $this->delete ();
  }
  public function name_icon () {
    $name = 'd4.png';
    switch (pathinfo ((string)$this->name, PATHINFO_EXTENSION)) {
      case 'jpg': case 'jpeg': $name = 'jpg.png'; break;
      
      case 'ppt': case 'pptx': $name = 'ppt.png'; break;
      
      case 'xls': case 'xlsx': $name = 'xls.png'; break;
      case 'gif': $name = 'gif.png'; break;
      case 'png': $name = 'png.png'; break;
      case 'pdf': $name = 'pdf.png'; break;
      case 'zip': $name = 'zip.png'; break;
      default: $name = 'd4.png'; break;
    }
    return base_url ('resource', 'image', 'extension', $name);
  }
}