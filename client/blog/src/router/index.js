import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ListContent from '@/components/ListContent'
import BlogContent from '@/components/BlogContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ListContent,
      children: [{
        path: '/:id',
        name: 'BlogContent',
        component: BlogContent,
        props: true
      }]
    }
  ]
})
