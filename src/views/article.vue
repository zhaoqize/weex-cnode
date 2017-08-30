<template>
    <div class="wrapper">
        <div ref="header" class="header-container">
            <div class="header-wrapper">
                <text class="header-text back" @click="back">返回</text>
            </div>
            <div class="header-wrapper">
              <text class="header-text"></text>
            </div>
            <div class="header-wrapper">
              <text class="header-text share">分享</text>
            </div>
        </div>
        <list class="scroller">
          <cell class="info">
           <text class="title">{{ article.title }}</text>
            <text class="body" ref="body">{{ article.content }}</text>
            <text class="other">{{ article.create_at }}</text>
          </cell>
        </list>
    </div>
</template>
<script>

const stream = weex.requireModule('stream');

export default {
    name: 'article',
    data () {
        return {
            articleId: this.$route.query.id,
            article: {}
        };
    },
    methods: {
        getArticle (repo, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'https://cnodejs.org/api/v1/topic/' + repo
            }, callback);
        },
        back () {
            this.$router.back();
        }
    },
    mounted () {
        console.log(this.article.id);
        this.getArticle(this.articleId, (res) => {
            this.article = res.data.data;
        });
    }
};
</script>
<style scoped>
.info {
  padding-bottom: 20px;
  padding-top:20px;
  padding-left: 20px;
  padding-right: 20px;
}
.header-container {
  flex-direction: row;
  background-color: black;
  height: 100px;
  align-items: center;
}
.header-text {
   color: white;
}
.header-wrapper {
     flex: 1;
}
.back {
  padding-left: 20px;
  font-size: 32px;
}
.title {
  font-size: 35px;
  font-weight: 700;
}
.body {
  font-size: 32px;
}
.share {
  text-align: right;
  margin-right: 20px;
  font-size: 32px;
}
</style>


