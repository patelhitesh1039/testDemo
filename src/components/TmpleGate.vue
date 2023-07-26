<template>
    <div class="temple_gate">
      <img :src="imageUrl" alt="Temple Gate"  />
    </div>
  </template>
  
  <script>
  export default {
    name : 'TempleGate',
    data() {
      return {
        imageUrl: require('@/assets/image.png'), // Update the image file name and path as per your project structure
      };
    },
  };
  </script>
  <style scoped>
 .temple_gate {
  width: 100%;
    position: fixed;
    left: 0px;
    top: 107px;
 }
 .temple_gate img {
  width: 100%;
 }
</style>
  
