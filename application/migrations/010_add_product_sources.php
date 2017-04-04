<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Add_product_sources extends CI_Migration {
  public function up () {
    $this->db->query (
      "CREATE TABLE `product_sources` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
        `product_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT 'Product ID',
        
        `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '標題',
        `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '內容',

        `updated_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '更新時間',
        `created_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '新增時間',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    );
  }
  public function down () {
    $this->db->query (
      "DROP TABLE `product_sources`;"
    );
  }
}