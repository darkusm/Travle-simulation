<template>
<div class="wrapper">
  <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'mySwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
      },
      {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
  background #fff
}
.wrapper{
  overflow hidden
  width 100%
  height 0
  padding-bottom 32%
  background #eee
  .swiper-img{
    width:100%
  }
}
</style>
