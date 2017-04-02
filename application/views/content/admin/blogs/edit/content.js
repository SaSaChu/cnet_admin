/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

$(function () {
  var $lang_id = $('#lang_id').change (x);
  var $menu_id = $('#menu_id');

  function x () {
    $menu_id.empty ().append ($menu_id.data ('menus').filter (function (t) {
        return t.lang == $lang_id.val ();
      }).map (function (t) {
        return $('<optgroup />').attr ('label', t.name).append (t.subs.map (function (u) {
          return $('<option />').val (u.id).text (u.name).prop ('selected', u.id == $menu_id.data ('d4'));
        }));
      }));
  }
  x ();
});