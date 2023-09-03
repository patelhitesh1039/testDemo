<template>
  <div class="backgorund_color">

    <div class="header">


      <div class="home-button">
        <i class="fas fa-bars home-icon" @click="toggleSidebar"></i>


      </div>

    </div>
    <div class="sidebar" :class="{ 'open': isSidebarOpen }">
      <ul>
        <li @click="navigateTo('home')">Home</li>
        <li @click="navigateTo('profile')">Profile</li>
        <li @click="navigateTo('settings')">Settings</li>
        <!-- Add more sidebar items as needed -->
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    navigateTo(route) {
      // You can implement your routing logic here
      // For simplicity, you can use Vue Router or just set a variable to control which component is displayed on the main content area.
      // Example with Vue Router:
      this.$router.push({ name: route });
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
  
<style scoped>
.sidebar {
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
}
.sidebar.open {
  width: 250px; /* Adjust the width as per your design */
}
.sidebar {
  width: 250px;
  /* Adjust the width according to your design */
  background-color: #333;
  /* Sidebar background color */
  color: white;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin-bottom: 10px;
}

li:hover {
  text-decoration: underline;
}

.backgorund_color {
  background-color: #ebc30f;

}

.header {
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
</style>
  