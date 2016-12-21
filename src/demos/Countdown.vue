<template>
  <div>
    <group title="auto countdown">
      <cell title="15s" :value="value">
        <countdown slot="value" :time="15" @on-finish="finish" v-show="show"></countdown>
      </cell>
    </group>
    <group title="manually">
      <x-switch title="start" v-model="start"></x-switch>
      <cell title="15s">
        <countdown slot="value" v-model="time" :start="start" @on-finish="finish2"></countdown>
      </cell>
      <cell title="双向绑定time" :value="time"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Countdown, XSwitch } from '../components'

export default {
  components: {
    Group,
    Cell,
    Countdown,
    XSwitch
  },
  methods: {
    finish (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    finish2 (index) {
      this.start = false
      this.time = 20
    }
  },
  data () {
    return {
      show: true,
      time: 15,
      value: '',
      start: false
    }
  }
}
</script>