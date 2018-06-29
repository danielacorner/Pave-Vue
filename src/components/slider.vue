<template> 
   <div> 
    <h5>{{title}}</h5>
    <form action="#">
      <p class="range-field">
        <input type="range" id="test5" min="0" max="100" />
      </p>
    </form>
   </div>
</template> 

 <script> 
 //imports

export default {
  //components: {},
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {

  },

  // computed: {}
}
</script>

<style scoped>
div{
  padding: 10px;
}
h5{
  color: #27AE60;
  font-weight: bold;
}
</style>