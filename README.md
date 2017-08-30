## Weex开发中遇到的问题
### refresh中图片不居中
text文本可以居中，但是图片无法居中
问题见:https://segmentfault.com/q/1010000009553950/a-1020000009555244
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

### z-index问题
在weex中不支持z-index，而是根据组件的先后顺序来处理层级。

### web端上，行内样式与class的样式显示的效果不同
行业样式20px显示的就是20px，但是在class中定义20px，最终显示的为9.xxpx。

### base64在安卓显示问题
在安卓设备中显示不出base64的图片。

临时解决方案：使用图床来做。

### web和安卓上换行和...号不一样
weex中使用`lines`控制行数，text中也需要设置`lines`

具体见：http://weex-project.io/cn/references/components/text.html

