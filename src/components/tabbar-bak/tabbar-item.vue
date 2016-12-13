<template>
    <a href="javascript:;" class="weui_tabbar_item" :class="{'weui_bar_item_on': selected }"  @click="onItemClick">
        <div class="weui_tabbar_icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]">
            <slot name="icon" v-if="!selected"></slot>
            <slot name="active_icon" v-if="selected"></slot>
            <sup><badge v-if="badge" :text="badge"></badge></sup>
        </div>
        <p class="weui_tabbar_label" :style="style">
            <slot name="label"></slot>
        </p>
    </a>
</template>

<script>
import Badge from '../badge'

export default {
    components: {
        Badge
    },
    computed:{
        style() {
            return {
                color: this.selected ? this.$parent.activeColor :  this.$parent.defaultColor
            }
        }
    },
    props: {
        showDot: {
            type: Boolean,
            default: false
        },
        badge: [String,Number],
        link: [String, Object],
        iconClass: String
    },
    beforeMount(){
        this.$on('on-item-click',function(index,selected) {
            this.$router.push(this.link);
            this.$parent.$emit('onTabbarItemClick',index,selected);
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
            index: -1,
            selected: false
        }
    }
}
</script>
