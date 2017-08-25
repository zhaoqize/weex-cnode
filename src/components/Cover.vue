<template>
  <div class="wrapper">
      <div class="cover" @click="hideSideAndCover" ref="rightCover">
      </div>
  </div>
</template>
<script>

const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');

export default {
    props: {
        isShowCover: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    watch: {
        isShowCover () {
            if (this.isShowCover) {
                this.showCover();
            } else {
                this.hideCover();
            }
        }
    },
    methods: {
        showCover () {
            let coverEl = this.$refs.rightCover;
            animation.transition(coverEl, {
                styles: {
                    transform: 'translateX(-550px)'
                },
                duration: 200
            }, () => {
                  // ne
            });
        },
        hideCover () {
            console.log('closeCover.....');
            let coverEl = this.$refs.rightCover;
            animation.transition(coverEl, {
                styles: {
                    transform: 'translateX(100px)'
                },
                duration: 200
            }, () => {
                  // ne
            });
        },
        hideSideAndCover () {
            this.$emit('closeside');
        }
    }
};
</script>

<style scoped>
.cover {
  position: fixed;
  background-color: rgba(0, 64, 255, 0.5);
  top: 0;
  bottom: 0;
  width: 550px;
  right: -550px;
}
</style>

