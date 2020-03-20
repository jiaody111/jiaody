<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false, // 设置滚动条不显示
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    /*
    创建观察者对象
    MutationObserver构造函数只要监听到了指定内容发生了变化, 就会执行传入的回调函数
    mutationList: 发生变化的数组
    observer: 观察者对象
     */
    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })

    /*
    告诉观察者对象要监听的内容
     */
    const config = {
      childList: true, // 观察目标子节点的变化，添加或删除
      subtree: true, // 默认为false,设置为true可以观察后代节点
      attributeFilter: ['height', 'offsetHeight']// 观察的属性
    }
    /*
    告诉观察者对象要观察的对象和观察的对象
     */
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    scrollTo (x, y, time) {
      this.iscroll.scrollTo(x, y, time)
    },
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    }
  }
}
</script>

<style scoped>
#wrapper{
  width: 100%;
  height: 100%;
}
</style>
