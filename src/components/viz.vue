<template> 
   <div> 
     
    <d3-network :net-nodes="nodes" :options="options"></d3-network>
		<!-- <svg id="svgCanvas"> -->
      <!-- <circle v-for="circle in filteredCircles" v-bind:style="{r: circleRadius+'px'}" v-bind:key="circle.id"/> -->
    <!-- </svg> -->
     
   </div>
</template> 

<script>
//imports
import D3Network from 'vue-d3-network'
import dataMixin from '../mixins/dataMixin'
import * as d3 from 'd3'

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
      // links: [],
      options:
      {
        nodeSize: 15,
        nodeLabels: false,
        // linkWidth:2,
        force: 45.01,
        forces: {
          Center: false,
          X: 0.29,
          Y: 0.29,
          ManyBody: true,
          Link: false,
        },
        customForces: {
          cluster: null
        },
    // setCustomForces (sim) {
    //   let forces = this.customForces
    //   if (forces) {
    //     for (let f in forces) {

    //       let d3Func = this.getD3Func('force' + f)

    //       if (d3Func) {
    //         let args = forces[f]
    //         sim.force('custom' + f, d3Func(...args))
    //       }
    //     }
    //   }
    //   return sim
    // },
    // getD3Func (name) {
    //   let func = d3[name]
    //   if (func && typeof (func) === 'function') return func
    //   return null
    // },
      },
    };
  },
  methods: {
     color: function(cluster){
       let colors = [
          "#4B40DD",
          "#D42A2F",
          "#329E33",
          "#BCBC35",
          "#2678B2",
          "#AA3DAA",
          "#FD7F27",
          "#7F7F7F",
          "#8B564C",
          "#29BECE",
       ]
       return colors[cluster]
     },
     resizeNodes: function(sizeBy){
      let sizeFunction = null
      switch(sizeBy){
        case "workers": sizeFunction = (d,i) => this.nodes[i].workers/1800  
      }
  
      d3.selectAll(".node").transition()
        .delay((d,i)=>i*0.6).duration(250)
        .attr("r", sizeFunction)
     }
  },

  mounted() {
    // grab the data from the dataMixin
    this.nodes = dataMixin.data().items
    console.log(this.nodes)
    
    // set the colour
    for(let node of this.nodes){
      node._color = this.color(node.cluster)
    }

    console.log('hello');
    // grab the simulation
    console.log(D3Network);

    
     //--------------- set up the force simulation ---------------\
    // const clusterForce = 3.5;

    // function forceCluster(alpha) { 
    //   // alpha = attractor force
    //   for (var i = 0, n = nodes.length, node, cluster, k = alpha * 0.12; i < n; ++i) {
    //     node = nodes[i];
    //     cluster = clusters[node.cluster];
    //     node.vx -= (clusterForce*node.x - cluster.x) * k;
    //     node.vy -= (clusterForce*node.y - cluster.y) * k;
    //   }
    // }

    // this.customForces.cluster = forceCluster(100)

  },
  computed: {
    
    // filteredCircles: function() {
      //   return this.circles.filter(circle => {
        //     return circle > 3;
    //   });
    // },
  },
  // updated() {
    // }
};

// import * as d3 from "d3";
// // d3.selectAll("circle").attr("r","100px")

</script>

<style>
svg {
  background: #eee;
  width: 90vw;
  margin: -10vh 20vw 10vh -20vw;
  height: 70vh;
}
circle {
  fill: red;
  r: circleRadius;
  transform: translate(0vw, 0vh);
}

</style>