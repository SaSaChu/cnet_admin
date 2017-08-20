<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Add_smb_solutions extends CI_Migration {
  public function up () {
    $this->db->query (
      "CREATE TABLE `smb_solutions` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
        
        `cover` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '封面',

        `menu` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '選項名稱',
        `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '標題',
        `sub_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '副標題',
        `content` text NOT NULL COMMENT '內容',

        `updated_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '更新時間',
        `created_at` datetime NOT NULL DEFAULT '2017-04-04 20:41:26' COMMENT '新增時間',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    );
  }
  public function down () {
    $this->db->query (
      "DROP TABLE `smb_solutions`;"
    );
  }
}