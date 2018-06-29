<template> 
   <div> 
     
    <d3-network :net-nodes="nodes" :net-links="links" :options="options"></d3-network>
		<!-- <svg id="svgCanvas"> -->
      <!-- <circle v-for="circle in filteredCircles" v-bind:style="{r: circleRadius+'px'}" v-bind:key="circle.id"/> -->
    <!-- </svg> -->
     
   </div>
</template> 

<script>
//imports
import D3Network from 'vue-d3-network'
import dataMixin from '../mixins/dataMixin'

export default {
  components: {
    D3Network
  },
  // props: {
  // circles: {
  //   type: Array,
  //   required: true
  // }
  // },
  mixins: [dataMixin],
  data() {
    console.log(dataMixin.data().items);
    console.log('%c'+{dataMixin},'font-size: 18px; font-weight: bold;');
    
    return {
      nodes: [],
      links: [],
      options:
      {
        force: 110,
        nodeSize: 15,
        nodeLabels: false,
        linkWidth:2
      }
    };
  },
  methods: {

  },

  mounted() {
    this.nodes = dataMixin.data().items

  },
  computed: {
    // filteredCircles: function() {
    //   return this.circles.filter(circle => {
    //     return circle > 3;
    //   });
    // },
  },
  updated() {
  }
};

// import * as d3 from "d3";
// // d3.selectAll("circle").attr("r","100px")

</script>

<style>
svg {
  background: peachpuff;
  width: 90vw;
  margin: -10vh 20vw 10vh -20vw;
  height: 70vh;
}
circle {
  fill: red;
  r: circleRadius;
}

</style>