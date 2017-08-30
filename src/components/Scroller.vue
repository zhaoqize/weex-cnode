<template>
  <div class="wrapper">
    <scroller class="scroller">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
          <image style="width:45px;height:45px;" src="http://ojlxao0wn.bkt.clouddn.com/loading.gif"></image>
      </refresh>
      <slot></slot>
    </scroller>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal');

  export default {
      data () {
          return {
              refreshing: false
          };
      },
      methods: {
          onrefresh (event) {
              // console.log('is refreshing');
              // modal.toast({ message: 'refresh', duration: 1 });
              // this.refreshing = true;
              // setTimeout(() => {
              //     this.refreshing = false;
              // }, 2000);
              this.$emit('onrefresh');
          }
      }
  };
</script>
<style scoped>
  .scroller {
    margin-top: 100px;
    width: 750px;
  }

  .refresh {
    width: 750px;
    height: auto;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
</style>