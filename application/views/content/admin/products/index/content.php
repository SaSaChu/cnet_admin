<header>
  <div class='title'>
    <h1>產品</h1>
    <p>列表</p>
  </div>

  <form class='select'>
    <button type='submit' class='icon-s'></button>

<?php 
    if ($columns) { ?>
<?php foreach ($columns as $column) {
        if (isset ($column['select']) && $column['select']) { ?>
          <select name='<?php echo $column['key'];?>'>
            <option value=''>請選擇 <?php echo $column['title'];?>..</option>
      <?php foreach ($column['select'] as $option) { ?>
              <option value='<?php echo $option['value'];?>'<?php echo (is_numeric ($column['value']) && ($column['value'] == $option['value'])) || ($option['value'] === $column['value']) ? ' selected' : '';?>><?php echo $option['text'];?></option>
      <?php } ?>
          </select>
  <?php } else { ?>
          <label>
            <input type='text' name='<?php echo $column['key'];?>' value='<?php echo $column['value'];?>' placeholder='<?php echo $column['title'];?>搜尋..' />
            <i class='icon-s'></i>
          </label>
<?php   }
      }?>
<?php 
    } ?>

  </form>
</header>


<div class='panel'>
  <header>
    <h2>產品列表</h2>
    <a href='<?php echo base_url ($uri_1, 'add');?>' class='icon-r'></a>
  </header>

  <div class='content'>


    <table class='table'>
      <thead>
        <tr>
          <th width='50' class='center'>#</th>
          <th width='200'>標題</th>
          <th>內容</th>
          <th width='50'>圖片</th>
          <th width='50'>功能</th>
          <th width='50'>特點</th>
          <th width='50'>下載</th>
          <th width='50'>語系</th>
          <th width='85' class='right'>修改/刪除</th>
        </tr>
      </thead>
      <tbody>
  <?php if ($objs) {
          foreach ($objs as $obj) { ?>
            <tr>
              <td class='center'><?php echo $obj->id;?></td>
              <td><?php echo $obj->mini_title (25);?></td>
              <td><?php echo $obj->mini_content (50);?></td>
              <td>
                <a class='icon-i' href="<?php echo base_url ('admin', 'product', $obj->id, 'images');?>"></a>
              </td>
              <td>
                <a class='icon-i' href="<?php echo base_url ('admin', 'product', $obj->id, 'features');?>"></a>
              </td>
              <td>
                <a class='icon-i' href="<?php echo base_url ('admin', 'product', $obj->id, 'sources');?>"></a>
              </td>
              <td>
                <a class='icon-i' href="<?php echo base_url ('admin', 'product', $obj->id, 'downloads');?>"></a>
              </td>
              <td><?php echo $obj->lang ? $obj->lang->name : '';?></td>
              <td class='right'>
                <a class='icon-e' href="<?php echo base_url ($uri_1, $obj->id, 'edit');?>"></a>
                /
                <a class='icon-t' href="<?php echo base_url ($uri_1, $obj->id);?>" data-method='delete'></a>
              </td>
            </tr>
    <?php }
        } else { ?>
          <tr>
            <td colspan='8' class='no_data'>沒有任何資料。</td>
          </tr>
  <?php } ?>
      </tbody>
    </table>

    <div class='pagination'>
      <?php echo $pagination;?>
    </div>

  </div>
</div>

