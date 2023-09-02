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
          <img :src="imageUrl" alt="Lord Ganesha" class="image_response" /> 
      </swiper-slide>
      <swiper-slide>
        <img :src="imageUrl1" alt="Lord Ganesha" class="image_response"/>
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
/* Existing styles */

/* Media query for max-width: 400px */
@media (max-width: 400px) {
  .image_response {
    height:90%;
    width: 90%;
    margin-top: 55%;
    margin-left: 10%;
    /* Adjust other styles if needed */
  }
}

/* Media query for max-width: 600px */
@media (min-width: 401px) and (max-width: 600px) {
  .image_response {
    height: 100%;
    width: 300px;
    margin-top: 60%;
    margin-left: 10%;
    /* Adjust other styles if needed */
  }
}

/* Media query for min-width: 601px and max-width: 800px */
@media (min-width: 601px) and (max-width: 800px) {
  .image_response {
    height: 400px;
    width: 400px;
    margin-top: 30%;
    margin-left: 8%;
    /* Adjust other styles if needed */
  }
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
