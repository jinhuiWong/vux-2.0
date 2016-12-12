<template>
  <div class="vux-tab-item" :class="[props_selected ? activeClass : '', {'vux-tab-selected': props_selected}]" :style="style" @click="onItemClick">
    <slot></slot>
  </div>
</template>

<script>

export default {
  mounted() {
      this.$parent.updateIndex()
      this.props_selected=this.selected
  },
  props: {
    activeClass: String,
    disabled: Boolean,
    selected: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    style () {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.props_selected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      }
    }
  },
  beforeDestroy() {
      const $parent = this.$parent
      this.$nextTick(() => {
          $parent.updateIndex()
      })
  },
  methods: {
      onItemClick() {
          if (typeof this.disabled === 'undefined' || this.disabled === false) {
              this.props_selected = true;
              this.$parent.$emit('onTabItemClick',this.index);
          }
      }
  },
  watch: {
    props_selected(val){
      if (val) {
          this.$parent.$emit('onTabItemClick',this.index);
        }
    },
    selected (val) {
      console.log('selected');
      this.props_selected=val;
    }
  },
  data() {
      return {
          index: -1,
          props_selected:false
      }
  }
}
</script>
