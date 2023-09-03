<template>
    <div>


        <div class="left-button1">
          <div class="round-button"></div>
        </div>
        <div class="left-button2">
          <div class="round-button"></div>
        </div>
        <div class="right-button1">
          <div class="round-button"></div>
        </div>
        <div class="right-button2">
          <div class="round-button"></div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'LeftButton',
}
</script>
<style scoped>
.left-button1 {
    position: fixed;
    top: 70%;
    left: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }

  .left-button2 {
    position: fixed;
    top: 80%;
    left: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }

  .right-button1 {
    position: fixed;
    top: 70%;
    right: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }

  .right-button2 {
    position: fixed;
    top: 80%;
    right: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }
</style>
