<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ListContent from '@/components/ListContent'
import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    ListContent
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
