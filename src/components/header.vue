<template>
  <div class="header">


    <div class="home-button">
      <i class="fas fa-bars home-icon" @click="toggleSidebar"></i>


      <span class="welcome-text">Welcome</span>
      <i class="fas fa-home home-icon"></i>
    </div>
    <div class="sidebar" @click="toggleSidebar" :class="{ 'open': isSidebarOpen }">
      <ul>
        <li >
        <router-view/>
        <router-link to="/login">
          Login
        </router-link>
        </li>

        <!-- Add more sidebar items as needed -->
      </ul>
    </div>
    <div class="button-container">
      <div class="round-button"></div>
      <div class="round-button"></div>
      <div class="round-button"></div>
      <div class="round-button"></div>
      <div class="round-button"></div>
      <div class="round-button"></div>
    </div>



  </div>
</template>
<script>
export default {
  name: 'TempleHeader',
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
}
</script>
<style scoped>
.sidebar {
  z-index: 1111;

  background-color: white;
  width: 0;
  height: 100%;
  /* Cover the entire screen height */
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s;
  overflow: hidden;
}

.sidebar.open {
  width: 250px;
  /* Adjust the width as per your design */
}

.header {
  background-color: #ebc30f;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 90%;

}

.header {
  padding: 20px;
  justify-content: center !important;
}

.welcome-text {
  color: white;
  font-weight: bold;
  margin-right: 10px;
  flex-grow: 1;
  text-align: center;
}

.welcome-text {
  font-size: 16px;
}


.home-button {
  font-size: 18px;
}

.round-button {
  width: 30px;
  height: 40px;
  margin: 3px;
}

.home-button {
  color: white;
  font-size: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
}

.home-icon {
  margin-right: 5px;
}

.round-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  margin: 5px;
}

.button-container {
  display: flex;
  gap: 5px;
  overflow: hidden !important;
}</style>
