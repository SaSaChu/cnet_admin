<nav id='nav'>
  <div class='container'>
    <h1><?php echo $product->title;?></h1>
  </div>
</nav>

<div id='main' class='n1'>
  <div class='container'>
    <div class='left'>
      <img src='<?php echo $product->cover1->url ('500x500c');?>'>
      <img src='<?php echo $product->cover2->url ('500x500c');?>'>
      <img src='<?php echo $product->cover3->url ('500x500c');?>'>
    </div>
    <div class='right'>

      <div id='tabs'>
        <a><?php echo Lang::get ('product', 'overview');?></a>
        <a><?php echo Lang::get ('product', 'general_features');?></a>
        <a><?php echo Lang::get ('product', 'downloadable');?></a>
      </div>

      <div id='panels'>
        <section>
          <h2><?php echo $product->title;?></h2>
          
          <div>
            <?php echo $product->content;?>
          </div>

          <div id='features'>
      <?php foreach ($product->features as $feature) { ?>
              <div>
                <div><img src='<?php echo $feature->name->url ('100x100c');?>'></div>
                <span><?php echo $feature->title;?></span>
                <p><?php echo $feature->mini_content (40);?></p>
              </div>
      <?php } ?>
        </section>

        <section>
    <?php foreach ($product->sources as $source) { ?>
            <div>
              <span><?php echo $source->title;?></span>
              <span class='icon-eject'></span>
              <span><?php echo $source->content;?></span>
            </div>
    <?php } ?>
        </section>
        <section>
    <?php foreach ($product->downloads as $download) { ?>
            <div>
              <span><?php echo $download->title;?></span>
              <span class='icon-eject'></span>
              <a href='<?php echo $download->name->url ();?>' download><?php echo Lang::get ('product', 'downloadable');?></a>
            </div>
    <?php } ?>
        </section>
      </div>

    </div>
  </div>
</div>

<div id='mores'>
  <div class='container'>
    <h2><?php echo Lang::get ('product', 'more');?></h2>
<?php
    foreach ($mores as $more) { ?>
      <a href="<?php echo base_url ('product', $more->id);?>">
        <img src="<?php echo $more->cover1->url ('500x500c');?>">
        <h3><?php echo $more->title;?></h3>
      </a>
<?php
    } ?>
  </div>
</div>


<div id='blog'>
  <div class='container'>
    <div>
      <h3><?php echo Lang::get ('index', 'cnet_news');?></h3>
<?php foreach (Blog::find ('all', array ('limit' => 3, 'conditions' => array ('lang_id = ?', Lang::current ()->id))) as $blog) { ?>
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

