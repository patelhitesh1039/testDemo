<template>
  <div class="navigation-container">
    <a href="#" class="navigation-button"><i class="fas fa-home"></i></a>
    <a href="#" class="navigation-button"><i class="fas fa-search"></i></a>
    <a href="#" class="navigation-button"><i class="fas fa-envelope"></i></a>
    <a href="#" class="navigation-button"><i class="fas fa-bell"></i></a>
    <a href="#" class="navigation-button"><i class="fas fa-user"></i></a>
  </div>
</template>
<script>
export default {
  name: 'TempleNavigation',
}
</script>
<style scoped>  
 .navigation-container {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 1;
}
.navigation-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
}

</style>
