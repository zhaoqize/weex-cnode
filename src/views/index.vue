<template>
  <div>
    <wx-header @showside="showSide"></wx-header>
    <wx-side-menu :menus="menu" :isShow="isShowSideMenu"></wx-side-menu>
    <!--weex不支持 z-index 而是通过加载顺序来展示结构-->
    <wx-cover :isShowCover="isShowCover"  @closeside="hideSide"></wx-cover>
  </div>
</template>
<script>
import wxHeader from '../components/Header.vue';
import wxSideMenu from '../components/SideMenu.vue';
import wxCover from '../components/Cover.vue';

const modal = weex.requireModule('modal');

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
        wxCover
    },
    methods: {
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
</style>