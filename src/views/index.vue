<template>
  <div>
    <wx-header @showside="showSide"></wx-header>

    <wx-scroller @onrefresh="onRefresh">
             <div class="row-wrap" v-for="(item, index) in rows" :ref="'item'+index" :key="index">
                <div class="row">
                    <text class="text" :ref="'text'+index" lines="1">{{item.title}}</text>
                    <image :src="item.author.avatar_url" class="avatar"></image>
                </div>
                <div class="other">
                    <text class="other-info tab">{{ item.tab }}</text>
                    <text class="count other-info">{{ item.reply_count }}/{{ item.visit_count }} </text>
                    <text class="loginname other-info">{{ item.author.loginname }}</text>
                </div>
            </div>
    </wx-scroller>

    <wx-side-menu :isShow="isShowSideMenu">
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
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E7%89%A9%E5%93%81.png">
            </image>
            <text class="item-text">精华</text>
        </div>
        <div class="item" @click="toItem(5)">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E5%B7%A5%E4%BD%9C.png">
            </image>
            <text class="item-text">工作</text>
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

const stream = weex.requireModule('stream');

export default {
    data () {
        return {
            isShowSideMenu: false,
            isShowCover: false,
            rows: []
        };
    },
    components: {
        wxHeader,
        wxSideMenu,
        wxCover,
        wxScroller
    },
    mounted () {
        this.getTopics('?page=1&limit=20', (res) => {
            this.rows = res.data.data;
        });
    },
    methods: {
        getTopics (repo, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'https://cnodejs.org/api/v1/topics' + repo
            }, callback);
        },
        toItem (type) {
            switch (type) {
                case 0:
                    
                    break;
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                default:
                    break;
            }
        },
        onRefresh () {

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
    font-size: 33px;
}
.row-wrap {
    height: 110px;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    flex-direction: column;
    justify-content: center;
}
.row {
    flex-direction: row;
}
.other {
    flex-direction: row;
    justify-content: space-between;
    width: 690px;
}
.other-info {
    font-size: 22px;
    color: #c7c1c1;
}
.tab {
    color:#a59d9d;
}
.text {
    font-size: 33px;
    color: black;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-right:30px;
    display: block;
    width: 600px;
    lines: 1;
}
.avatar {
    width: 60px;
    height: 60px;;
}

</style>