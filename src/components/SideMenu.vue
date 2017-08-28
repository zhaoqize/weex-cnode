<template>
  <div class="wrapper">
        <div ref="slideMenu" class="slide-list-container">
            <slot></slot>
        </div>
  </div>
</template>
<script>

const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal')

export default {
    props: {
        isShow: {
            type: Boolean,
            required: true
        }
    },
    created () {
        // ne
    },
    watch: {
        isShow () {
            if (this.isShow) {
                this.slideShow();
            } else {
                this.slideHide();
            }
        }
    },
    methods: {
        slideShow () {
            console.log('slideShow...');
            let slideEl = this.$refs.slideMenu;
            animation.transition(slideEl, {
                styles: {
                    transform: 'translateX(100%)'
                },
                duration: 200
            }, () => {
                  // ne
            });
        },
        slideHide () {
            console.log('slideHide...');
            let slideEl = this.$refs.slideMenu;
            animation.transition(slideEl, {
                styles: {
                    transform: 'translateX(0)'
                },
                duration: 200
            }, () => {
                  // ne
            });
        }
    }
};
</script>

<style scoped>
/* .wrapper {
    position: fixed;
    background-color: rgba(150, 153, 162, 0.5);
    width: 750px;
    top: 0;
    bottom: 0;
    left: -750px;
} */
.slide-list-container {
    position: fixed;
    background-color: white;
    width: 300px; /*在weex中 750 = 宽度100% 1250 = 高度100% https://weex.apache.org/cn/references/weex-variable.html#weex-config*/
    left: -300px;
    top: 0;
    bottom: 0;
    /*z-index: 10000;*/ /*https://weex.apache.org/cn/references/common-style.html*/
  }
</style>

