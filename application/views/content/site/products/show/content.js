/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  var $tabs = $('#tabs > *');
  var $panels = $('#panels > *');
  
  $tabs.click (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    $panels.eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  }).first ().click ();
});