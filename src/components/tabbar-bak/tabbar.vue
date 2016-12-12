<template>
  <div class="weui_tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {

    mounted(){
        this.updateIndex();
        this.$on('onTabbarItemClick',function(index,selected){
            console.log('onTabItemClick_index :'+index);

            this.currentIndex = index;
            this.$emit('onIndexChange', this.currentIndex);
        });
    },
    props: {
        iconClass: String,
        activeColor:{
            type:String,
            default:'#f24549',
        },
        defaultColor:{
            type:String,
            default:'#9b9b9b',
        },
        index: {
            type: Number,
            default: -1
        }
    },
    methods: {
        updateIndex () {
            if (!this.$children) return
            this.number = this.$children.length
            let children = this.$children
            for (let i = 0; i < children.length; i++) {
                children[i].index = i
                if (children[i].index === this.index) {
                    this.currentIndex = i
                }
            }
        }
    },
    watch: {
        index:function(newIndex, oldIndex){

            console.info('currentIndex_watch');
            console.log('newIndex:'+newIndex);
            console.log('oldIndex:'+oldIndex);
            this.currentIndex=newIndex;
        },
        currentIndex (newIndex, oldIndex) {

            console.log('newIndex:'+newIndex);
            console.log('oldIndex:'+oldIndex);

            oldIndex > -1 && this.$children[oldIndex] && (this.$children[oldIndex].selected = false)
            newIndex > -1 && (this.$children[newIndex].selected = true)
        }
    },
    data () {
        return {
            number: this.$children.length,
            currentIndex: -1
        }
    }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tab/weui_tab_tabbar';
.weui_tabbar_icon {
  position: relative;
}
.weui_tabbar_icon > sup {
  position: absolute;
  top: -8px;
  left: 100%;
  transform: translateX(-50%);
  z-index: 101;
}
</style>
