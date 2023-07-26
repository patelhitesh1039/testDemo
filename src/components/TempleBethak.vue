<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="100"
      loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
          <img :src="imageUrl" alt="Lord Ganesha" style="height:300px; width:300px; margin-top: 33%;" />
      </swiper-slide>
      <swiper-slide>
        <img :src="imageUrl1" alt="Lord Ganesha" style="height:300px; width:250px; margin-top: 33%;"/>
    </swiper-slide>
    
    </swiper>
  </div>
</template>
<script>
// import { VueAgile } from 'vue-agile'
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  name: "TempleBethak",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        { url: require("@/assets/pngegg (1).png"), caption: "Slide 1" },
        { url: require("@/assets/pngegg.png"), caption: "Slide 2" },
        { url: require("@/assets/pngegg.png"), caption: "Slide 3" },
        // Add more image objects as needed
      ],
      imageUrl: require("@/assets/pngegg (1).png"),
      imageUrl1: require("@/assets/pngegg.png"), // Update the image file name and path as per your project structure
      // Update the image file name and path as per your project structure
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
      console.log("swiper");
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>




<style scoped>
.ganesha-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-47%, 40%);
  border-radius: 50%;
  z-index: 999;
}

.ganesha-image1 {
  /* You can remove this class or modify styles as needed */
  /* Add your custom styles here if necessary */
}
.image-background1 {
  background-image: url("https://png.pngtree.com/png-clipart/20221210/ourmid/pngtree-single-red-gold-product-display-with-podium-stand-stage-showcase-pedestal-png-image_6518892.png");
  background-repeat: no-repeat;
  background-size: 85% 100%;
  position: fixed;
  top: 45%;
  left: 45px;
  right: 0;
  bottom: 0;
  z-index: -1;
  margin-bottom: 45%;
}
</style>
