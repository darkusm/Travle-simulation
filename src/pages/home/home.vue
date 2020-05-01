<template>
<div class="home">
    <Home-Header></Home-Header>
    <Home-Swiper></Home-Swiper>
    <Home-Icons></Home-Icons>
    <Home-Recommend></Home-Recommend>
    <Home-Weekend></Home-Weekend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
