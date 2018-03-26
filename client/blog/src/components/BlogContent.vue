<template>
  <div class="container col-md-8">
    <div class="container">
      <div>
        <h2>{{contentBlog.title}}</h2>
      </div>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer"> Published by: {{contentBlog.author}} | <cite title="Source Title">{{contentBlog.createdAt}}</cite></footer>
      </blockquote>
    </div>
    <div class="container">
      <p>{{contentBlog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: ['id', 'articles'],
  data () {
    return {
      contentBlog: ''
    }
  },
  watch: {
    id () {
      this.articles.map(value => {
        if (value.id === this.id) {
          this.contentBlog = value
        }
      })
    }
  }
}
</script>

<style>

</style>
