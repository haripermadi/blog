<template>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">LifeLog</h1>
    <h2 class="lead">You don't have to live your life feeling bad about your past. <br>
    You can let it go and finally find peace.
    </h2>
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
.jumbotron-fluid {
  background-image: url('../assets/image1.jpeg');
  background-size: 100% 500px;
  background-repeat: no-repeat;
}

.lead {
  color: navy;
  font-weight: bold;
}
h1{
  font-family: "Comic Sans MS", cursive, sans-serif;
}

</style>
