<template>
  <div>
    <wx-header @showside="showSide"></wx-header>

    <wx-scroller></wx-scroller>

    <wx-side-menu :menus="menu" :isShow="isShowSideMenu">
        <div class="item" @click="toItem(0)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E4%BA%BA%20%283%29.png">
            </image>
        </div>
        <div class="item" @click="toItem(1)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E9%A6%96%E9%A1%B5.png">
            </image> 
            <text class="item-text">首页</text>
        </div>
        <div class="item" @click="toItem(2)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E9%97%AE%E7%AD%94.png">
            </image> 
            <text class="item-text">问答</text>
        </div>
        <div class="item" @click="toItem(3)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E5%88%86%E4%BA%AB.png">
            </image>
            <text class="item-text">分享</text>
        </div>
        <div class="item" @click="toItem(4)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E5%B7%A5%E4%BD%9C.png">
            </image>
            <text class="item-text">工作</text>
        </div>
        <div class="item" @click="toItem(5)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E7%89%A9%E5%93%81.png">
            </image>
            <text class="item-text">好物</text>
        </div>
    </wx-side-menu>
    <!--weex不支持 z-index 而是通过加载顺序来展示结构-->
    <wx-cover :isShowCover="isShowCover"  @closeside="hideSide"></wx-cover>
  </div>
</template>
<script>
import wxHeader from '../components/Header.vue';
import wxSideMenu from '../components/SideMenu.vue';
import wxCover from '../components/Cover.vue';
import wxScroller from '../components/Scroller.vue';

export default {
    data () {
        return {
            isShowSideMenu: false,
            isShowCover: false,
            menu: [{
                id: 1,
                name: '精华01'
              }, {
                  id: 2,
                  name: '精华02'
              }, {
                  id: 3,
                  name: '精华03'
              }]
        };
    },
    components: {
        wxHeader,
        wxSideMenu,
        wxCover,
        wxScroller
    },
    methods: {
        toItem(type) {
            switch (type) {
                case 0:
                    
                    break;
                case 1:
                    
                    break;
                default:
                    break;
            }
        },
        showSide () {
            console.log('showSide...');
            this.isShowSideMenu = true;
            this.isShowCover = true;
        },
        hideSide () {
            this.isShowSideMenu = false;
            this.isShowCover = false;
        }
    }
};
</script>
<style scoped>
.item {
    flex-direction: row;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-left-style: solid;
    border-bottom-width: 1px;
    border-bottom-color:#ddd;
}
.img {
    width: 45px;
    height: 45px;
    margin-right: 20px;
}
.item-text {
    font-size: 45px;
}
</style>