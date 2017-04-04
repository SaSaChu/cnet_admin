<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Products extends Site_controller {

  public function show ($id = 0) {
    if (!$product = Product::find ('one', array ('conditions' => array ('id = ? AND lang_id = ?', $id, Lang::current ()->id))))
      return redirect_message (array ('products'), array ('_flash_danger' => 'Not found。'));

    return $this->load_view (array (
        'now' => 'product',
        'product' => $product,
        'mores' => Product::find ('all', array ('limit' => 4, 'conditions' => array ('id != ? AND lang_id = ?', $id, Lang::current ()->id))),
      ));
  }
  public function index ($menu_id = 0, $offset = 0) {
    $columns = array ();

    $configs = array_merge (explode ('/', 'products'), array ($menu_id, '%s'));
    $conditions = conditions ($columns, $configs);
    OaModel::addConditions ($conditions, 'lang_id = ?', Lang::current ()->id);

    if ($menu_id && ($menu = Menu::find ('one', array ('select' => 'id, menu_id', 'conditions' => array ('id = ? AND lang_id = ?', $menu_id, Lang::current ()->id)))))
      if ($menu->subs)
        OaModel::addConditions ($conditions, 'menu_id IN (?)', column_array ($menu->subs, 'id'));
      else
        OaModel::addConditions ($conditions, 'menu_id = ?', $menu->id);

    $limit = 12;
    $total = Product::count (array ('conditions' => $conditions));
    $products = Product::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'order' => 'id DESC', 'conditions' => $conditions));

    return $this->load_view (array (
        'now' => 'product',
        'menu_id' => $menu_id,
        'products' => $products,
        'columns' => $columns,
        'pagination' => $this->_get_pagination ($limit, $total, $configs),
      ));
  }
}
