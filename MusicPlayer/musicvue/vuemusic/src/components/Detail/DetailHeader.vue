<template>
  <div class="header">
    <span class="headerLeft" @click="back"></span>
    <span class="headerCenter">{{listTitle}}</span>
    <span class="headerRight"></span>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    listTitle: {
      required: true,
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
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
    background-image: url("../../assets/images/back_163.png");
    background-size: cover;
  }
  .headerRight{
    background-image: url("../../assets/images/account_163.png");
    background-size: cover;
  }
  .headerCenter {
    text-align: center;
  @include font_size($font_medium);
    color: white;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
  }
  }
</style>
