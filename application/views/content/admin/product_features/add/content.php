<div class='panel'>
  <header>
    <h2>新增產品功能</h2>
    <a href='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>' class='icon-x'></a>
  </header>


  <form class='form' method='post' action='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>' enctype='multipart/form-data'>
    
    <div class='row n2'>
      <label>* 圖片</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='' />
          <input type='file' name='name' />
        </div>
      </div>
    </div>

    <div class='row n2'>
      <label>* 標題</label>
      <div>
        <input type='text' name='title' value='<?php echo isset ($posts['title']) ? $posts['title'] : '';?>' placeholder='請輸入標題..' maxlength='200' pattern='.{1,200}' required title='輸入標題!' autofocus />
      </div>
    </div>
    
    <div class='row n2'>
      <label>內容</label>
      <div>
        <textarea name='content' class='pure' placeholder='請輸入內容..'><?php echo isset ($posts['content']) ? $posts['content'] : '';?></textarea>
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
