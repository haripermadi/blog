<template>
  <div class="listcontent">
    <li class="list-group-item list-group-item-action list-group-item-light" v-for="(article,i) in articles" :key="i">
      <router-link :to="{name:'BlogContent', params: {id: article._id}}">{{article.title}}</router-link>
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
.listcontent{
  padding-right: 5px;
  padding-left: 5px;
  text-align: left;
}
</style>
