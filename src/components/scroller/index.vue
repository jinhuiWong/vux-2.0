<template>
  <div :style="styles">
    <div class="xs-container">
      <slot></slot>
      <slot name="pulldown"></slot>
      <slot name="pullup"></slot>
    </div>
  </div>
</template>

<script>
import XScroll from 'vux-xscroll/build/cmd/xscroll.js'
import Pulldown from 'vux-xscroll/build/cmd/plugins/pulldown'
import Pullup from 'vux-xscroll/build/cmd/plugins/pullup'

const pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
})

const pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
})

export default {
  props: {
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: true
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    pullupConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    pulldownStatus: {
      type: String,
      default: 'default'
    },
    pullupStatus: {
      type: String,
      default: 'default'
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    pullStatus: {
      type: Object,
      default () {
        return {
          down : 'default',
          up : 'default'
        }
      }
    }
  },
  methods: {
    reset (scrollPosition) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left)
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top)
        }
      }
      setTimeout(() => {
        this._xscroll && this._xscroll.render()
      })
    }
  },
  compiled () {
    this.uuid = Math.random().toString(36).substring(3, 8)
  },
  computed: {
    styles () {
      if (!this.props_height && this.elHeight==="" && this.lockX) {
        this.props_height = `${document.documentElement.clientHeight}px`
        this.reset()
      }

      if (this.props_height && this.props_height.indexOf('-') === 0) {
        this.props_height = `${document.documentElement.clientHeight + parseInt(this.props_height)}px`
      }

      return {
        height: `${this.props_height}`
      }
    }
  },
    beforeMount() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    //fix2.0
    this.props_height=this.height;
    this.props_pulldownStatus=this.pulldownStatus;
    //on事件
    this.$on('pulldown:reset',function(uuid) {
      // set pulldown status to default
      this.props_pulldownStatus = 'default'
      if (uuid === this.uuid) {
        this.pulldown.reset(() => {
          // repaint
          this.reset()
        })
      }
    });
    this.$on('pullup:reset',function(uuid) {
      // set pulldown status to default
      this.props_pullupStatus = 'default'
      if (uuid === this.uuid) {
        this.pullup.complete()
        this.reset()
      }
    });
    this.$on('pullup:done' ,function(uuid) {
      if (uuid === this.uuid) {
        this._xscroll.unplug(this.pullup)
      }
    });
    this.$on('scroller:reset' ,function(uuid) {
      if (uuid === this.uuid) {
        this.reset()
      }
    });
    this.$on('pullup:disable',function(uuid) {
      if (uuid === this.uuid) {
        this.pullup.stop()
      }
    });
    this.$on('pullup:enable',function(uuid) {
      if (uuid === this.uuid) {
        this.pullup.restart()
      }
    });
  },
  mounted () {
    this.elHeight=this.$el.style.height
    this.$el.setAttribute('id', `vux-scroller-${this.uuid}`)
    let content = null
    const slotChildren = this.$el.querySelector('.xs-container').childNodes
    for (let i = 0; i < slotChildren.length; i++) {
      if (slotChildren[i].nodeType === 1) {
        content = slotChildren[i]
        break
      }
    }
    if (!content) {
      throw new Error('no content is found')
    }

    this._xscroll = new XScroll({
      renderTo: `#vux-scroller-${this.uuid}`,
      lockX: this.lockX,
      lockY: this.lockY,
      scrollbarX: this.scrollbarX,
      scrollbarY: this.scrollbarY,
      content: content,
      bounce: this.bounce,
      useOriginScroll: this.useOriginScroll,
      useTransition: this.useTransition,
      preventDefault: this.preventDefault,
      boundryCheck: this.boundryCheck,
      gpuAcceleration: this.gpuAcceleration,
      stopPropagation: this.stopPropagation
    })

    if (this.usePulldown) {
      // if use slot=pulldown
      //vue1.0
      // let container = this.$el.querySelector('div[slot="pulldown"]')
      // fix2.0
      let container = this.$slots.pulldown ? this.$slots.pulldown[0].elm : false;
      let config = Object.assign(pulldownDefaultConfig(), this.pulldownConfig)
      if (container) {
        config.container = container
      }
      this.pulldown = new Pulldown(config)
      this._xscroll.plug(this.pulldown)
      this.pulldown.on('loading', (e) => {
        this.$emit('pulldown:loading', this)
      })
      this.pulldown.on('statuschange', (val) => {
        this.props_pulldownStatus = val.newVal
        this.pullStatus.down= val.newVal
      })
    }

    if (this.usePullup) {
      // if use slot=pullup
      // let container = this.$el.querySelector('div[slot="pullup"]')
      let container = this.$slots.pullup ? this.$slots.pullup[0].elm : false;
      let config = Object.assign(pullupDefaultConfig(), this.pullupConfig)
      if (container) {
        config.container = container
      }
      this.pullup = new Pullup(config)
      this._xscroll.plug(this.pullup)
      this.pullup.on('loading', (e) => {
        this.$emit('pullup:loading', this)
      })
      this.pullup.on('statuschange', (val) => {
        this.props_pullupStatus = val.newVal
        this.pullStatus.up= val.newVal
      })
    }

    if (this.enableHorizontalSwiping) {
      this._xscroll.on('panstart', (e) => {
        if (e.direction === 2 || e.direction === 4) {
          e.preventDefault()
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = false
          }
          this._xscroll.userConfig.lockY = true
        }
      })
      this._xscroll.on('panend', () => {
        if (this.scrollbarY) {
          this._xscroll.userConfig.scrollbarY = true
        }
        this._xscroll.userConfig.lockY = false
      })
    }

    this._xscroll.render()
  },
  watch:{
    height:function(newVal, oldVal){
      this.props_height=newVal
    },
    pulldownStatus:function(newVal, oldVal){
      this.props_pulldownStatus=newVal
    },
    pullupStatus:function(newVal, oldVal){
      this.props_pullupStatus=newVal
    }
  },
  beforeDestroy () {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup)
      this.pullup.pluginDestructor()
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown)
      this.pulldown.pluginDestructor()
    }
    this._xscroll.destroy()
    this._xscroll = null
  },
  data(){
    return {
      elHeight:"",
      props_height:"",
      props_pulldownStatus:"default",
      props_pullupStatus:"default"
    }
  }
}
</script>

<style>
.xs-plugin-pullup-container {
  text-align: center;
}
</style>
