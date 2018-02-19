## weex-cnode
weex-cnode 是一个使用 weex 创建的手机应用。

## 运行
编译代码
```bash
npm run build
```

启动serve
```bash
npm run serve
```
浏览器访问`http://localhost/web/#/index`

安卓访问：需要AS和安卓模拟器(真机)

## 演示
### web
![](http://ojlxao0wn.bkt.clouddn.com/demo2.gif)

### 安卓
![](http://ojlxao0wn.bkt.clouddn.com/demo1.gif)

## 文档
目前在 weex 的开发中，会遇到比较多的问题，具体有一下几点
- 行内样式的px与class类中的px在weex中的表现不一样，建议使用class来处理样式
- 标签一定要使用weex自带的组件，因为常用的html属性不支持跨平台
- refresh中图片不居中
- text文本可以居中，但是图片无法居中
> 具体见:https://segmentfault.com/q/1010000009553950/a-1020000009555244
- 安卓中gif图片不动
> 建议使用`<loading-indicator>`去处理
- z-index问题
> 在weex中不支持z-index，而是根据组件的先后顺序来处理层级。
- web端上，行内样式与class的样式显示的效果不同
> 行业样式20px显示的就是20px，但是在class中定义20px，最终显示的为9.xxpx。
- 在安卓设备中显示不出base64的图片。
> 临时解决方案：使用图床来做。
- web和安卓上换行和...号不一样
- weex中使用`lines`控制行数，text中也需要设置`lines`
> 具体见：http://weex-project.io/cn/references/components/text.html
- Scroller在安卓中进行无法滚动
> 建议使用`list`配合`cell`做滚动列表
- loading的使用有问题(与list的loadmore方法不能共存)
> loading在web上看不到效果，但是在安卓上没问题。
> 参考源码:https://github.com/apache/incubator-weex/blob/master/examples/component/list/list-basic.we
- stream请求后面总是会带上`undefined`
- fixed元素路由跳转不发生变化

## License
MIT
