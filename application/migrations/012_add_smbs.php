<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Add_smbs extends CI_Migration {
  public function up () {
    $this->db->query (
      "CREATE TABLE `smbs` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
        
        `cover` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '封面',

        `title1` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '標題1',
        `sub_title1` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '副標題1',
        
        `title2` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '標題2',
        `sub_title2` text NOT NULL COMMENT '副標題2',

        `updated_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '更新時間',
        `created_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '新增時間',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    );
  }
  public function down () {
    $this->db->query (
      "DROP TABLE `smbs`;"
    );
  }
}