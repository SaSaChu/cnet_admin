<div class='panel'>
  <header>
    <h2>修改 SMB 頁面資訊</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>

  <form class='form full' method='post' action='<?php echo base_url ($uri_1);?>' enctype='multipart/form-data'>

    <div class='row n2'>
      <label>* 底圖</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='' />
          <input type='file' name='cover' />
        </div>
      </div>
    </div>


    <div class='row n2'>
      <label>* 標題1</label>
      <div>
        <input type='text' name='title1' value='<?php echo isset ($posts['title1']) ? $posts['title1'] : '';?>' placeholder='請輸入標題1..' maxlength='200' pattern='.{1,200}' required title='輸入標題1!' autofocus />
      </div>
    </div>

    <div class='row n2'>
      <label>* 副標題1</label>
      <div>
        <textarea name='content' class='pure autosize' placeholder='請輸入副標題1..'><?php echo isset ($posts['sub_title1']) ? $posts['sub_title1'] : '';?></textarea>
      </div>
    </div>

    <div class='row n2'>
      <label>* 標題2</label>
      <div>
        <input type='text' name='title2' value='<?php echo isset ($posts['title2']) ? $posts['title2'] : '';?>' placeholder='請輸入標題2..' maxlength='200' pattern='.{1,200}' required title='輸入標題2!' />
      </div>
    </div>

    <div class='row n2'>
      <label>* 副標題2</label>
      <div>
        <textarea name='sub_title2' class='pure autosize' placeholder='請輸入副標題2..'><?php echo isset ($posts['sub_title2']) ? $posts['sub_title2'] : '';?></textarea>
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
