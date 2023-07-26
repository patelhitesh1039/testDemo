<template>
  <div class="image-background"></div>
</template>

<script>
export default {
  name: 'TempleBackground',
}
</script>

<style scoped>
.image-background {
  background-image: url("https://img.freepik.com/premium-photo/red-gradient-studio-background-light-effect_333858-537.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%; /* Fit image to viewport */
  position: fixed;
  top: -20%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  margin-bottom: 0px;
}
</style>
