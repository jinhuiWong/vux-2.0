<template>
  <div>
    <group>
      <x-switch title="Toggle" v-model="show"></x-switch>
    </group>
    <alert v-model="show" title="congratulations" @on-show="onShow" @on-hide="onHide">Message is sent successfully~</alert>
    <group title="As a plugin(>=v0.1.3)">
      <x-switch title="Show" v-model="show1" @on-change="onChange"></x-switch>
    </group>
  </div>
</template>

<script>
import { Alert, Group, XSwitch } from '../components'

export default {
  components: {
    Alert,
    Group,
    XSwitch
  },
  data () {
    return {
      show: false,
      show1: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onChange (val) {
      const _this = this
      if (val) {
        this.$vux.alert.show({
          title: 'Vux',
          content: 'Be Careful',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            _this.show1 = false
          }
        })
      } else {
        this.$vux.alert.hide()
      }
    }
  }
}
</script>
