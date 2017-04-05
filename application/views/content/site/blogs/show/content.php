<div id='main' class='n1'>
  <div class='container'>
    
    <article>
      <header>
        <div>
          <h1><?php echo $blog->title;?></h1>
          <time>@ <?php echo $blog->created_at->format ('m.d.Y H:i');?></time>
        </div>
        <a href="<?php echo base_url ('news-list');?>"><?php echo Lang::get ('news', 'back');?></a>
      </header>

      <div>
        <aside>
          <img src='<?php echo $blog->cover->url ('400x400c');?>' />
        </aside>
        <section><?php echo $blog->content;?></section>
      </div>
    </article>
  </div>
</div>