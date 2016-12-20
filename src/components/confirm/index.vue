<template>
  <div>
    <x-dialog class="weui_dialog_confirm"
    :show="props_show"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
      <div class="weui_dialog_bd"><slot></slot></div>
      <div class="weui_dialog_ft">
        <a href="javascript:;" class="weui_btn_dialog default" @click="onCancel">{{cancelText}}</a>
        <a href="javascript:;" class="weui_btn_dialog primary" @click="onConfirm">{{confirmText}}</a>
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
    title: {
      type: String,
      required: true
    },
    confirmText: {
      type: String,
      default: 'confirm'
    },
    cancelText: {
      type: String,
      default: 'cancel'
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
    return {
      props_show:false
    }
  },
  methods: {
    onConfirm () {
      this.props_show = false
      this.$emit('on-confirm')
    },
    onCancel () {
      this.props_show = false
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_dialog';
</style>