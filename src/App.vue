<template>
  <div id="app">
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
  </div>
</template>

<style land="scss">
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
.gallery-thumbs .swiper-slide {
  position:relative; margin:0 10px; width:95px; height:95px; background-color:transparent;
  }
.swiper-pagination-bullets .swiper-pagination-bullet:after {
  position:absolute; top:0; right:0; bottom:0; left:0; content:"";
  display:block; width:100%; height:100%;
  background-size:100%;
  background-position:center;
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(1):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/4BEz6b2G7oQebnFJQW1tVr/e370619112d1346f2b8e15cb6454c8f0/icon_lips_1c.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(2):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(3):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(4):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/JiVBlurI1tR5VJey1p0st/619d6aaddd8161b8c1937a181c277f03/icon_akewaka.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(5):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(6):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/4BEz6b2G7oQebnFJQW1tVr/e370619112d1346f2b8e15cb6454c8f0/icon_lips_1c.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(7):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(8):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(9):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/JiVBlurI1tR5VJey1p0st/619d6aaddd8161b8c1937a181c277f03/icon_akewaka.svg);
}
.swiper-pagination-bullets .swiper-pagination-bullet:nth-child(10):after {
  background-image:url(https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg);
}
</style>
