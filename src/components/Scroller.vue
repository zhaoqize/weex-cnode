<template>
  <div class="wrapper">
    <list class="scroller">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
          <!-- <image style="width:45px;height:45px;" src="http://ojlxao0wn.bkt.clouddn.com/loading.gif"></image> -->
          <text> ↓ pull to refresh </text>
          <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <slot></slot>
      <loading class="refresh" @loading="loadmore" :display="showloading" >
        <text>↑ Loadmore </text>
        <loading-indicator class="indicator"></loading-indicator>
      </loading>
    </list>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal');

  export default {
      props: {
          refreshing: {
              type: Boolean,
              required: true
          },
          showloading: {
              type: String,
              required: true
          }
      },
      methods: {
          onrefresh (event) {
              this.$emit('onrefresh');
          },
          loadmore () {
              this.$emit('loadmore');
          }
      }
  };
</script>
<style scoped>
  .scroller {
    /* margin-top: 100px; */
    width: 750px;
  }

  .refresh {
    width: 750px;
    height: 100px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .loading {
    width: 750px;
    height: 100px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  /* .indicator {
    background-color: gray;
    color: white;
    padding-left: 20px;
    padding-right: 20px; 
    padding-top: 20px;
    padding-bottom: 20px; 
  } */
  .indicator {
    color: red;
    font-size: 42px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>