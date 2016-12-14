<template>
  <div>
    <group>
      <x-switch title="默认提示" v-model="show1"></x-switch>
      <x-switch title="文字提示" v-model="show2"></x-switch>
      <x-switch title="提示取消" v-model="show3"></x-switch>
      <x-switch title="提示禁止" v-model="show4"></x-switch>
      <x-switch title="设置出现时间1s" v-model="show5"></x-switch>
      <x-switch title="long text" v-model="show6"></x-switch>
    </group>
    <toast v-model="show1" @on-hide="onHide">默认提示</toast>
    <toast v-model="show2" type="text">处理成功</toast>
    <toast v-model="show3" type="cancel">取消操作</toast>
    <toast v-model="show4" type="warn">禁止操作</toast>
    <toast v-model="show5" :time="1000">1s关闭</toast>
    <toast v-model="show6" type="text" width="20em">Talk is cheap, show me the code.</toast>
    <group title="prop:text">
      <x-switch title="default" v-model="show7"></x-switch>
      <x-switch title="text" v-model="show8"></x-switch>
    </group>
    <toast v-model="show7" text="Hello World"></toast>
    <toast v-model="show8" type="text" text="Hello World"></toast>
    <group title="As a plugin(>=v0.1.3)">
      <x-switch title="default" v-model="show9" @on-change="onChange"></x-switch>
    </group>
  </div>
</template>

<script>
import { Toast, Group, XSwitch } from '../components'
export default {
  components: {
    Toast,
    Group,
    XSwitch
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onChange (val) {
      const _this = this
      if (val) {
        this.$vux.toast.show({
          text: 'Hello World',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            _this.show9 = false
          }
        })
      } else {
        this.$vux.toast.hide()
      }
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false
    }
  }
}
</script>
