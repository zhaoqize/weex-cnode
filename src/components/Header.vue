<template>
  <div class="wrapper">
      <div ref="header" class="header-container">
          <div class="header-btn" @click="showSide">
            <text class="header-text">左上角</text>
          </div>
          <div class="header-title">
            <text class="header-text">中间</text>
          </div>
          <div class="header-btn">
            <text class="header-text">左上角</text>
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
    position: fixed;
    flex-direction: row;
    color:white;
    background-color: gray;
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
}
</style>

