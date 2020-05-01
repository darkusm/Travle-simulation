<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item"
      v-for="item of recommendList"
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://dimg04.c-ctrip.com/images/30040s000000hwyeo4FFB_C_228_170.jpg',
          title: '杭州+苏州+上海3日2晚跟团游·【3个上车点可自选】',
          desc: '行程透明、纯玩0购物、狮子林或拙政园可自选【漫步西湖宋城穿越千古情表演寒山寺祈福园林城市国际都市】 赠西湖游船 轻松深度漫游 爸妈放心游、天天发班'
        },
        {
          id: '002',
          imgUrl: 'https://dimg04.c-ctrip.com/images/30040s000000hwyeo4FFB_C_228_170.jpg',
          title: '杭州+苏州+上海3日2晚跟团游·【3个上车点可自选】',
          desc: '行程透明、纯玩0购物、狮子林或拙政园可自选【漫步西湖宋城穿越千古情表演寒山寺祈福园林城市国际都市】 赠西湖游船 轻松深度漫游 爸妈放心游、天天发班'
        },
        {
          id: '003',
          imgUrl: 'https://dimg04.c-ctrip.com/images/30040s000000hwyeo4FFB_C_228_170.jpg',
          title: '杭州+苏州+上海3日2晚跟团游·【3个上车点可自选】',
          desc: '行程透明、纯玩0购物、狮子林或拙政园可自选【漫步西湖宋城穿越千古情表演寒山寺祈福园林城市国际都市】 赠西湖游船 轻松深度漫游 爸妈放心游、天天发班'
        }
      ]
    }
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
