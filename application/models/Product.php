<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Product extends OaModel {

  static $table_name = 'products';

  static $has_one = array (
  );

  static $has_many = array (
    array ('features', 'class_name' => 'ProductFeature', 'order' => 'id DESC'),
    array ('sources', 'class_name' => 'ProductSource', 'order' => 'id DESC'),
    array ('downloads', 'class_name' => 'ProductDownload', 'order' => 'id DESC')
  );

  static $belongs_to = array (
    array ('lang', 'class_name' => 'Lang')
  );

  public function __construct ($attributes = array (), $guard_attributes = true, $instantiating_via_find = false, $new_record = true) {
    parent::__construct ($attributes, $guard_attributes, $instantiating_via_find, $new_record);

    OrmFileUploader::bind ('cover1', 'ProductCover1FileUploader');
    OrmFileUploader::bind ('cover2', 'ProductCover2FileUploader');
    OrmFileUploader::bind ('cover3', 'ProductCover3FileUploader');
  }
  public function destroy () {
    if ($this->features)
      foreach ($this->features as $feature)
        if (!$feature->destroy ())
          return false;
        
    if ($this->sources)
      foreach ($this->sources as $source)
        if (!$source->destroy ())
          return false;
        
    if ($this->downloads)
      foreach ($this->downloads as $download)
        if (!$download->destroy ())
          return false;

    return $this->delete ();
  }
  public function mini_title ($length = 50) {
    if (!isset ($this->title)) return '';
    return $length ? mb_strimwidth (remove_ckedit_tag ($this->title), 0, $length, '…','UTF-8') : remove_ckedit_tag ($this->title);
  }
  public function mini_content ($length = 100) {
    if (!isset ($this->content)) return '';
    return $length ? mb_strimwidth (remove_ckedit_tag ($this->content), 0, $length, '…','UTF-8') : remove_ckedit_tag ($this->content);
  }
}