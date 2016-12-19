<template>
  <div class="vux-checker-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [Array],
    max: Number
  },
  data(){
    return {
      props_value:[]
    }
  },
  created(){
    this.props_value=this.value
  },
  watch: {
    props_value(val){
      this.$emit('on-change', val)
    },
    value (newValue) {
      this.props_value=this.value
    }
  }
}
</script>

<style>
.vux-checker-item {
  display: inline-block;
}
</style>
