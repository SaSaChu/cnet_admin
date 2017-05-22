/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 * @link        http://www.ioa.tw/
 */

$(function () {
  var $lang_id = $('#lang_id').change (x);
  var $menu_id = $('#menu_id');

  function x () {
    $menu_id.empty ();

    var xx = $menu_id.data ('menus').filter (function (t) { return t.lang == $lang_id.val (); });

    for (var i = 0; i < xx.length; i++) {
      $menu_id.append ($('<option />').val (xx[i].id).text (xx[i].name).prop ('selected', xx[i].id == $menu_id.data ('d4')));
      for (var j = 0; j < xx[i].subs.length; j++)
        $menu_id.append ($('<option />').addClass ('sub').val (xx[i].subs[j].id).html ("&nbsp;&nbsp;-&nbsp;&nbsp;" + xx[i].subs[j].name).prop ('selected', xx[i].subs[j].id == $menu_id.data ('d4')));
    }
  }
  x ();
});