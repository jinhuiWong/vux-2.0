<template>
  <div>
    <divider>Pull Up to Refresh</divider>
    <scroller lock-x scrollbar-y use-pullup height="200px" @pullup:loading="load1">
      <div class="box2">
        <p v-for="i in n1">placeholder {{i}}</p>
      </div>
    </scroller>

    <divider>Chinese: 上拉刷新</divider>
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" height="200px" @pullup:loading="load2">
      <div class="box2">
        <p v-for="i in n2">占位 {{i}}</p>
      </div>
    </scroller>

    <divider>custom pullup html template</divider>
    <scroller lock-x scrollbar-y use-pullup height="200px" :pullStatus="pullStatus" @pullup:loading="load3">
      <!--content slot-->
      <div class="box2">
        <p v-for="i in n3">placeholder {{i}}</p>
      </div>

      <!--pullup slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="pullStatus.up === 'default'"></span>
        <span class="pullup-arrow" v-show="pullStatus.up === 'down' || pullStatus.up === 'up'" :class="{'rotate': pullStatus.up === 'up'}">↑</span>
        <span v-show="pullStatus.up === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>

  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from '../components'

export default {
  components: {
    Scroller,
    Divider,
    Spinner
  },
  methods: {
    load1 (that) {
      setTimeout(() => {
        this.n1 += 10
        setTimeout(() => {
          // this.$broadcast('pullup:reset', uuid)
          that.$emit('pullup:reset', that.uuid)
        }, 10)
      }, 2000)
    },
    load2 (that) {
      setTimeout(() => {
        if (this.n2 === 30) {
          // this.$broadcast('pullup:done', uuid)
          that.$emit('pullup:done', that.uuid)
        } else {
          this.n2 += 10
          setTimeout(() => {
            // this.$broadcast('pullup:reset', uuid)
            that.$emit('pullup:reset', that.uuid)
          }, 10)
        }
      }, 2000)
    },
    load3 (that) {
      setTimeout(() => {
        this.n3 += 10
        setTimeout(() => {
          // this.$broadcast('pullup:reset', uuid)
          that.$emit('pullup:reset', that.uuid)
        }, 10)
      }, 2000)
    }
  },
  data () {
    return {
      pullStatus:{
        up:'default'
      },
      // pullupStatus: 'default',
      n1: 10,
      n2: 10,
      n3: 10,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  display: inline-block;
  transform: rotate(-180deg);
}
.pullup-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
