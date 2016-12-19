<template>
<div>
  <div v-show="title" class="weui_cells_title">{{title}}</div>
  <div class="weui_cells weui_cells_checkbox">
    <label class="weui_cell weui_check_label" :for="'checkbox_'+uuid+'_'+index" v-for="(one, index) in props_options">
      <div class="weui_cell_hd">
        <input type="checkbox" class="weui_check" :value="getItemKey(one)" v-model="props_value" :id="'checkbox_'+uuid+'_'+index">
        <i class="weui_icon_checked"></i>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <p v-html="getItemValue(one)"></p>
      </div>
    </label>
  </div>
  <tip v-show="!valid && dirty"><icon type="warn" class="icon_small"></icon>{{error}}</tip>
</div>

</template>

<script>
import Tip from '../tip'
import Icon from '../icon'
import { getValue, getKey } from './object-filter'
import shuffle from 'array-shuffle'

export default {
  components: {
    Tip,
    Icon
  },
  props: {
    title: String,
    required: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: true
    },
    max: Number,
    min: Number,
    fillMode: Boolean,
    randomOrder: Boolean
  },
  data(){
    return {
      errors: {},
      prisine: true,
      touched: false,
      valid: true,
      props_options:[],
      props_value:[]
    }
  },
  created(){
    this.handleChangeEvent = false
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.props_options=this.options
    this.props_value=this.value
  },
  mounted () {
    this.handleChangeEvent = true
    if (this.randomOrder) {
      this.props_options = shuffle(this.props_options)
    }
  },
  computed: {
    _total () {
      return this.fillMode ? (this.props_options.length + 1) : this.props_options.length
    },
    _min () {
      if (!this.required) {
        return 0
      }
      if (this.min) {
        if (this.min < 0) {
          return 1
        }
        if (this.min >= this._total) {
          return this._total
        }
        return this.min
      } else {
        return 1
      }
    },
    _max () {
      if (!this.required) {
        return this._total
      }
      if (this.max) {
        if (this.max > this._total) {
          return this._total
        }
        return this.max
      } else {
        return this._total
      }
    },
    valid () {
      return this.props_value.length >= this._min && this.props_value.length <= this._max
    },
    error () {
      let err = []
      if (this.props_value.length < this._min) {
        err.push('最少要选择'+this._min+'个哦')
      }
      if (this.props_value.length > this._max) {
        err.push('最多只能选择'+this._max+'个哦')
      }
      return err.join('')
    },
    dirty () {
      return !this.prisine
    },
    invalid () {
      return !this.valid
    }
  },
  methods:{
    setTouched () {
      this.touched = true
    },
    getItemKey(item){
      return getKey(item)
    },
    getItemValue(item){
      return getValue(item)
    }
  },
  watch: {
    props_value(newVal){
      if (this.prisine === true) {
        this.prisine = false
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal)
      }
      this.$emit('on-change', JSON.parse(JSON.stringify(newVal)))
    },
    value (newVal) {
      this.props_value=newVal
    },
    options(val){
      this.props_options=val
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_check';

.weui_cells_checkbox > label > * {
  pointer-events: none;
}
.weui_cells > a {
  color:#000;
}
</style>
