<template>
  <div class="weui_cell">
    <div class="weui_cell_bd weui_cell_primary">
      <textarea
      class="weui_textarea"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :placeholder="placeholder"
      :readonly="readonly"
      :name="name"
      :rows="rows"
      :cols="cols"
      v-model="props_value"
      :style="textareaStyle"
      :maxlength="max" ref="textarea"></textarea>
      <div class="weui_textarea_counter" v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: {
      type: String,
      default: ''
    },
    name: String,
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    spellcheck: 'false'
  },
  watch: {
    props_value(newVal){
      if (this.max && this.props_value.length > this.max) {
        this.props_value = newVal.slice(0, this.max)
      }
      this.$emit('on-change', this.props_value)
      this.$emit('input',this.props_value)
    },
    value (newVal) {
      this.props_value=newVal
    }
  },
  created () {
    this.props_value=this.value
  },
  computed: {
    count () {
      let len = 0
      if (this.props_value) {
        len = this.props_value.replace(/\n/g, 'aa').length
      }
      return len > this.max ? this.max : len
    },
    textareaStyle () {
      if (this.height) {
        return {
          height: `${this.height}px`
        }
      }
    }
  },
  methods: {

  },
  data () {
    return {
      props_value:''
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
</style>
