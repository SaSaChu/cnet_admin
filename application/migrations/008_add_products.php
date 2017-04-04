<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Add_products extends CI_Migration {
  public function up () {
    $this->db->query (
      "CREATE TABLE `products` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
        `lang_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '語系 ID',
        `menu_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT 'Menu ID, root = 0',
        
        `cover1` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '封面 1',
        `cover2` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '封面 2',
        `cover3` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '封面 3',
        
        `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '標題',
        `content` text NOT NULL COMMENT '內容',

        `updated_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '更新時間',
        `created_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '新增時間',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    );
  }
  public function down () {
    $this->db->query (
      "DROP TABLE `products`;"
    );
  }
}