<template>
  <div>
    <group>
      <x-switch title="Toggle" :value="show1" @on-change="show1change"></x-switch>
    </group>
    <loading :show="show1" :text="text1"></loading>
  </div>
</template>

<script>
import { Loading, Group, XSwitch } from '../components'

export default {
  components: {
    Loading,
    Group,
    XSwitch
  },
  data () {
    return {
      show1: false,
      text1: 'Processing'
    }
  },
  methods: {
    show1change (val) {
      this.show1=val
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            this.text1 = 'Start processing'
            return
          }
          this.text1 = `${percent}% completed`
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 50)
}
</script>
