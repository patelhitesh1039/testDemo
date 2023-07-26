<template>
  <div>
    <div >
      <img :src="imageUrl" alt="Temple Gate" style="height: 170px; position: fixed; top: 160px; left: -35px;" />
      
    </div>
    <div >
      <img :src="imageUrl" alt="Temple Gate" style="height: 170px; position: fixed; top: 160px; right: -35px;" />

    </div>
  </div>
</template>
<script>
export default {
  name: 'TempleGanti',
  data() {
      return {
        imageUrl: require('@/assets/—Pngtree—bell icon vector_5509751.png'), // Update the image file name and path as per your project structure
      };
    },
}
</script>
