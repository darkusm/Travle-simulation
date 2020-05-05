<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item"
      v-for="item of list"
      :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.title{
  margin-top .2rem
  line-height .8rem
  background #eee
}
.item{
  overflow hidden
  display flex
  height 1.9rem
  .item-img{
    margin .1rem
    width 1.7rem
    height 1.7rem
  }
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
    .item-button{
      line-height .44rem
      margin-top .16rem
      background-color rgba(255,255,187,0.6)
      padding 0 .2rem
      border-radius .06rem
    }
  }
}
</style>
