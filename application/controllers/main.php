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
  public function search ($offset = 0) {
    $keyword = OAInput::get ('q');
    $columns = array ();
    $configs = array_merge (explode ('/', 'search'), array ('%s?q=' . $keyword));
    $conditions = conditions ($columns, $configs);
    OaModel::addConditions ($conditions, 'title LIKE ? AND lang_id = ?', '%' . $keyword . '%', Lang::current ()->id);

    $limit = 20;
    $total = Product::count (array ('conditions' => $conditions));
    $products = Product::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'order' => 'id DESC', 'conditions' => $conditions));

    return $this->load_view (array (
        'now' => 'search',
        'q' => $keyword,
        'products' => $products,
        'columns' => $columns,
        'pagination' => $this->_get_pagination ($limit, $total, $configs),
      ));
  }
  public function about () {
    
    return $this->load_view (array (
        'now' => 'about'
      ));
  }
  public function index () {
    return $this->load_view (array (
        'now' => 'index',
        'blogs' => Blog::find ('all', array ('limit' => 3, 'conditions' => array ('lang_id = ?', Lang::current ()->id))),
        'menus' => Menu::find ('all', array ('order' => 'sort ASC', 'conditions' => array ('menu_id = ? AND lang_id = ?', 0, Lang::current ()->id))),
        'banners' => Banner::find ('all', array ('conditions' => array ('lang_id = ?', Lang::current ()->id))),
        'products' => Product::find ('all', array ('select' => 'id, cover1, cover2, cover3, title', 'limit' => 4, 'order' => 'id DESC', 'conditions' => array ('lang_id = ?', Lang::current ()->id))),
      ));
  }
}
