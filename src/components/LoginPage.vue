<template>
  <div class="LoginPage_main_class">
    <div class="icon_css">

      <router-view />

      <router-link to='/'>

        <i class="fas fa-bars home-icon" @click="toggleSidebar"></i>
      </router-link>
    </div>

    <h2>Login</h2>
    <div class="input-container">
      <label for="mobileno">Enter Mobile Number:</label>
      <input type="text" id="mobileno" v-model="mobileno" />
    </div>
    <button class="login-button" @click="login">OTP</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileno: "",
    };
  },
  methods: {
    login() {
      // You can implement your login logic here.
      console.log("mobileno:", this.mobileno);
    },
  },
};
</script>

<style scoped>
.icon_css {
  text-align: left;
  margin-left: 11px;

}

.header {
  padding: 20px;
  justify-content: center !important;
}


.login-container {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  width: 51%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
}

.login-container h2 {
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.input-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-container input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.LoginPage_main_class{
  background-color: #ebc30f;
   height: auto;
  height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}


@media (max-width: 311) {
  .login-container {
    width: 19%;
    height: 100%;


  }
}

@media (max-width: 411) {
  .login-container {
    width: 19%;
    height: 100%;

  }
}

@media (max-width: 511) {
  .login-container {
    width: 19%;
    height: 100%;

  }
}

@media (max-width: 600px) {
  .login-container {
    width: 95%;
    height: 100%;

  }
}
</style>
