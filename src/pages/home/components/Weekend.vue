<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item"
      v-for="item of recommendList"
      :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{item.desc}}</p>99
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/10071f000001h7017CC48_D_650_366.jpg',
          title: '杭州+苏州+上海3日2晚跟团游·【3个上车点可自选】',
          desc: '行程透明、纯玩0购物、狮子林或拙政园可自选【漫步西湖宋城穿越千古情表演寒山寺祈福园林城市国际都市】 赠西湖游船 轻松深度漫游 爸妈放心游、天天发班'
        },
        {
          id: '002',
          imgUrl: 'https://youimg1.c-ctrip.com/target/10071f000001h7017CC48_D_650_366.jpg',
          title: '杭州+苏州+上海3日2晚跟团游·【3个上车点可自选】',
          desc: '行程透明、纯玩0购物、狮子林或拙政园可自选【漫步西湖宋城穿越千古情表演寒山寺祈福园林城市国际都市】 赠西湖游船 轻松深度漫游 爸妈放心游、天天发班'
        },
        {
          id: '003',
          imgUrl: 'https://youimg1.c-ctrip.com/target/10071f000001h7017CC48_D_650_366.jpg',
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
  margin-t8op .2rem
  line-height .8rem
  background #eee
}
.item-img-wrapper{
  overflow hidden
  height 0
  padding-bottom 56.2%
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
