/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('.left .items > a').click (function () {
    $(this).addClass ('active').siblings ().removeClass ();
    $('.right .items').eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  }).first ().click ();
});