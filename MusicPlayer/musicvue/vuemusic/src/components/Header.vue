<template>
  <div class="header">
    <span class="headerLeft"></span>
    <span class="headerCenter">网易云音乐</span>
    <span class="headerRight"></span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";

  .header {
    height: 100px;
    width: 100%;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft, .headerRight {
      width: 84px;
      height: 84px;
      margin-top: 8px;
      text-align: center;
    }
    .headerLeft{
      background-image: url("../assets/images/logo_163.png");
      background-size: cover;
    }
    .headerRight{
      background-image: url("../assets/images/account_163.png");
      background-size: cover;
    }
    .headerCenter {
      line-height: 100px;
      text-align: center;
      @include font_size($font_medium);
      color: white;
      font-weight: bold;
    }
  }
</style>
