<template>
  <div id="nav">
    <!-- <div @click="$router.push({path: '/'})">WORKS</div> | -->
    <!-- <div @click="$router.push({name: '/'})">WORKS</div> -->
    <ul>
      <li><router-link to="/">WORKS</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/careers">CAREERS</router-link></li>
    </ul>
  </div>
  <div class="menu_animation"></div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position:fixed; top:50px; right:45px; z-index:9;
    transition: opacity 2s;
    transition-property: opacity;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
#nav ul {display:flex;}
#nav ul li {padding:0 15px;}
#nav a {
  font-size:14px; font-weight: 700; color: #000; text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #000; font-weight:800;
}
</style>
