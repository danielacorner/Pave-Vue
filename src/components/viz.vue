<template>
   <div>

    <d3-network :net-nodes="nodes" :net-links="[]" :options="options"></d3-network>
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

    return {
      nodes: dataMixin.data().items.map(function(d){
               return {
                 index: d, x: null, y: null,
                 cluster: d.cluster,
                 workers: d.workers,
               }}),
      colors: [
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
       ],

      // links: [],
      simulation: null,
      customForces: {
        X: 1000,
      //   Y: 10.29,
      //   Center: 0,
      //   // ManyBody: d3.forceManyBody().strength(300),
      //   // ManyBody: strength(-30),
      },
      options: {
        nodeSize: 15,
        nodeLabels: false,
        // linkWidth:2,
        force: 45.00,
        forces: {
          Center: false,
          X: 0.29,
          Y: 0.29,
          ManyBody: true,
          Link: false,
        },
      },
    };
  },
  methods: {
     color: function(cluster){
       return this.colors[cluster]
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
  created() {
    const clusters = new Array(this.colors.length)
   // set the colour
    for(let node of this.nodes){
      node._color = this.color(node.cluster)
    }
    this.simulation = d3.forceSimulation(this.nodes)
        .force('cluster', cluster().strength(0.2))
    //     // .force('charge', d3.forceManyBody().strength(d => -100))
    //     // .force('link', d3.forceLink(this.graph.links))
    //     .force('x', d3.forceX(1))
    //     .force('y', d3.forceY(1))
  },
  mounted() {

    console.log('mounted');
    // grab the simulation
    console.log(D3Network);
    console.log("%cD3Network.methods.simulate",'font-size: 18px; font-weight: bold;');
    console.log(D3Network.methods.simulate);
    console.log("%cD3Network.methods.setCustomForces",'font-size: 18px; font-weight: bold;');
    console.log(D3Network.methods.setCustomForces);
    console.log("%cD3Network.methods.getD3Func",'font-size: 18px; font-weight: bold;');
    console.log(D3Network.methods.getD3Func);
    console.log(D3Network.methods.getD3Func("forceManyBody"));


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
