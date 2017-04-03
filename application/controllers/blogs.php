<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Blogs extends Site_controller {

  public function show ($id = 0) {
    if (!$blog = Blog::find ('one', array ('conditions' => array ('id = ? AND lang_id = ?', $id, Lang::current ()->id))))
      return redirect_message (array ('blogs'), array ('_flash_danger' => 'Not found。'));

    return $this->load_view (array (
        'now' => 'news',
        'blog' => $blog
      ));
  }
  public function index ($offset = 0) {
    $columns = array ();

    $configs = array_merge (explode ('/', 'blogs'), array ('%s'));
    $conditions = conditions ($columns, $configs);
    OaModel::addConditions ($conditions, 'lang_id = ?', Lang::current ()->id);

    $limit = 3;
    $total = Blog::count (array ('conditions' => $conditions));
    $blogs = Blog::find ('all', array ('offset' => $offset < $total ? $offset : 0, 'limit' => $limit, 'order' => 'id DESC', 'conditions' => $conditions));

    return $this->load_view (array (
        'now' => 'news',
        'blogs' => $blogs,
        'columns' => $columns,
        'pagination' => $this->_get_pagination ($limit, $total, $configs),
      ));
  }
}
