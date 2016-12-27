<template>
  <div class="vux-alert">
    <input style="display:none" v-model="props_show">
    <x-dialog
    class="weui_dialog_alert"
    :show="props_show"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
      <div class="weui_dialog_bd"><slot></slot></div>
      <div class="weui_dialog_ft">
        <a href="javascript:" class="weui_btn_dialog primary" @click="onHide">{{buttonText}}</a>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../dialog'

export default {
  components: {
    XDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    show: Boolean,
    title: String,
    buttonText: {
      type: String,
      default: 'OK'
    },
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    }
  },
  created(){
    this.props_show=this.show
    if(this.value) this.props_show=this.value
  },
  methods: {
    onHide () {
      this.props_show = false
    }
  },
  watch: {
    value(val){
      this.props_show=val
    },
    props_show(val){
      this.$emit('input',val)
    },
    show (val) {
      this.props_show=val
    }
  },
  data(){
    return{
      props_show:false
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_dialog';
</style>
