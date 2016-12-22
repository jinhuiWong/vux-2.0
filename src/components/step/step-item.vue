<template>
<div class="vux-step-item" :class=" { 'vux-step-item-with-tail' : !props_stepLast} ">
  <div :class="'vux-step-item-tail ' + 'vux-step-item-tail-' + props_status" v-show="!props_stepLast" :style="{right: $parent.gutter}"></div>
  <div :class="'vux-step-item-head ' + 'vux-step-item-head-' + props_status">
    <div class="vux-step-item-head-inner">
      <span v-if="!icon && props_status!='finish'" class="vux-step-item-icon">{{props_stepNumber}}</span>
      <span v-else :class="'vux-step-item-icon ' + 'vux-step-item-' + iconName">
        <icon type="success_no_circle" class="vux-step-item-checked"></icon>
      </span>
    </div>
  </div>
  <div :class="'vux-step-item-main ' + 'vux-step-item-main-' + props_status" :style="{backgroundColor: $parent.backgroundColor, paddingRight: props_stepLast ? 0 : $parent.gutter}">
    <span class="vux-step-item-title">{{title}}</span>
    <div class="vux-step-item-description">{{description}}</div>
  </div>
</div>
</template>

<script>
import Icon from '../icon'

export default {
  created(){
    this.props_stepNumber=this.stepNumber
    this.props_status=this.status
    this.props_stepLast=this.stepLast
  },
  data(){
    return{
      props_stepNumber:null,
      props_status:null,
      props_stepLast:false
    }
  },
  props: {
    title: String,
    description: String,
    stepNumber: {
      type: Number
    },
    stepLast: {
      type: Boolean,
      default: false
    },
    icon: String,
    status: String,
    tailWidth: {
      type: Object
    }
  },
  computed: {
    iconName () {
      return this.icon || 'check'
    }
  },
  watch:{
    stepLast(val){
      this.props_stepLast=val
    },
    stepNumber(val){
      this.props_stepNumber=val
    },
    status(val){
      this.props_status=val
    }
  },
  components: {
    Icon
  }
}
</script>
