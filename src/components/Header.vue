<template>
  <div class="wrapper">
      <div ref="header" class="header-container">
          <div class="header-btn" @click="showSide">
              <image class="header-info" src="http://ojlxao0wn.bkt.clouddn.com/%E6%9B%B4%E5%A4%9A%20%281%29.png">
              </image>
          </div>
          <div class="header-title">
            <text class="header-text"></text>
          </div>
          <div class="header-btn">
            <text class="header-text">...</text>
          </div>
      </div>
  </div>
</template>
<script>

const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');

export default {
    methods: {
        showSide () {
            this.$emit('showside');
        }
    }
};
</script>

<style scoped>
.header-container {
    /* position: fixed; */
    flex-direction: row;
    color:white;
    background-color: black;
    height: 100px;
    width: 750px;
    top: 0;
}
.header-title {
  flex: 1;
}
.header-btn {
  flex: 1;
}
.header-text {
  text-align: center;
  line-height: 100px;
  color: white;
  font-size: 45px;
}
.header-info {
  width:75px;
  height:75px;
  margin-top:10px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>

