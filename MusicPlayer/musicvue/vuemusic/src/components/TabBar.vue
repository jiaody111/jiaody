<template>
    <div class="tabbar">
      <router-link to="/recommend" class="item">
        <span>推荐</span>
      </router-link>
      <router-link to="/singer"  class="item">
        <span>歌手</span>
      </router-link>
      <router-link to="/search"  class="item">
        <span>搜索</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .tabbar{
    width: 100%;
    height: 84px;
  @include bg_sub_color();
    display: flex;
    justify-content: space-around;
    .item{
      span{
        line-height: 84px;
      @include font_size($font_medium);
      @include font_color();
      }
      &.router-link-active{
        span{
          @include font_active_color();
        }
        border-bottom: 5px solid #000;
        @include border_color();
      }
    }
  }
</style>
