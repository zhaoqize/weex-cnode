<template>
  <div>
    <wx-header @showside="showSide"></wx-header>

    <wx-scroller 
        @onrefresh="onrefresh" 
        @loadmore="loadmore"
        :refreshing="refreshing"
        :showloading="showloading">
        <cell class="row-wrap" v-for="(item, index) in rows" :ref="'item'+index" :key="index" @click="goToArticle(item)">
            <div class="row">
                <text class="text" :ref="'text'+index" lines="1">{{item.title}}</text>
                <image :src="item.author.avatar_url" class="avatar"></image>
            </div>
            <div class="other">
                <text class="other-info tab">{{ item.tab }}</text>
                <text class="count other-info">{{ item.reply_count }}/{{ item.visit_count }} </text>
                <text class="loginname other-info">{{ item.author.loginname }}</text>
            </div>
        </cell>
    </wx-scroller>

    <wx-side-menu :isShow="isShowSideMenu">
        <div class="item">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E4%BA%BA%20%283%29.png">
            </image>
        </div>
        <div class="item" ref="index" @click="toItem('index')">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E9%A6%96%E9%A1%B5.png">
            </image> 
            <text class="item-text">首页</text>
        </div>
        <div class="item" ref="ask" @click="toItem('ask')">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E9%97%AE%E7%AD%94.png">
            </image> 
            <text class="item-text">问答</text>
        </div>
        <div class="item" ref="share" @click="toItem('share')">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E5%88%86%E4%BA%AB.png">
            </image>
            <text class="item-text">分享</text>
        </div>
        <div class="item" ref="good" @click="toItem('good')">
            <image class="img" src="http://ojlxao0wn.bkt.clouddn.com/%E7%89%A9%E5%93%81.png">
            </image>
            <text class="item-text">精华</text>
        </div>
        <div class="item" ref="job" @click="toItem('job')">
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
const modal = weex.requireModule('modal');

export default {
    name: 'index',
    data () {
        return {
            type: '',
            isShowSideMenu: false, // 控制左侧菜单
            isShowCover: false, // 控制遮罩
            rows: [], // 数据列表
            refreshing: false, // 控制下拉刷新,
            showloading: 'hide', // 控制上拉刷新
            pointer: 1 // 下拉几次
        };
    },
    components: {
        wxHeader,
        wxSideMenu,
        wxCover,
        wxScroller
    },
    mounted () {
        this.onrefresh();
    },
    methods: {
        getTopics (repo, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'https://cnodejs.org/api/v1/topics' + repo
            }, callback);
        },
        goToArticle (item) {
            this.$router.push({ path: `article/${item.id}`, query: {id: item.id}});
        },
        toItem (type) {
            switch (type) {
                case 'index':
                    this.getTopics('?page=1&limit=12', (res) => {
                        this.rows = res.data.data;
                        this.type = '';
                        this.pointer = 1;
                    });
                    break;
                case 'ask':
                    this.getTopics('?tab=ask&page=1&limit=12', (res) => {
                        this.rows = res.data.data;
                        this.type = 'ask';
                        this.pointer = 1;
                    });
                    break;
                case 'share':
                    this.getTopics('?tab=share&page=1&limit=12', (res) => {
                        this.rows = res.data.data;
                        this.type = 'share';
                        this.pointer = 1;
                    });
                    break;
                case 'good':
                    this.getTopics('?tab=good&page=1&limit=12', (res) => {
                        this.rows = res.data.data;
                        this.type = 'good';
                        this.pointer = 1;
                    });
                    break;
                case 'job':
                    this.getTopics('?tab=job&page=1&limit=12', (res) => {
                        this.rows = res.data.data;
                        this.type = 'job';
                        this.pointer = 1;
                    });
                    break;
                default:
                    break;
            }
        },
        onrefresh () {
            this.pointer = 1;
            this.refreshing = true;
            this.getTopics(`?tab=${this.type}&page=1&limit=12`, (res) => {
                modal.toast({ message: '刷新成功!', duration: 1 });
                this.rows = res.data.data;
                this.refreshing = false;
            });
        },
        loadmore () {
            console.log('--- onloadmore ---');
            this.pointer = this.pointer + 1;
            const limit = this.pointer * 12;
            this.showloading = 'show';
            this.getTopics(`??tab=${this.type}&page=1&limit=${limit}`, (res) => {
                modal.toast({ message: '获取数据成功!', duration: 1 });
                this.rows = res.data.data;
                this.showloading = 'hide';
            });
        },
        showSide () {
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
.item-selected {
    background-color: #eae7e7;
}

</style>