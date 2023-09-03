<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
          <router-view/>
            <router-link to="/">
            </router-link>
          
      </template>

<script>

export default {
  name: 'App',

}
</script>

<style>

.header {
    /* background-color: #ebc30f; */
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
        width: 100%;

  }
#app {
  /* background-color: #ebc30f; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
</style>
