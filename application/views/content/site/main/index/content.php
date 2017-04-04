
<div id='banner'>
  <div class='container'>

    <div class='banners'>
<?php foreach ($banners = Banner::find ('all', array ('conditions' => array ('lang_id = ?', Lang::current ()->id))) as $banner) { ?>
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

<div id='menu'>
  <div class='container'>
    <div class='items'>
      <div>
<?php foreach (Menu::find ('all', array ('conditions' => array ('menu_id = ? AND lang_id = ?', 0, Lang::current ()->id))) as $menu) { ?>
        <a href='<?php echo base_url ('products', $menu->id);?>'><?php echo $menu->name;?></a>
<?php } ?>
      </div>
    </div>
  </div>
</div>

<div id='products'>
  <div class='container'>
    <h2><?php echo Lang::get ('index', 'mixed');?></h2>
    <div class='items'>
<?php foreach ($products as $product) { ?>
        <a href="">
          <img src='<?php echo $product->cover1->url ('500x500c');?>'>
          <span><?php echo $product->title;?></span>
        </a>
<?php } ?>
    </div>
  </div>
</div>

<div id='blog'>
  <div class='container'>
    <div>
      <h3><?php echo Lang::get ('index', 'cnet_news');?></h3>
<?php foreach (Blog::find ('all', array ('limit' => 3, 'conditions' => array ('lang_id = ?', Lang::current ()->id))) as $blog) { ?>
        <a href="<?php echo base_url ('blog', $blog->id);?>">
          <h4><?php echo $blog->title;?></h4>
          <p><?php echo $blog->mini_content ();?></p>
        </a>
<?php } ?>

      <a href="<?php echo base_url ('blogs');?>"><?php echo Lang::get ('index', 'see_more');?></a>
    </div>
    <div>
      <h3><?php echo Lang::get ('index', 'cnet_turkey');?></h3>
      <div>
        <img src='http://127.0.0.1/case/cnet/Images/welcome.jpg' />
        <p><?php echo Lang::get ('index', 'desc');?></p>
      </div>
    </div>
  </div>
</div>
