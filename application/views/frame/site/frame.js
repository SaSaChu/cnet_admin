/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  var $banners = $('#banner .banners');
  $('#banner .dots a').click (function () {
    $banners.attr ('class', 'banners n' + ($(this).index () + 1));
    $(this).addClass ('active').siblings ().removeClass ();
  }).first ().click ();
});