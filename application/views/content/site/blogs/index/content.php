<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('news', 'title');?></h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container w2'>
    <div class='left'>
      
      <div class='items'>
  <?php foreach ($blogs as $blog) { ?>
          <a href='<?php echo base_url ('news', $blog->id);?>'>
            <h3><?php echo $blog->title;?></h3>
            <span><?php echo $blog->mini_content (200);?></span>
          </a>
  <?php } ?>
        
        <div class="pagination"><?php echo $pagination;?></div>

      </div>

      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
      <div class='blogs'>

  <?php foreach ($blogs as $blog) { ?>
          <div class='blog'>
            <img src='<?php echo $blog->cover->url ('400x400c');?>' />
            <h3><?php echo $blog->title;?></h3>
            <p><?php echo $blog->mini_content (250);?></p>
            <a href="<?php echo base_url ('news', $blog->id);?>"><?php echo Lang::get ('news', 'see_more');?></a>
          </div>
  <?php } ?>
      </div>
    </div>
  </div>
</div>