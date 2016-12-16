<template>
  <div>
      <popup-picker :fixed-columns="hideDistrict ? 2 : 0" :columns="3" :data="list" :title="title" :value="props_value" show-name :inline-desc="inlineDesc" :placeholder="placeholder" @on-hide="emitHide" @on-show="$emit('on-show')" @on-cancel="$emit('on-cancel')" @on-ok="emitOk"></popup-picker>
  </div>

</template>

<script>
import name2value from '../../filters/name2value'
import PopupPicker from '../popup-picker'

export default {
  components: {
    PopupPicker
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    rawValue: Boolean,
    list: {
      type: Array,
      required: true
    },
    inlineDesc: String,
    placeholder: String,
    hideDistrict: Boolean
  },
  data(){
    return {
      props_value:[]
    }
  },
  created () {
    this.props_value=this.value
    if (this.props_value.length && this.rawValue) {
      const parsedVal = name2value(this.props_value, this.list)
      if (/__/.test(parsedVal)) {
        console.error('Vux: Wrong address value', this.props_value)
        this.props_value = []
      } else {
        this.props_value = parsedVal.split(' ')
      }
    }
  },
  methods: {
    emitHide (closeType,val) {
      this.props_value=val
      this.$emit('on-hide', closeType,val)
    },
    emitOk(val){
      this.$emit('on-ok',val)
    }
  },
  watch:{
    value(val){
      this.props_value=val
    }
  }
}
</script>
