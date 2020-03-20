<template>
  <div class="personalized">
    <div class="personalized-top">
      <h3>{{title}}</h3>
    </div>
    <div class="personalized-list">
      <div class="personalized-list">
        <div class="item" v-for="value in Personalized" :key="value.id" @click="selectItem(value.id)">
          <img v-lazy="value.picUrl" alt="">
          <p>{{value.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    Personalized: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    selectItem (id) {
      this.$emit('select', id, this.type)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .personalized {

    .personalized-top {
      width: 100%;
      height: 84px;
      line-height: 84px;
      border-bottom: 1px solid #ccc;
      padding: 0 20px;

      h3 {
        @include font_size($font_large);
        font-weight: bold;
      }
    }

    .personalized-list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .item {
        width: 220px;
        padding: 10px 0;

        img {
          width: 220px;
          height: 200px;
          border-radius: 20px;
        }

        p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
</style>
