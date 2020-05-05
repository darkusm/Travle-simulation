<template>
    <div class="Icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon"
          v-for="item of page"
          :key="item.id"
          >
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-text">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.Icons >>> .swiper-container{
  height 0
  padding-bottom 50%
}
.Icons{
  margin-top .1rem
  .icon{
    position relative
    overflow hidden
    height 0
    padding-bottom 25%
    width 25%
    float left
    .icon-img{
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content{
        //经典居中方案
        display block
        margin 0 auto
        height 100%
      }
    }
    .icon-text{
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    }
  }
}
</style>
