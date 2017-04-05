<?php
  if ($banners) { ?>
    <div id='banner'>
      <div class='container'>

        <div class='banners'>
    <?php foreach ($banners as $banner) { ?>
            <a href='<?php echo $banner->link;?>'>
              <img src='<?php echo $banner->cover->url ('1140x380c');?>'>
            </a>
    <?php } ?>
        </div>
        <div class='dots'>
    <?php foreach ($banners as $banner) { ?>
            <a></a>
    <?php } ?>
        </div>
      </div>
    </div>
<?php
  }
  if ($menus) { ?>
    <div id='menu'>
      <div class='container'>
        <div class='items'>
          <div>
    <?php foreach ($menus as $menu) { ?>
            <a href='<?php echo base_url ('products', $menu->id);?>'><?php echo $menu->name;?></a>
    <?php } ?>
          </div>
        </div>
      </div>
    </div>
<?php
  }
  if ($products) { ?>
    <div id='products'>
      <div class='container'>
        <h2><?php echo Lang::get ('index', 'mixed');?></h2>
        <div class='items'>
    <?php foreach ($products as $product) { ?>
            <a href="<?php echo base_url ('product', $product->id);?>">
              <img src='<?php echo $product->cover1->url ('500x500c');?>'>
              <span><?php echo $product->title;?></span>
            </a>
    <?php } ?>
        </div>
      </div>
    </div>
<?php
  }
  if ($blogs) { ?>
    <div id='blog'>
      <div class='container'>
        <div>
          <h3><?php echo Lang::get ('index', 'cnet_news');?></h3>
    <?php foreach ($blogs as $blog) { ?>
            <a href="<?php echo base_url ('news', $blog->id);?>">
              <h4><?php echo $blog->title;?></h4>
              <p><?php echo $blog->mini_content ();?></p>
            </a>
    <?php } ?>

          <a href="<?php echo base_url ('news-list');?>"><?php echo Lang::get ('index', 'see_more');?></a>
        </div>
        <div>
          <h3><?php echo Lang::get ('index', 'cnet_turkey');?></h3>
          <div>
            <img src='<?php echo base_url ('resource', 'image', 'welcome.jpg');?>' />
            <p><?php echo Lang::get ('index', 'desc');?></p>
          </div>
        </div>
      </div>
    </div>
<?php
  }
