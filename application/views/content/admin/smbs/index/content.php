<div class='panel'>
  <header>
    <h2>SMB 頁面資訊</h2>
    <a href='<?php echo $obj ? base_url ($uri_1, $obj->id, 'edit') : base_url ($uri_1, 'add');?>' class='icon-e'></a>
  </header>


  <form class='form full'>
    <input type='hidden' name='_method' value='put' />

    <div class='row n2'>
      <label>底圖：</label>
<?php if ($obj) { ?>
        <div class='x2'>
          <img src='<?php echo $obj->cover->url ();?>' />
        </div>
<?php } else { ?>
        <div class='x'></div>
<?php } ?>
    </div>

    <div class='row n2'>
      <label>標題1：</label>
      <div class='x'><?php echo $obj ? $obj->title1 : '';?></div>
    </div>

    <div class='row n2'>
      <label>副標題1：</label>
      <div class='x'><?php echo $obj ? $obj->sub_title1 : '';?></div>
    </div>

    <div class='row n2'>
      <label>標題2：</label>
      <div class='x'><?php echo $obj ? $obj->title2 : '';?></div>
    </div>

    <div class='row n2'>
      <label>副標題2：</label>
      <div class='x'><?php echo $obj ? $obj->sub_title2 : '';?></div>
    </div>

  </form>
</div>
