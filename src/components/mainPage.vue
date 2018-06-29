<template> 
   <!-- 9x9 grid -->
   <div id="grid-container"> 
    <!-- top row -->
    <div class="grid-item valign-wrapper">
      <!-- Communication -->
      <slider title="Communication and Verbal skills"></slider>
    </div>
    <div class="grid-item valign-wrapper">
      <button class="btn btn-large waves-effect" @click="graphView">
          <div class="switch">
            Graph View
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </button>
    </div>
    <div class="grid-item valign-wrapper">
      <!-- Logic -->
      <slider title="Logic and Reasoning skills"></slider>
    </div>
    <!-- middle row -->
    <div class="grid-item valign-wrapper">
      <button class="btn btn-legend waves-effect" @click="colourLegend">
        <p>
          Colour
          <br/>
          Legend
        </p></button>
    </div>
    <div class="grid-item valign-wrapper">
      <viz></viz>
    </div>
    <div class="grid-item valign-wrapper">
      <button class="btn btn-legend waves-effect" @click="sizeLegend">
        <p>
          Size
          <br/>
          Legend
        </p></button>
    </div>
    <!-- bottom row -->
    <div class="grid-item valign-wrapper">
      <!-- Computer -->
      <slider title="Computer and Information skills"></slider>
    </div>
    <div class="grid-item valign-wrapper">
      <button class="btn btn-large waves-effect" @click="resetFilters">
        Reset Filters<i class="material-icons">refresh</i>
        </button>
    </div>
    <div class="grid-item valign-wrapper">
      <!-- Math -->
      <slider title="Math and Spatial skills"></slider>
    </div>
   </div>
</template> 

<script>
//imports
import slider from "./slider.vue";
import viz from "./viz.vue";

export default {
  components: {
    slider: slider,
    viz: viz
  },
  //props: {},
  data() {
    return {};
  },
  methods: {
    graphView: function() {
      console.log("graph view");
    },
    resetFilters: function() {
      console.log("reset filters");
    },
    colourLegend: function() {
      console.log("colour legend");
    },
    sizeLegend: function() {
      console.log("size legend");
    }
  }
  // lifecycle hooks: {},
  // computed: {}
};
</script>

<style scoped>
#grid-container {
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 19vh 50vh 19vh;
}
.grid-item {
  /* padding: 20px; */
  border: 1px dashed black;
  /* text-align: center; */
  margin: auto;
  /* padding: 20px; */
  box-sizing: border-box;
}
.btn-legend {
  height: 60px;
  width: 100px;
}
.btn-legend p {
  line-height: 1.8em;
  margin: 0;
}
</style>