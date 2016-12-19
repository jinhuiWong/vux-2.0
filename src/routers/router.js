import VueRouter from 'vue-router'

var config = require('../../config');
// var rootPath=config.build.assetsPublicPath;
var rootPath="/";


/** -------------------------------------------------- 懒加载start --------------------------------------------*/

const Home = resolve => require(['../Home.vue'], resolve)
const Demo = resolve => require(['../demos/Demo.vue'], resolve)
const Cell = resolve => require(['../demos/Cell'], resolve)
const Tab = resolve => require(['../demos/Tab'], resolve)
const Swiper = resolve => require(['../demos/Swiper'], resolve)
const Tabbar = resolve => require(['../demos/Tabbar'], resolve)
const TabbarLink = resolve => require(['../demos/TabbarLink'], resolve)
const Flexbox = resolve => require(['../demos/Flexbox'], resolve)
const Popup = resolve => require(['../demos/Popup'], resolve)
const PopupPicker = resolve => require(['../demos/Popup-picker'], resolve)
const Switch = resolve => require(['../demos/Switch'], resolve)
const Toast = resolve => require(['../demos/Toast'], resolve)
const Scroller = resolve => require(['../demos/Scroller'], resolve)
const ScrollerFull = resolve => require(['../demos/Scroller-full'], resolve)
const ScrollerHeader = resolve => require(['../demos/Scroller-header'], resolve)
const ScrollerSwiper = resolve => require(['../demos/Scroller-swiper'], resolve)
const Pulldown = resolve => require(['../demos/Pulldown'], resolve)
const Pullup = resolve => require(['../demos/Pullup'], resolve)
const PulldownPullup = resolve => require(['../demos/PulldownPullup'], resolve)
const Spinner = resolve => require(['../demos/Spinner'], resolve)
const Masker = resolve => require(['../demos/Masker'], resolve)
const Picker = resolve => require(['../demos/Picker'], resolve)
const Address = resolve => require(['../demos/Address'], resolve)
const InlineCalendar = resolve => require(['../demos/Inline-calendar'], resolve)
const Calendar = resolve => require(['../demos/Calendar'], resolve)
const Checklist = resolve => require(['../demos/Checklist'], resolve)
const Checker = resolve => require(['../demos/Checker'], resolve)
const ColorPicker = resolve => require(['../demos/Color-picker'], resolve)
const Icon = resolve => require(['../demos/Icon'], resolve)
const Datetime = resolve => require(['../demos/Datetime'], resolve)
const Radio = resolve => require(['../demos/Radio'], resolve)
const Range = resolve => require(['../demos/Range'], resolve)
const Rater = resolve => require(['../demos/Rater'], resolve)
const XButton = resolve => require(['../demos/X-button'], resolve)
const Selector = resolve => require(['../demos/Selector'], resolve)
const Loading = resolve => require(['../demos/Loading'], resolve)


/** -------------------------------------------------- 懒加载end --------------------------------------------*/

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    //路由映射map
    routes: [

        { path: rootPath, component: Home, meta: { scrollToTop: true }, name: 'home' },
        { path: rootPath + 'demo', component: Demo , name: 'demo'},
        { path: rootPath + 'component/cell', component: Cell , name: 'cell'},
        { path: rootPath + 'component/tab', component: Tab , name: 'tab'},
        { path: rootPath + 'component/swiper', component: Swiper , name: 'swiper'},
        { path: rootPath + 'component/tabbar', component: Tabbar , name: 'tabbar'},
        { path: rootPath + 'component/tabbar-link', component: TabbarLink , name: 'tabbarLink'},
        { path: rootPath + 'component/flexbox', component: Flexbox , name: 'flexbox'},
        { path: rootPath + 'component/popup', component: Popup , name: 'popup'},
        { path: rootPath + 'component/popup-picker', component: PopupPicker , name: 'popupPicker'},
        { path: rootPath + 'component/switch', component: Switch , name: 'switch'},
        { path: rootPath + 'component/toast', component: Toast , name: 'toast'},
        { path: rootPath + 'component/scroller', component: Scroller , name: 'scroller'},
        { path: rootPath + 'component/scroller/full', component: ScrollerFull , name: 'scrollerFull'},
        { path: rootPath + 'component/scroller/header', component: ScrollerHeader , name: 'scrollerheader'},
        { path: rootPath + 'component/scroller-swiper', component: ScrollerSwiper , name: 'scrollerSwiper'},
        { path: rootPath + 'component/pulldown', component: Pulldown , name: 'pulldown'},
        { path: rootPath + 'component/pullup', component: Pullup , name: 'pullup'},
        { path: rootPath + 'component/pulldown-pullup', component: PulldownPullup , name: 'pulldown-pullup'},
        { path: rootPath + 'component/spinner', component: Spinner , name: 'spinner'},
        { path: rootPath + 'component/masker', component: Masker , name: 'masker'},
        { path: rootPath + 'component/picker', component: Picker , name: 'picker'},
        { path: rootPath + 'component/address', component: Address , name: 'address'},
        { path: rootPath + 'component/inline-calendar', component: InlineCalendar , name: 'inline-calendar'},
        { path: rootPath + 'component/calendar', component: Calendar , name: 'calendar'},
        { path: rootPath + 'component/checklist', component: Checklist , name: 'checklist'},
        { path: rootPath + 'component/checker', component: Checker , name: 'checker'},
        { path: rootPath + 'component/color-picker', component: ColorPicker , name: 'colorPicker'},
        { path: rootPath + 'component/icon', component: Icon , name: 'icon'},
        { path: rootPath + 'component/datetime', component: Datetime , name: 'datetime'},
        { path: rootPath + 'component/radio', component: Radio , name: 'radio'},
        { path: rootPath + 'component/range', component: Range , name: 'range'},
        { path: rootPath + 'component/rater', component: Rater , name: 'rater'},
        { path: rootPath + 'component/x-button', component: XButton , name: 'xbutton'},
        { path: rootPath + 'component/selector', component: Selector , name: 'selector'},
        { path: rootPath + 'component/loading', component: Loading , name: 'loading'},


        //找不到页面就返回404页面
        {
            path: '*',
            component: { template: '<p style="height:300px;text-align:center">404</p>' }
        }
    ]
});


// // 跳转前的逻辑
// router.beforeEach((to, from, next) => {

//     console.log('before---------------');

//     console.log(to.auth);
//     next()
// })

// window.routeList = [];

// // 跳转后的逻辑
// router.afterEach(function(transition) {
//     console.log('-----------------after');
//     for (var i = 0; i < routeList.length; i++) {
//         console.log(routeList[i].name);
//     };
// });


export default router
