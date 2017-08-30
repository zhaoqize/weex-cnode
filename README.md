## 困惑点
### 尺寸大小

### 标签嵌套

## Weex开发中遇到的问题
### refresh中图片不居中
text文本可以居中，但是图片无法居中

具体见:https://segmentfault.com/q/1010000009553950/a-1020000009555244

解决方法：
```css
    width: 750px;
    height: auto;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
```

### 安卓中gif图片不动
建议使用`<loading-indicator>`去处理

### z-index问题
在weex中不支持z-index，而是根据组件的先后顺序来处理层级。

### web端上，行内样式与class的样式显示的效果不同
行业样式20px显示的就是20px，但是在class中定义20px，最终显示的为9.xxpx。

### base64在安卓显示问题
在安卓设备中显示不出base64的图片。

临时解决方案：使用图床来做。

### web和安卓上换行和...号不一样
weex中使用`lines`控制行数，text中也需要设置`lines`

实现方式:
```
<template>
  <div class="wrapper">
    <div class="panel">
      <text class="text" lines="3">Weex 是一套简单易用的跨平台开发方案，能以 Web 的开发体验构建高性能、可扩展的原生应用。Vue 是一个轻量并且功能强大的渐进式前端框架。</text>
    </div>
  </div>
</template>
<style scoped>
  .text {
    lines: 3;
    color: #666666;
    font-size: 32px;
  }
</style>
```
具体见：http://weex-project.io/cn/references/components/text.html

### Scroller在安卓中进行无法滚动
建议使用`list`配合`cell`做滚动列表

### loading的使用有问题(与list的loadmore方法不能共存)
loading在web上看不到效果，但是在安卓上没问题。

实现方式:
```js
<list class="list">
      <refresh  class = "refresh-view" display="{{refresh_display}}" onrefresh="onrefresh">
        <text if="{{(refresh_display==='hide')}}"> ↓ pull to refresh </text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell onappear="onappear" ondisappear="ondisappear" class="row" repeat="{{rows}}" index="{{$index}}">
        <div class="item">
          <text class="item-title">row {{id}}</text>
        </div>
      </cell>
      <loading class="loading-view" display="{{loading_display}}" onloading="onloading">
        <text if="{{(loading_display==='hide')}}">↑ Loadmore </text>
        <loading-indicator class="indicator"></loading-indicator>
      </loading>
    </list>
```
参考源码:https://github.com/apache/incubator-weex/blob/master/examples/component/list/list-basic.we

### stream请求后面总是会带上`undefined`

### fixed元素路由跳转不发生变化

## 截图
### web

### 安卓
