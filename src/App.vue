<template>
  <div id="nav">
    <!-- <div @click="$router.push({path: '/'})">WORKS</div> | -->
    <!-- <div @click="$router.push({name: '/'})">WORKS</div> -->
    <router-link to="/">WORKS</router-link> |
    <router-link to="/about">About</router-link>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #000;
}
</style>
