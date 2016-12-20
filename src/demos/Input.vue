<template>
  <div>

    <group title="Default">
      <x-input title="message" placeholder="I'm placeholder" v-model="value"></x-input>
      <span style="margin-left: 15px;" >value: {{value}}</span>
      <br>
    </group>

    <group title="不显示清除按钮">
      <x-input title="message" placeholder="I'm placeholder" :show-clear="false" autocapitalize="characters"></x-input>
    </group>

    <group title="set is-type=china-name">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>

    <group title="set keyboard=number and is-type=china-mobile">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>

    <group title="set is-type=email">
      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
    </group>

    <group title="set min=2 and max=5">
      <x-input title="2-5个字符" placeholder="" :min="2" :max="5"></x-input>
    </group>

    <group title="确认输入">
      <x-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
      <x-input title="请确认6位数字" type="text" placeholder="" :equal-with="password"></x-input>
    </group>

    <group title="验证码" class="weui_cells_form">
      <x-input title="验证码" class="weui_vcode">
        <img slot="right" src="http://weui.github.io/weui/images/vcode.jpg">
      </x-input>
      <x-input title="发送验证码" class="weui_vcode">
        <x-button slot="right" type="primary">发送验证码</x-button>
      </x-input>
    </group>
    <group title="check if value is valid when required===true">
      <x-input title="message" placeholder="I'm placeholder" ref="input" @input="oninput1"></x-input>
      <cell title="get valid value" :value="'$valid value:' + valid"></cell>
    </group>

     <group title="check if value is valid when required===false">
      <x-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @input="oninput2"></x-input>
      <cell title="get valid value" :value="'$valid value:' + valid"></cell>
    </group>

  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from '../components'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      value:'',
      password: '123465',
      valid: false
    }
  },
  methods: {
    change (val) {
      console.log(val)
    },
    oninput1(val){
      this.valid=this.$refs.input.valid
    },
    oninput2(val){
      this.valid=this.$refs.input02.valid
    }
  }
}
</script>
<style scoped>
.weui_cell_ft .weui_btn {
  margin-left: 5px;
  vertical-align: middle;
  display: inline-block;
}
</style>
