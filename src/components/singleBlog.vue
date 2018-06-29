<template> 
   <div id="single-blog"> 
     <h1>{{blog.title}}</h1>
     <article>{{blog.body}}</article>
   </div>
</template> 

 <script> 
 //imports

export default {
  //components: {},
  //props: {},
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },
  methods: {},
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
    .then(function(data){
      this.blog = data.body
    })
  },
  // computed: {}
}
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>