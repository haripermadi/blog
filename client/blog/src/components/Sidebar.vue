<template>
  <div>
    <li class="list-group-item" v-for="(article,i) in articles" :key="i">
      <router-link :to="{name:'BlogContent', params: {id: article.id}}">{{article.title}}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['articles']
}
</script>

<style>

</style>
