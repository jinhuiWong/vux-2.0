<template>
  <div>
    <group>
      <x-switch title="Normal Usage" v-model="show1"></x-switch>
      <x-switch title="Show cancel menu" v-model="show2"></x-switch>
      <x-switch title="menu as tips" v-model="show3"></x-switch>
    </group>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <toast v-model="showSuccess">Deleted~</toast>
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from '../components'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast
  },
  data () {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      show2: false,
      menus2: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      show3: false,
      showSuccess: false,
      menus3: {
        'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
        delete: '<span style="color:red">Delete</span>'
      }
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
