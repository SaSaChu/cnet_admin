<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Set_langs extends CI_Migration {
  public function up () {
    $this->db->query (
      "INSERT INTO `langs` (`id`, `name`, `code`, `updated_at`, `created_at`)
        VALUES
          (NULL, '中文', 'tw', '2017-04-04 20:41:26', '2017-04-04 20:41:26');"
    );
    $this->db->query (
      "INSERT INTO `langs` (`id`, `name`, `code`, `updated_at`, `created_at`)
        VALUES
          (NULL, '英文', 'en', '2017-04-04 20:41:26', '2017-04-04 20:41:26');"
    );
    $this->db->query (
      "INSERT INTO `langs` (`id`, `name`, `code`, `updated_at`, `created_at`)
        VALUES
          (NULL, '土耳其文', 'tr', '2017-04-04 20:41:26', '2017-04-04 20:41:26');"
    );
  }
  public function down () {
    $this->db->query (
      "TRUNCATE TABLE `langs`;"
    );
  }
}