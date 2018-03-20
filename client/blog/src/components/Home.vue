<template>
  <div class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <img src="http://kb4images.com/images/fruit-wallpaper/38143666-fruit-wallpaper.jpg" alt="fruits" style="width:100%;">
        <div class="carousel-caption">
          <h3>Foods</h3>
          <p>Check out our new juice recipes</p>
        </div>
      </div>

      <div class="item">
        <img src="https://images.pexels.com/photos/310983/pexels-photo-310983.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="lifestyle" style="width:100%;">
        <div class="carousel-caption">
          <h3>lifestyle</h3>
          <p></p>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#myCarousel img {
  max-height: 500px;
}

</style>
