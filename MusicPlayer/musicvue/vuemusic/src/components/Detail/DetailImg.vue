<template>
  <div class="img-container">
    <img :src="imgsrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'DetailImg',
  props: {
    imgsrc: {
      type: String,
      default: '',
      requires: true
    }
  }
}
</script>

<style scoped lang="scss">
.img-container{
  width: 100%;
  height: 500px;
  overflow: hidden;
  img{
    display: block;
    width: 100%;
  }
}
</style>
