<template> 
   <nav> 
      <div class="nav-wrapper">
        <a href="#" data-target="nav-mobile" class="sidenav-trigger hide-on-med-and-up"><i class="material-icons">menu</i></a>
        <ul id="nav-desktop" class="hide-on-small-only">
          <li><router-link to="/" exact class="left brand">Pave</router-link></li>
          <li><router-link to="/about" exact>About</router-link></li>
          <li><router-link to="/help" exact>Help</router-link></li>
          <li><router-link to="/feedback" exact>Feedback</router-link></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><router-link to="/" exact class="brand">Pave</router-link></li>
          <li><router-link to="/about" exact>About</router-link></li>
          <li><router-link to="/help" exact>Help</router-link></li>
          <li><router-link to="/feedback" exact>Feedback</router-link></li>          <li> <a href="#">Contact</a> </li>
        </ul>
        <!-- search bar -->
        <!-- <ul class="right">
          <li class="input-field">
            <i class="material-icons prefix">search</i>
            <input type="text" id="search"/>
            <label class="white-text" for="search">Search jobs...</label>
          </li>
        </ul> -->
        <form>
          <div class="right input-field">
            <input type="search" id="search" required/>
            <i class="prefix label-icon material-icons green-text">search</i>
            <label id="search-label" for="search" class="">Search jobs...</label>
            <!-- <label for="search" class="white-text"></label> -->
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
   </nav>
</template> 

 <script>
//imports

export default {
  //components: {},
  //props: {},
  data() {
    return {};
  },
  methods: {}
  // lifecycle hooks: {},
  // computed: {}
};

</script>

<style scoped>

ul {
  list-style-type: none;
  text-align: center;
  /* margin: 0; */
}
li {
  display: inline-block;
  /* margin: 0 10px; */
}
.sidenav li{
  display: block;
}
a {
  color: #27AE60;
  text-decoration: none;
  /* padding: 6px 8px; */
  border-radius: 10px;
}
.brand {
  font-size: 32px;
}
nav {
  background: #eee;
  /* padding: 14px 0; */
  /* margin-bottom: 40px; */
}
.router-link-active {
  background: #eee;
  color: #3C8D44;
}
#search-label{
  margin: -12px 0 0 50px;
  font-size: 16px;
  /* color: #27AE60; */
}
#search-label.active{
  margin: -2px 0 0 50px;
}
form div{
  width: 40%;
}
</style>