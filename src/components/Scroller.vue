<template>
  <div class="wrapper">
    <scroller class="scroller">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
          <image style="width:45px;height:45px;" src="http://ojlxao0wn.bkt.clouddn.com/loading.gif"></image>
      </refresh>
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index" :key="index">
        <text class="text" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal');

  export default {
      data () {
          return {
              refreshing: false,
              rows: []
          };
      },
      created () {
          for (let i = 0; i < 30; i++) {
              this.rows.push('row ' + i);
          }
      },
      methods: {
          onrefresh (event) {
              console.log('is refreshing');
              modal.toast({ message: 'refresh', duration: 1 });
              this.refreshing = true;
              setTimeout(() => {
                  this.refreshing = false;
              }, 2000);
          }
      }
  };
</script>
<style scoped>
  .scroller {
    margin-top: 100px;
    width: 750px;
  }
  .row {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
  }
  .text {
    font-size: 45px;
    color: #666666;
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