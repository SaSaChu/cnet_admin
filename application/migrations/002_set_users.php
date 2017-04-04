<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Migration_Set_users extends CI_Migration {
  public function up () {
    $this->db->query (
      "INSERT INTO `users` (`id`, `account`, `password`, `login_count`, `logined_at`, `updated_at`, `created_at`)
        VALUES
          (NULL, 'admin', 'c3284d0f94606de1fd2af172aba15bf3', 0, '2017-04-04 20:41:26', '2017-04-04 20:41:26', '2017-04-04 20:41:26');"
    );
  }
  public function down () {
    $this->db->query (
      "TRUNCATE TABLE `users`;"
    );
  }
}