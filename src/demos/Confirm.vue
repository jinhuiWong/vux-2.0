<template>
  <div>
    <group>
      <x-switch title="Toggle" v-model="show"></x-switch>
    </group>
    <confirm v-model="show" title="confirm deleting the item" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
      <p style="text-align:center;">Are you sure?</p>
    </confirm>
  </div>
</template>

<script>
import { Confirm, Group,  XSwitch } from '../components'

export default {
  components: {
    Confirm,
    Group,
    XSwitch
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm () {
      console.log('on confirm')
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    }
  }
}
</script>
