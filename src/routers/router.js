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
const Badge = resolve => require(['../demos/Badge'], resolve)
const Input = resolve => require(['../demos/Input'], resolve)
const Textarea = resolve => require(['../demos/Textarea'], resolve)
const XNumber = resolve => require(['../demos/Number'], resolve)
const Dialog = resolve => require(['../demos/Dialog'], resolve)
const Alert = resolve => require(['../demos/Alert'], resolve)
const Confirm = resolve => require(['../demos/Confirm'], resolve)
const Blur = resolve => require(['../demos/Blur'], resolve)
const Popover = resolve => require(['../components/popover/DemoIndex'], resolve)
const Circle = resolve => require(['../demos/Circle'], resolve)
const Countup = resolve => require(['../demos/Countup'], resolve)
const Countdown = resolve => require(['../demos/Countdown'], resolve)
const Actionsheet = resolve => require(['../demos/Actionsheet'], resolve)
const ButtonTab = resolve => require(['../demos/Button-tab'], resolve)
const Clocker = resolve => require(['../demos/Clocker'], resolve)
const Divider = resolve => require(['../demos/Divider'], resolve)
const Panel = resolve => require(['../demos/Panel'], resolve)
const Card = resolve => require(['../demos/Card'], resolve)
const Previewer = resolve => require(['../demos/Previewer'], resolve)
const Progress = resolve => require(['../demos/Progress'], resolve)
const Reddot = resolve => require(['../demos/Reddot'], resolve)
const Sticky = resolve => require(['../demos/Sticky'], resolve)
const Search = resolve => require(['../demos/Search'], resolve)
const SearchStatic = resolve => require(['../demos/Search-static'], resolve)
const Timeline = resolve => require(['../demos/Timeline'], resolve)
const Step = resolve => require(['../demos/Step'], resolve)
const XHeader = resolve => require(['../demos/X-header'], resolve)
const Comment = resolve => require(['../demos/Comment'], resolve)
const Emotion = resolve => require(['../demos/Wechat-emotion'], resolve)
const Qrcode = resolve => require(['../demos/Qrcode'], resolve)
const Onepx = resolve => require(['../demos/1px'], resolve)
const Center = resolve => require(['../demos/Center'], resolve)
const Close = resolve => require(['../demos/Close'], resolve)
const DeviceDemo = resolve => require(['../demos/Device'], resolve)
const Wechat = resolve => require(['../Wechat'], resolve)
const Yi = resolve => require(['../yi'], resolve)

// const Shake = resolve => require(['../demos/Shake'], resolve)
// const XImg = resolve => require(['../demos/XImg'], resolve)


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
        { path: rootPath + 'component/badge', component: Badge , name: 'badge'},
        { path: rootPath + 'component/input', component: Input , name: 'input'},
        { path: rootPath + 'component/textarea', component: Textarea , name: 'textarea'},
        { path: rootPath + 'component/number', component: XNumber , name: 'number'},
        { path: rootPath + 'component/dialog', component: Dialog , name: 'dialog'},
        { path: rootPath + 'component/alert', component: Alert , name: 'alert'},
        { path: rootPath + 'component/confirm', component: Confirm , name: 'confirm'},
        { path: rootPath + 'component/popover', component: Popover , name: 'popover'},
        { path: rootPath + 'component/blur', component: Blur , name: 'blur'},
        { path: rootPath + 'component/circle', component: Circle , name: 'circle'},
        { path: rootPath + 'component/countup', component: Countup , name: 'countup'},
        { path: rootPath + 'component/countdown', component: Countdown , name: 'countdown'},
        { path: rootPath + 'component/actionsheet', component: Actionsheet , name: 'actionsheet'},
        { path: rootPath + 'component/button-tab', component: ButtonTab , name: 'buttonTab'},
        { path: rootPath + 'component/clocker', component: Clocker , name: 'clocker'},
        { path: rootPath + 'component/divider', component: Divider , name: 'divider'},
        { path: rootPath + 'component/panel', component: Panel , name: 'panel'},
        { path: rootPath + 'component/card', component: Card , name: 'card'},
        { path: rootPath + 'component/previewer', component: Previewer , name: 'previewer'},
        { path: rootPath + 'component/progress', component: Progress , name: 'progress'},
        { path: rootPath + 'component/reddot', component: Reddot , name: 'reddot'},
        { path: rootPath + 'component/sticky', component: Sticky , name: 'sticky'},
        { path: rootPath + 'component/search', component: Search , name: 'search'},
        { path: rootPath + 'component/search-static', component: SearchStatic , name: 'searchStatic'},
        { path: rootPath + 'component/timeline', component: Timeline , name: 'timeline'},
        { path: rootPath + 'component/step', component: Step , name: 'step'},
        { path: rootPath + 'component/x-header', component: XHeader , name: 'header'},
        { path: rootPath + 'component/comment', component: Comment , name: 'comment'},
        { path: rootPath + 'component/emotion', component: Emotion , name: 'emotion'},
        { path: rootPath + 'component/qrcode', component: Qrcode , name: 'qrcode'},
        { path: rootPath + 'component/1px', component: Onepx , name: '1px'},
        { path: rootPath + 'component/center', component: Center , name: 'center'},
        { path: rootPath + 'component/close', component: Close , name: 'close'},
        { path: rootPath + 'plugin/device', component: DeviceDemo , name: 'device'},
        { path: rootPath + 'demo/wechat', component: Wechat , name: 'wechat'},
        { path: rootPath + 'demo/yi', component: Yi , name: 'yi'},

        // { path: rootPath + 'component/shake', component: Shake , name: 'shake'},
        // { path: rootPath + 'component/x-img', component: XImg , name: 'XImg'},


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
