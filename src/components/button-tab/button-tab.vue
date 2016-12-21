<template>
  <div class="vux-button-group">
    <slot></slot>
  </div>
</template>

<script>

export default {
  mounted() {
    this.updateIndex()
    this.$on('onTabItemClick',function(index){
        this.props_index = index;
        this.$emit('on-index-change', this.props_index);
    });
  },
  methods: {
    updateIndex() {
      if (!this.$children) return
      this.number = this.$children.length
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].index = i
        if (children[i]=== this.index) {
            this.props_index = i
        }
      }
    }
  },
  props: {
    index: {
      type: Number,
      default: -1
    },
    value: {
      type: Number,
      default: 0
    },
    height: Number
  },
  watch: {
    props_index(newIndex, oldIndex) {
      oldIndex > -1 && this.$children[oldIndex] && (this.$children[oldIndex].props_selected = false)
      newIndex > -1 && (this.$children[newIndex].props_selected = true)
      this.$emit('input',newIndex);
    },
    value(val){
      this.props_index=val
    },
    index : function(newIndex, oldIndex){
        this.props_index=newIndex;
    },
  },
  data() {
    return {
      number: this.$children.length,
      props_index:0
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-button-group {
  & {
    display: box;
    display: flex;
  }

  & > a  {
    display: block;
    flex: 1;
    width: 100%;
    height: 30px;
    padding: 0;
    font-size: 14px;
    line-height: 31px;
    text-align: center;
    border: 1px solid #d2d2d2;
    border-width: 1px 1px 1px 0;
    color: #999;
    white-space: nowrap;
    background: #fdfdfd
  }

  & > a.vux-button-group-current,
  & > a.hover,
  & > a:active {
    border-color: @color-wechat-green;
    color: #FFF;
    background: @color-wechat-green
  }

  & > a:first-child {
    border-width: 1px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    background-clip: padding-box
  }

  & > a:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-clip: padding-box;
  }

  & > a.vux-button-group-current:disabled,
  & > a:disabled {
    border-color: #CDCDCD;
    background: #e5e5e5;
    box-shadow: 0 1px 0 rgba(255,255,255,.6);
    text-shadow: 0 1px 0 rgba(255,255,255,.8);
    color: #aaa
  }
  & .no-border-right {
    border-right-width: 0!important;
  }
}
</style>
