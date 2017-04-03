<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Main extends Site_controller {

  public function lang ($lang_id = 0) {
    if (!($lang_id && ($lang = Lang::find_by_id ($lang_id))))
      return redirect_message (array (''));
    
    Session::setData ('lang_id', $lang->id);

    if (isset ($_SERVER['HTTP_REFERER']) && !preg_match ('/' . str_replace ('/', '\/', base_url ('lang')) . '/', $_SERVER['HTTP_REFERER']))
      return redirect_message ($_SERVER['HTTP_REFERER'], array ('_flash_info' => ''));
    return redirect_message (array (''));
  }
  public function search () {
    $this->load_view ();
  }
  public function about () {
    $this->load_view ();
  }
  public function index () {
    $products = array_filter (Product::find ('all', array ('select' => 'id, title', 'include' => array ('images'), 'conditions' => array ('lang_id = ?', Lang::current ()->id))), function ($product) {
      return $product->images;
    });

    $this->load_view (array (
        'products' => array_slice ($products, 0, 4),
      ));
  }
}
