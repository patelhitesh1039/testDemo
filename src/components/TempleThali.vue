<template>
  <div class="dish-img">
    <!-- <img src="https://i.pinimg.com/originals/b0/4e/bf/b04ebf6b4aae0d640aa3afd47163a9a2.png"> -->
  </div>
</template>

<script>
export default {
  name: 'TempleThali',
  data() {
      return {
        imageUrl: require('@/assets/pngegg.png'), // Update the image file name and path as per your project structure
      };
    },
}
</script>

<style scoped>
.dish-img {
  background-image: url('../assets/dish.png');
  background-repeat: no-repeat;
  background-size: 40% 100%; /* Fit image to viewport */
  position: fixed;
  top: 70%;
  left:40% ;
  right: 0;
  bottom: 0;
  z-index: -1;
  margin-bottom: 30%;
  align-items: center;
    justify-content: center;
    position: fixed;
}
</style>


