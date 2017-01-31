# vux-2.0
根据vux-https://github.com/airyland/vux 修改升级的2.0

## Docs

+ [中文文档](https://jinhuiwong.gitbooks.io/vuxx/content/)

## Demo

<p align="center">
  <a href="http://jhwong.cn/vux2">http://jhwong.cn/vux2</a><br/>
  (You can view the demos' codes in <a href="https://github.com/jinhuiWong/vux-2.0/tree/master/src/demos"><strong>/src/demos</strong></a>)<br/>
  <img src="http://og1rlwcj8.bkt.clouddn.com/1485876811.png" width="300">
</p>

## Use
``` bash
# install 
npm install vuxx

#vue-cli项目引用
#在webpack.base.conf.js添加loader

{
  test: /vuxx.src.*?js$/,
  loader: 'babel'
}

#使用组件
<template>
  <div>
    <group>
      <cell title="示例"></cell>
    </group>
  </div>
</template>

<script>
import Cell from 'vuxx/src/components/Cell'
import Group from 'vuxx/src/components/Group'
export default {
  components: {
    Group,
    Cell
  }
}
</script>

```

## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
交流qq群：537322257
![alt text]( http://og1rlwcj8.bkt.clouddn.com/7f4c4fe1gw1evv8bc0r3tj20go0ghjs3.jpg "Title")
