<template>
  <div>
    <br>
    <x-progress :percent="percent" @on-cancel="onCancel"></x-progress>
    <br>
    <box gap="10px">
      <x-progress :percent="percent1" :show-cancel="false"></x-progress>
    </box>
    <toast v-model="show" text="Bingo!!!!"></toast>
  </div>
</template>

<script>
import { XProgress, Box,Toast } from '../components'

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 50)
}

export default {
  components: {
    XProgress,
    Box,
    Toast
  },
  data () {
    return {
      percent: 80,
      percent1: 20,
      show:false
    }
  },
  mounted(){
    tick(this.percent1, (percent) => {
      this.percent1=percent
      if(percent===100) this.show=true
    })
  },
  methods:{
    onCancel(){
      this.percent=0

    }
  }
}
</script>
