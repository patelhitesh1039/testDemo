<template>
    <div class="sidebar">
      <ul>
        <li @click="navigateTo('home')">Home</li>
        <li @click="navigateTo('profile')">Profile</li>
        <li @click="navigateTo('settings')">Settings</li>
        <!-- Add more sidebar items as needed -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        // You can implement your routing logic here
        // For simplicity, you can use Vue Router or just set a variable to control which component is displayed on the main content area.
        // Example with Vue Router:
        this.$router.push({ name: route });
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px; /* Adjust the width according to your design */
    background-color: #333; /* Sidebar background color */
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
  </style>
  