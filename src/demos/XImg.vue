<template>
  <div>
    <div v-for="src in list" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
    </div>
  </div>
</template>

<script>
import { XImg } from '../components'
export default {
  components: {
    XImg
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      list: [
        'http://og1rlwcj8.bkt.clouddn.com/005JqWi9gw1ewwctbyvbsj30c8096t8y.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'http://og1rlwcj8.bkt.clouddn.com/f1.jpg',
        'http://og1rlwcj8.bkt.clouddn.com/ty.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'http://og1rlwcj8.bkt.clouddn.com/zxy.jpg',
        'http://og1rlwcj8.bkt.clouddn.com/u=3737719926,1965507257&fm=21&gp=0.jpg'
      ]
    }
  }
}
</script>

<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
