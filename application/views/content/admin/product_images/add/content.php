<div class='panel'>
  <header>
    <h2>新增產品圖片</h2>
    <a href='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>' class='icon-x'></a>
  </header>


  <form class='form' method='post' action='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>' enctype='multipart/form-data'>
    <input type='hidden' name='x' value='x' />
    
    <div class='row n2'>
      <label>* 圖片</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='' />
          <input type='file' name='name' />
        </div>
      </div>
    </div>

    <div class='btns'>
      <div class='row n2'>
        <label></label>
        <div>
          <button type='reset'>取消</button>
          <button type='submit'>送出</button>
        </div>
      </div>
    </div>
  </form>
</div>
