/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('#lang_select').change (function () {
    if ($(this).data ('links')[$(this).val ()].link.length)
      window.location.assign ($(this).data ('links')[$(this).val ()].link.length);
    else
      window.location.replace ($(this).data ('url') + '/' + $(this).val ());
  });
});