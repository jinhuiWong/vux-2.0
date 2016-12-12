<template>
    <div  class="home" :class="styles.main">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
      </ul>
    </div>
</template>

<script>
//import Lib from 'assets/Lib.js'

export default {
    data() {
        return {
            styles : {
                main : "home_main"
            },
            hhhh : 'Home'
        }
    },
    components: {
    },
    created : function() {
        console.log('实例已创建.');
    },
    mounted : function(){
        console.log('模板一编译/挂载.');
    },
    methods: {
    }
}


</script>

<style lang="scss" scoped>

    /*一定要加lang不然无法编译*/
    /*测试一下对sass的编译*/
    $qwe:#098;
    $f5:50px;
    $mainColor : #2c3e50;
    .home{
        border: 1px solid #b9b9b9;
    }
    .home_main{
        color : $mainColor;
        button{
            width : 100px;
            height : 30px; 
        }
        li{
            margin-top : 20px
        }
    }
    body{

        background-color: $qwe;
        p{
            font-size : $f5;   
        }
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);/*测试自动添加前缀*/
        }
        h1:hover{
            height:100px;
        }
        h2{
            background-color: #999;
        }
    }

</style>





