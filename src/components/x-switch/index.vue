
<template>
  <div class="weui_cell weui_cell_switch">
  <!-- <p v-show="value">ggggg</p> -->
    <div class="weui_cell_hd weui_cell_primary">
      <label class="weui_label" :style="labelStyle" v-html="title"></label>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="weui_cell_ft">
      <input class="weui_switch" type="checkbox" :disabled="disabled" v-model="props_value"/>
    </div>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc'

export default {
  components: {
    InlineDesc
  },
  created(){
    this.props_value=this.value;
  },
  computed: {
    labelStyle () {
      let isHTML = /<\/?[^>]*>/.test(this.title)
      let width = Math.min(isHTML ? 5 : (this.title.length + 1), 14) + 'em'
      return {
        width
      }
    }
  },
  data(){
    return {
      props_value: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    value: Boolean,
    inlineDesc: String
  },
  watch: {
    value (newVal) {
      this.props_value=newVal;
    },
    props_value(newVal){
      this.$emit('on-change', newVal);
      this.$emit('input',newVal);
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/weui/widget/weui_cell/weui_switch';

.weui_cell_switch .weui_cell_ft {
  font-size: 0;
}
</style>
