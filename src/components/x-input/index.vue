<template>
	<div class="weui_cell" :class="{'weui_cell_warn': !valid}">
    <div class="weui_cell_hd">
      <label class="weui_label" :style="{width: $parent.labelWidth || (labelWidth + 'em'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title">{{title}}</label>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="weui_cell_bd weui_cell_primary">
      <input
      class="weui_input"
      :autocomplete="autocomplete"
      :autocorrect="autocorrect"
      :autocapitalize="autocapitalize"
      :spellcheck="spellcheck"
      :style="inputStyle"
      :type="props_type"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="props_value"
      @input="onValueChange($event)"
      @blur="blur"
      ref="input" />
       <!-- v-model="value" -->
    </div>
    <div class="weui_cell_ft">
      <icon type="clear" v-show="props_showClear && props_value && !readonly" @click.native="clear"></icon>
      <icon class="vux-input-icon-warn" type="warn" :title="!valid ? firstError : '' " v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon>
      <icon class="vux-input-icon-warn" type="warn" v-show="hasLengthEqual && dirty && equalWith && !valid"></icon>
      <icon type="success" v-show="equalWith && equalWith===props_value && valid"></icon>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import InlineDesc from '../inline-desc'

import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'

const validators = {
  'email': {
    fn: isEmail,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn (str) {
      return isMobilePhone(str, 'zh-CN')
    },
    msg: '手机号码'
  },
  'china-name': {
    fn (str) {
      return str.length >= 2 && str.length <= 6
    },
    msg: '中文姓名'
  }
}
export default {
  created(){
    this.props_value = this.value
    this.props_showClear=this.showClear
    this.props_type=this.type
    this.handleChangeEvent = false
  },
  mounted () {
    if (!this.title && !this.placeholder && !this.props_value) {
      console.warn('no title and no placeholder?')
    }
    if (this.equalWith) {
      this.props_showClear = false
    }
    if (this.required && !this.props_value) {
      this.valid = false
    }
    if (this.isType === 'email') {
      this.props_type = 'email'
    }
  },
  components: {
    Icon,
    InlineDesc
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    keyboard: String,
    inlineDesc: String,
    isType: String,
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    type: {
      type: String,
      default: 'text'
    },
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: 'off',
    autocapitalize: {
      type:String,
      default:'off'
    },
    // autocapitalize:'off',
    autocorrect: 'off',
    spellcheck: 'false',
    required: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pattern () {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*'
      }
    },
    labelWidth () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    },
    hasErrors () {
      return Object.keys(this.errors).length > 0
    },
    inputStyle () {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        }
      }
    },
    dirty () {
      return !this.prisine
    },
    invalid () {
      return !this.valid
    }
  },
  methods: {
    clear () {
      this.props_value = ''
      this.focus = true
    },
    blur () {
      this.setTouched()
      this.validate()
    },
    getError () {
      let key = Object.keys(this.errors)[0]
      this.firstError = this.errors[key]
    },
    validate () {
      if (this.equalWith) {
        this.validateEqual()
        return
      }
      this.errors = {}

      if (!this.props_value && !this.required) {
        this.valid = true
        return
      }

      if (!this.props_value && this.required) {
        this.valid = false
        this.errors.required = '必填哦'
        return
      }

      const validator = validators[this.isType]
      if (validator) {
        this.valid = validator[ 'fn' ](this.props_value)
        if (!this.valid) {
          this.errors.format = validator[ 'msg' ] + '格式不对哦~'
          return
        } else {
          delete this.errors.format
        }
      }

      if (this.min) {
        if (this.props_value.length < this.min) {
          this.errors.min = '最少应该输入'+this.min+'个字符哦'
          this.valid = false
          this.getError()
          return
        } else {
          delete this.errors.min
        }
      }

      if (this.max) {
        if (this.props_value.length > this.max) {
          this.errors.max = '最多可以输入'+this.max+'个字符哦'
          this.valid = false
          this.forceShowError = true
          return
        } else {
          this.forceShowError = false
          delete this.errors.max
        }
      }

      this.valid = true
    },
    validateEqual () {
      let willCheck = this.dirty || this.props_value.length >= this.equalWith.length
      // 只在长度符合时显示正确与否
      if (willCheck && this.props_value !== this.equalWith) {
        this.valid = false
        this.errors.equal = '输入不一致'
        return
      } else {
        this.valid = true
        delete this.errors.equal
      }
    },
    setTouched () {
      this.touched = true
    },
    onValueChange(event){
      this.props_value=event.target.value
      this.$emit('input',event.target.value)
    }
  },
  data () {
    return {
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      focus: false,
      errors: {},
      touched: false,
      valid: true,
      props_value: undefined,
      props_showClear:true,
      props_type:'text'
    }
  },
  watch: {
    focus (newVal) {
      if (newVal) {
        this.$els.input.focus()
      }
    },
    valid () {
      this.getError()
    },
    value (newVal) {
      this.props_value=newVal
    },
    props_value(newVal){
      console.log(newVal);
      if (this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true
        }
        this.validateEqual()
      } else {
        this.validate()
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal)
      }
      this.$emit('input',newVal)
    },
    showClear(val){
      this.props_showClear=val
    },
    type(val){
      this.props_type=val
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_access';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_vcode';
.vux-input-icon-warn.weui_icon_warn:before {
  font-size: 21px;
}
</style>
