<template>
  <div class="Works">
    <div class="works-con">
      <div class="transition-container">
        <div class="eunhye-logo">
          <img src="~@/assets/img/common/logo_eunhye.png" alt="">
        </div>
        <div class="select-icon">
          <p>Please select icon</p>
        </div>
        <!-- 상단 갤러리 -->
        <swiper
          class="swiper gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide
            v-for="(item, index) in list"
            :key="index"
            :class="`slide-${index + 1}`"
          >
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img :src="`${item.image}`" alt="">
                </div>
                <div class="visual3">
                  <a :href="`${item.url}`" target="_blank">{{item.name}}</a>
                </div>
              </div>
              <div class="project-detail">
                <div class="slider-counter">
                  <span class="label">No.</span>
                  <span class="now">{{index + 1}}</span>
                  <span class="all">{{list.length}}</span>
                </div>
                <div class="project-name">{{item.name}}</div>
                <div class="project-info">{{item.period}}{{item.device}}</div>
                <div class="project-shortcut">
                  <a :href="`${item.url}`" target="_blank">View detail</a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- //상단 갤러리 -->
        <!-- 하단 아이콘 -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide
            v-for="(item, index) in list"
            :key="index"
            :class="`slide-${index + 1}`"
          ></swiper-slide>
        </swiper>
        <!-- //하단 아이콘 -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .transition-container {
    position:fixed; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
    display:flex; align-items:center; padding:124px 6vw 219px;
  }
  .eunhye-logo {width:28vw; z-index:9999;}
  .eunhye-logo img {display:block; width:70%;}
  .swiper-container {overflow:visible;}
  .swiper-slide {background:#fff;}
  /* 상단 슬라이드 */
  .gallery-top {
    width:56vw;
    .project-tit {
      position:relative; width:56vw; height:42vw; max-height:100%;
      .visual-con {
        position:absolute; top:0; bottom:0; left:0;
        padding:2vw; width:28vw; height:100%;
        .visual1 {position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%; opacity:0;}
        .visual2 {
          position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
          transform:rotate(10deg); opacity:0;
          img {width:100%;}
        }
        .visual3 {
          font-size:4vw; line-height:normal; font-weight:700;
          a {color:#000;}
        }
      }
      .project-detail {
        position:absolute; top:0; right:0; bottom:0;
        width:28vw; height:42vw; max-height:100%;
        .slider-counter {
          display:flex; -webkit-box-pack:end; justify-content:flex-end; font-size:10px;font-weight:600;
          .label {margin-right:6px;}
          .now {opacity:0; }
          .all {
            opacity:.25;
            &:before {display:inline-block; content:""; margin:0 5px; width:22px; height:1px; background:#000;}
          }
        }
        .project-name {
          display:flex; -webkit-box-align:center; align-items:center; height:10.2vw;
          font-weight:400; font-size:3vw; line-height:1; letter-spacing:-1px; white-space:pre; opacity:0;
          transform-origin: center right;
        }
        .project-info {}
        .project-shortcut {
          a {}
        }
      }
    }
    .slide-1 .visual1 {background-color:rgb(250, 250, 250);}
    .slide-2 .visual1 {background-color:rgb(7, 120, 143);}
    .slide-3 .visual1 {background-color:rgb(2, 59, 142);}
    .slide-4 .visual1 {background-color:rgb(240, 139, 113);}
    .slide-5 .visual1 {background-color:rgb(232, 211, 31);}
    .slide-6 .visual1 {background-color:rgb(0, 0, 0);}
    .slide-7 .visual1 {background-color:rgb(204, 204, 204);}
    .slide-8 .visual1 {background-color:rgb(249, 205, 22);}
    .slide-9 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-10 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-11 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-12 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-13 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-14 .visual1 {background-color:rgb(204, 204, 204);}
    .slide-15 .visual1 {background-color:rgb(249, 205, 22);}
    .swiper-slide-active {
      .visual-con {
        .visual1,
        div.visual2 { opacity:1;}
      }
    }
    .swiper-slide-prev {
      .visual-con {
        div.visual2 {
          transition:transform .5s cubic-bezier(.55,.055,.675,.19);
          transform:scale(.8) rotate(-20deg) translateY(-100vh); opacity:1;
        }
      }
      div.project-detail {
        .slider-counter {
          .now {
            opacity:1;
            transition:transform .5s;
          }
        }
        .project-name {
          opacity:1;
           transition:opacity .5s,transform .5s cubic-bezier(.55,.055,.675,.19);
        }
        .project-info {}
        .project-shortcut {
          a {}
        }
      }
    }
    .visual3 {
      position:relative; height:100%;
      background:#fff;
      display:flex; justify-content: space-around; align-items: center;
      span {
        position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%;

      }
    }
  }

  /* 하단 섬네일 슬라이드 */
  .gallery-thumbs {
    position:fixed; right:0; bottom:0; left:0; width:100%; height:140px;
    padding:23px 0 22px;
    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDUiPjxwYXRoIGZpbGw9IiNjNmM2YzYiIGQ9Ik0yIDBoMXYxSDJ6Ii8+PC9zdmc+);
    background-position:50%;
    background-size:5px 5px;
    .swiper-slide {
      cursor:pointer;
      background-size:95px;
      background-position:center;
      background-repeat:no-repeat;
      &.slide-1 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/4BEz6b2G7oQebnFJQW1tVr/e370619112d1346f2b8e15cb6454c8f0/icon_lips_1c.svg');
      }
      &.slide-2 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg');
      }
      &.slide-3 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg');
      }
      &.slide-4 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/JiVBlurI1tR5VJey1p0st/619d6aaddd8161b8c1937a181c277f03/icon_akewaka.svg');
      }
      &.slide-5 {
        background-image:url('~@/assets/img/works/works_icon05.png');
      }
      &.slide-6 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/70ZExw3p6Ex3mnllvqi5dI/d7ed50be73f8b1e90137ef4bde55543f/icon_gmb.svg');
      }
      &.slide-7 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/7dbe9pIaCBw7xeyKT9UBHK/b20f1d6baa6a8e5262da045353536330/icon_abc.svg');
      }
      &.slide-8 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5TT5Zse3x5p7kOv9sCuzVA/a00fddcc4649ab933128a792a2381ea4/icon_alu.svg');
      }
      &.slide-9 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg');
      }
      &.slide-10 {
        background-image:url('');
      }
      &.slide-11 {
        background-image:url('');
      }
      &.slide-12 {
        background-image:url('~@/assets/img/works/works_icon12.png');
      }
      &.slide-14 {
        background-image:url('~@/assets/img/works/works_icon14.png');
      }
      &.slide-15 {
        background-image:url('~@/assets/img/works/works_icon15.png');
      }
    }
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      // padding: $gap 0;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }

</style>
<script>
// https://github.surmon.me/vue-awesome-swiper/
// option : https://negabaro.github.io/archive/vue-awesome-swiper-option
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Works',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 8,
        effect: 'fade',
        lazy: true,
        speed: 5000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 8,
        centeredSlides: true,
        slidesPerView: 9,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        speed: 5000,
      },
      list: [
        {
            id: 1,
            name: 'HeyNews',
            device: 'Responsive Web',
            period: '2020.5 ~ 2020.10',
            image: require('@/assets/img/works/bg01.jpg'),
            url: 'https://hey.news.co.kr'
        },
        {
            id: 2,
            name: 'JTBC New App',
            device: 'APP (web view)',
            period: '2020.8 ~ 2020.10',
            image: require('@/assets/img/works/bg02.jpg'),
            url: 'https://play.google.com/store/apps/details?id=com.jtbc.news&hl=ko'
        },
        {
            id: 3,
            name: '날씨가좋으면 찾아가겠어요',
            device: 'Responsive Web',
            period: '2020.02',
            image: require('@/assets/img/works/bg03.jpg'),
            url: 'http://eunhye106.cafe24.com/event/weather/event.html'
        },
        {
            id: 4,
            name: 'Golden Disc',
            device: 'pc, mobile web',
            period: '2019.12',
            image: require('@/assets/img/works/bg04.jpg'),
            url: 'http://www.goldendisc.co.kr/kr/'
        },
        {
            id: 5,
            name: '백상예술대상',
            device: 'pc, mobile web',
            period: '2019. 04',
            image: require('@/assets/img/works/bg05.jpg'),
            url: 'https://www.baeksangawards.co.kr/'
        },
        {
            id: 6,
            name: 'JTBC 5th Event',
            device: 'pc, mobile web',
            period: '2021.05',
            image: require('@/assets/img/works/bg06.jpg'),
            url: 'http://eunhye106.cafe24.com/jtbc_5th/'
        },
        {
            id: 7,
            name: 'JTBC 아는형님 200회 출석 체크 이벤트',
            device: 'pc, mobile web',
            period: '2022.05',
            image: require('@/assets/img/works/bg07.jpg'),
            url: 'http://eunhye106.cafe24.com/event/knowingbrother/brother_mv_event.html'
        },{
            id: 8,
            name: 'JTBC beautyinside 바뀐그림찾기',
            device: 'pc, mobile web',
            period: '2023.05',
            image: require('@/assets/img/works/bg08.jpg'),
            url: 'http://eunhye106.cafe24.com/event/beautyinside/beautyinside_event.html'
        },{
            id: 9,
            name: 'JTBC2',
            device: 'pc, mobile web',
            period: '2024.05',
            image: require('@/assets/img/works/bg09.jpg'),
            url: 'https://jtbc2.joins.com/'
        },{
            id: 10,
            name: 'JTBC 히든싱어 레전드 편 투표',
            device: 'pc, mobile web',
            period: '2025.05',
            image: require('@/assets/img/works/bg10.jpg'),
            url: 'http://eunhye106.cafe24.com/event/hiddensinger5/legend_event.html'
        },{
            id: 11,
            name: '중앙패밀리포인트',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg11.jpg'),
            url: 'https://eunhye106.cafe24.com/family_point/family_point01.html'
        },{
            id: 12,
            name: 'JTBC 일단 뜨겁게 청소하라',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg12.jpg'),
            url: 'http://eunhye106.cafe24.com/event/hotclean/event.html'
        },{
            id: 13,
            name: 'JTBC Now Promotion',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg13.jpg'),
            url: 'http://eunhye106.cafe24.com/jtbc_now/jtbc_now3.htmlㄴ'
        },{
            id: 14,
            name: 'JTBC worldwide',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg14.jpg'),
            url: 'http://www.jtbcworldwide.com'
        },{
            id: 15,
            name: 'JTBC Mixnine vote',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg15.jpg'),
            url: 'http://eunhye106.cafe24.com/mixnine/index.html'
        }
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
