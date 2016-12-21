<template>
  <span>{{props_time}}<input style="display:none" v-model="props_time"></span>
</template>

<script>
export default {
  props: {
    value: Number,
    time: {
      type: Number,
      default: 60
    },
    start: {
      type: Boolean,
      default: true
    }
  },
  created(){
    this.props_time=this.time
    if(this.value) this.props_time=this.value
  },
  methods: {
    tick () {
      let _this = this
      this.interval = setInterval(function () {
        if (_this.props_time > 0) {
          _this.props_time--
        } else {
          _this.stop()
          _this.index++
          _this.$emit('on-finish', _this.index)
        }
      }, 1000)
    },
    stop () {
      clearInterval(this.interval)
    }
  },
  watch: {
    value(val){
      this.props_time=val
    },
    props_time(val){
      this.$emit('input',val)
    },
    time (val) {
      this.props_time=val
    },
    start (newVal, oldVal) {
      if (newVal === true && oldVal === false && this.props_time > 0) {
        this.tick()
      }
      if (newVal === false && oldVal === true) {
        this.stop()
      }
    }
  },
  mounted () {
    if (this.start) {
      this.tick()
    }
  },
  data () {
    return {
      interval: null,
      index: 0,
      props_time :60
    }
  }
}
</script>
