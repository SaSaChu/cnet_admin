/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('#lang_select').change (function () {
    window.location.replace ($(this).data ('url') + '/' + $(this).val ());
  });
});