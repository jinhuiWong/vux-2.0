<template>
  <div>
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="onImgClick(index)">
    <!-- <previewer :list="list" ref="previewer" :options="options"></previewer> -->
    <previewer :list="list" ref="previewer"></previewer>

  </div>
</template>

<script>
import { Previewer } from '../components'

export default {
  components: {
    Previewer
  },
  data () {
    return {
      list: [{
        src: 'http://og1rlwcj8.bkt.clouddn.com/005JqWi9gw1ewwctbyvbsj30c8096t8y.jpg',
        w: 600,
        h: 400
      },
      {
        src: 'http://og1rlwcj8.bkt.clouddn.com/20141111234454_AwKCm.thumb.700_0.jpeg',
        w: 1200,
        h: 900
      },
      {
        src: 'http://og1rlwcj8.bkt.clouddn.com/zxy.jpg',
        w: 400,
        h: 400
      }],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  methods:{
    onImgClick(index){
      this.$refs.previewer.show(index)
    }
  }
}
</script>