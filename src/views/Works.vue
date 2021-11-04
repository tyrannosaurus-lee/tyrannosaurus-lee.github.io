<template>
  <div class="Works">
    <div class="works-con">
      <div class="transition-container">
          <div class="eunhye-logo">
            <img src="~@/assets/img/common/logo_eunhye.png" alt="">
          </div>
          <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="project-tit"></div>
              <div class="project-detail"></div>
            </swiper-slide>
          </swiper>
      </div>
      <div class="pagenation"></div>
    </div>

  </div>
</template>
<style scoped>
  .transition-container {
    position:fixed; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
    display:flex; align-items:center; padding:124px 6vw 219px;
  }
  .eunhye-logo {width:28vw;}
  .eunhye-logo img {display:block; width:100%;}
</style>
<script>
// import SwiperSlide from "@/components/SwiperSlide.vue";
// import 'swiper/css';

export default {
  name: 'Works',
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  // setup() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper);
  //   };
  //   const onSlideChange = () => {
  //     console.log('slide change');
  //   };
  //   return {
  //     onSwiper,
  //     onSlideChange
  //   };
  // }
}
</script>
