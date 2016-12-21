<template>
  <a class="vux-button-tab-item" :class="classes" href="javascript:" :style="style" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>

export default {
  mounted() {
    this.$parent.updateIndex()
    this.props_selected=this.selected
  },
  computed: {
    classes () {
      return {
        'vux-button-group-current': this.index === this.$parent.props_index,
        'no-border-right': this.shouldRemoveBorder
      }
    },
    style () {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        }
      }
    }
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$parent.updateIndex()
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
      shouldRemoveBorder: false,
      props_selected:false
    }
  }


}
</script>
