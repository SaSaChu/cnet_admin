<nav id='nav'>
  <div class='container'>
    <h1>Kurumsal</h1>
  </div>
</nav>

<div id='main' class='n1'>
  <div class='container'>
<?php
    foreach ($products as $product) { ?>
      <a href='<?php echo base_url ('product', $product->id);?>' class='product'>
  <?php if ($product->images) { ?>
          <img src='<?php echo $product->images[0]->name->url ('500x500c');?>'>
  <?php } ?>
        <h3><?php echo $product->title;?></h3>
      </a>
<?php
    } ?>
    <div class="pagination"><?php echo $pagination;?></div>
  </div>
</div>