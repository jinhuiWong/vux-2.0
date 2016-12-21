<template>
  <div class="vux-tab" :class="{'vux-tab-no-animate': !animate}">
    <input v-model="props_index" style="display:none">
    <slot></slot>
    <div v-if="animate" class="vux-tab-ink-bar" :class="barClass" :style="barStyle"></div>
  </div>
</template>

<script>

export default {
  mounted () {
    // stop bar anmination on first loading
    setTimeout(() => {
      this.hasReady = true
    }, 0)
    this.updateIndex();
    this.$on('onTabItemClick',function(index){
        this.props_index = index;
        this.$emit('on-index-change', this.props_index);
    });
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    value: Number,
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: {
      type: String,
      default: '#04be02'
    },
    defaultColor: {
      type: String,
      default: '#666'
    },
    disabledColor: {
      type: String,
      default: '#ddd'
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    barLeft () {
      return `${this.props_index * (100 / this.number)}%`
    },
    barRight () {
      return `${(this.number - this.props_index - 1) * (100 / this.number)}%`
    },
    barStyle () {
      return {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        backgroundColor: this.activeColor,
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      }
    },
    barClass () {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      }
    }
  },
  watch: {
    value(val){
      this.props_index=val
    },
    index : function(newIndex, oldIndex){
        this.props_index=newIndex;
    },
    props_index (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      oldIndex > -1 && this.$children[oldIndex] && (this.$children[oldIndex].props_selected = false)
      newIndex > -1 && (this.$children[newIndex].props_selected = true)
      this.$emit('input',newIndex);
    }
  },
  methods: {
      updateIndex() {
          if (!this.$children) return
          this.number = this.$children.length
          let children = this.$children
          for (let i = 0; i < children.length; i++) {
              children[i].index = i
              if (children[i].index === this.index) {
                  this.props_index = i
              }
          }
      }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      number: this.$children.length,
      hasReady: false,
      props_index:0
    }
  }
}
</script>


<style lang="less">
@prefixClass: vux-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: .3s;

.@{prefixClass} {

  &-ink-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;

    &-transition-forward {
      transition: right @effect-duration @easing-in-out,
      left @effect-duration @easing-in-out @effect-duration * 0.3;
    }
    &-transition-backward {
      transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
      left @effect-duration @easing-in-out;
    }
  }

}

.vux-tab {
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}
.vux-tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}
.vux-tab .vux-tab-item {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: #666;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: #04be02;
  border-bottom: 3px solid #04be02;
}

.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {
  background: 0 0;
}
</style>
