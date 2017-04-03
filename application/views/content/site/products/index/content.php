<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('product', 'title');?></h1>
  </div>
</nav>


<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items'>
    <?php foreach (Menu::alls (true) as $lang) { ?>
            <a<?php echo $menu_id == $lang['id'] ? ' class="active"' : '';?> href='<?php echo base_url ('products', $lang['id']);?>'><?php echo $lang['name'];?></a>
      <?php foreach ($lang['subs'] as $sub) { ?>
              <a<?php echo $menu_id == $sub['id'] ? ' class="active sub"' : ' class="sub"';?> href='<?php echo base_url ('products', $sub['id']);?>'><?php echo $sub['name'];?></a>
      <?php } ?>
    <?php } ?>
      </div>

      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
      <div id='products'>
    <?php foreach ($products as $product) { ?>
            <a href='<?php echo base_url ('product', $product->id);?>' class='product'>
        <?php if ($product->images) { ?>
                <img src='<?php echo $product->images[0]->name->url ('500x500c');?>'>
        <?php } ?>
              <h3><?php echo $product->title;?></h3>
            </a>
    <?php } ?>
      </div>
      <div class="pagination"><?php echo $pagination;?></div>
    </div>
  </div>
</div>