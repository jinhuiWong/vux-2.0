<template>
  <div class="vux-actionsheet">
    <div class="weui_mask_transition" :class="{'weui_fade_toggle': props_show}" :style="{display: props_show ? 'block' : 'none'}" @click="props_show=false"></div>
    <div class="weui_actionsheet" :class="{'weui_actionsheet_toggle': props_show}">
      <div class="weui_actionsheet_menu">
        <div class="actionsheet_cell_container">
          <div class="weui_actionsheet_cell" v-for="(text, key) in menus" @click="emitEvent('on-click-menu', key)" v-html="text">
          </div>
        </div>
        <!-- <div class="vux-actionsheet-gap" v-if="showCancel"></div> -->
        <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.props_show=this.show
    if(this.value) this.props_show=this.value
  },
  mounted () {
    this.$tabbar = document.querySelector('.weui_tabbar')
  },
  props: {
    show: Boolean,
    value: {
      type:Boolean,
      default:false
    },
    showCancel: Boolean,
    cancelText: {
      type: String,
      default: 'cancel'
    },
    menus: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return{
      props_show:false
    }
  },
  methods: {
    emitEvent (event, menu) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        this.$emit(event, menu)
        this.$emit(`${event}-${menu}`)
        this.props_show = false
      }
    },
    fixIos (zIndex) {
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex
      }
    }
  },
  watch: {
    value(val){
      this.props_show=val
    },
    props_show(val){
      if (val) {
        this.fixIos(-1)
      } else {
        setTimeout(() => {
          this.fixIos(100)
        }, 200)
      }
      this.$emit('input',val)
    },
    show (val) {
      this.props_show=val
    }
  },
  beforeDestroy () {
    this.fixIos(100)
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_actionsheet';

.vux-actionsheet-gap {
  height: 8px;
  width: 100%;
  background-color: #eee;
}

.vux-actionsheet-cancel{
  border-radius: 15px;
  margin:0px 15px;
  margin-bottom:13px;
}

.vux-actionsheet-cancel:before {
  border-top: none;
}

// css hack
.weui_fade_toggle {
  background: rgba(0, 0, 0, 0.3);
}

.weui_actionsheet {
    background-color: inherit ;
}

.weui_actionsheet_menu {
    background-color: inherit;
}

.weui_actionsheet_cell {
    background-color: #fff;
    padding: 15px 0;
}

.actionsheet_cell_container{
  border-radius: 15px;
  margin:15px;
  margin-bottom:5px;
  overflow:hidden
}
</style>
