<div class='panel'>
  <header>
    <h2>新增最新消息</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>

  <form class='form full' method='post' action='<?php echo base_url ($uri_1);?>' enctype='multipart/form-data'>
    
    <div class='row n2'>
      <label>* 語系</label>
      <div>
        <select name='lang_id' id='lang_id'>
    <?php if ($langs = Lang::all (array ('select' => 'id, name'))) {
            foreach ($langs as $lang) { ?>
              <option value='<?php echo $lang->id;?>'<?php echo (isset ($posts['lang_id']) ? $posts['lang_id'] : 0) == $lang->id ? ' selected': '';?>><?php echo $lang->name;?></option>
      <?php }
          }?>
        </select>
      </div>
    </div>

    <div class='row n2'>
      <label>* 選單</label>
      <div>
        <select name='menu_id' id='menu_id' data-menus='<?php echo json_encode (Menu::alls ());?>' data-d4='<?php echo isset ($posts['menu_id']) ? $posts['menu_id'] : 0;?>'></select>
      </div>
    </div>

    <div class='row n2'>
      <label>* 標題</label>
      <div>
        <input type='text' name='title' value='<?php echo isset ($posts['title']) ? $posts['title'] : '';?>' placeholder='請輸入標題..' maxlength='200' pattern='.{1,200}' required title='輸入標題!' autofocus />
      </div>
    </div>

    <div class='row n2'>
      <label>* 封面</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='' />
          <input type='file' name='cover' />
        </div>
      </div>
    </div>

    <div class='row n2'>
      <label>* 內容</label>
      <div>
        <textarea name='content' class='pure autosize cke' placeholder='請輸入文章內容..'><?php echo isset ($posts['content']) ? $posts['content'] : '';?></textarea>
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
