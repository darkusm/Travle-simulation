<template>
    <div class="Icons">
      <swiper>
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
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '007',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '008',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      },
      {
        id: '006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '热门景点'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
