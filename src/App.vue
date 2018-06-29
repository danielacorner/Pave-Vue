<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
//imports
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'
import d3 from 'd3'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header, // use app-header since header is already a html tag
  },
  // props: {},
  data () {
    return {

    }
  },
  methods: {

  },
  // lifecycle hooks: {},
  // computed: {}
}
</script>

<style>
body{
  /* margin: 0; */
  font-family: 'Raleway', sans-serif;
}

</style>
