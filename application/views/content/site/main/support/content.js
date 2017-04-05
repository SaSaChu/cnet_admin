/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  var $a = $('#main .container .left .items a');
  var $articles = $('#main .container .right article');

  $a.click (function () {
    $(this).addClass ('active').siblings ().removeClass ();
    $articles.eq ($(this).index ()).addClass ('active').siblings ().removeClass ();
  }).first ().click ();
});