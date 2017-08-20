<div class='panel'>
  <header>
    <h2>修改 Solutions</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>


  <form class='form full' method='post' action='<?php echo base_url ($uri_1, $obj->id);?>' enctype='multipart/form-data'>
    <input type='hidden' name='_method' value='put' />
    
    <div class='row n2'>
      <label>* 封面</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='<?php echo $obj->cover->url ('');?>' />
          <input type='file' name='cover' />
        </div>
      </div>
    </div>

    <div class='row n2'>
      <label>* 選項名稱</label>
      <div>
        <input type='text' name='menu' value='<?php echo isset ($posts['menu']) ? $posts['menu'] : $obj->menu;?>' placeholder='請輸入選項名稱..' maxlength='200' pattern='.{1,200}' required title='輸入選項名稱!' autofocus />
      </div>
    </div>

    <div class='row n2'>
      <label>* 標題</label>
      <div>
        <input type='text' name='title' value='<?php echo isset ($posts['title']) ? $posts['title'] : $obj->title;?>' placeholder='請輸入標題..' maxlength='200' pattern='.{1,200}' required title='輸入標題!' />
      </div>
    </div>

    <div class='row n2'>
      <label>* 副標題</label>
      <div>
        <input type='text' name='sub_title' value='<?php echo isset ($posts['sub_title']) ? $posts['sub_title'] : $obj->sub_title;?>' placeholder='請輸入副標題..' maxlength='200' pattern='.{1,200}' required title='輸入副標題!' />
      </div>
    </div>

    <div class='row n2'>
      <label>* 內容</label>
      <div>
        <textarea name='content' class='pure autosize cke' placeholder='請輸入文章內容..'><?php echo isset ($posts['content']) ? $posts['content'] : $obj->content;?></textarea>
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
