<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item"
      v-for="item of list"
      :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.title{
  margin-t8op .2rem
  line-height .8rem
  background #eee
}
.item-img-wrapper{
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img{
    width 100%
  }
}8
.item-info{
  flex 1
  padding .1rem
  min-width 0
  .item-title{
    line-height .54rem
    font-size .32rem
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
  }
  .item-desc{
    line-height .4rem
    color #ccc
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
  }
}
</style>
