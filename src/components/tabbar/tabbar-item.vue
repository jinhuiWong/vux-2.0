<template>
  <a href="javascript:;" class="weui_tabbar_item" :class="{'weui_bar_item_on': $parent.props_index === index}" @click="onItemClick">
    <div class="weui_tabbar_icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]">
      <slot name="icon"></slot>
      <sup><badge v-if="badge" :text="badge"></badge></sup>
    </div>
    <p class="weui_tabbar_label">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
import Badge from '../badge'
import {go} from '../../libs/router.js'
export default {
  components: {
    Badge
  },
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  beforeMount(){
      this.$on('on-item-click',function(index) {
          this.link ? go(this.link,this.$router) : false;
          this.$parent.$emit('onTabbarItemClick',index);
      });
  },
  mounted(){
      this.$parent.updateIndex()
  },
  beforeDestroy(){
      const $parent = this.$parent
      this.$nextTick(() => {
          $parent.updateIndex()
      })
  },
  methods: {
      onItemClick () {
          if (typeof this.disabled === 'undefined' || this.disabled === false) {
              this.selected = true
              this.$emit('on-item-click',this.index,true)
          }
      }
  },
  data () {
      return {
          index: 0
      }
  }
}
</script>
