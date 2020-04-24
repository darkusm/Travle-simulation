<template>
<div class="home">
    <Home-Header></Home-Header>
    <Home-Swiper></Home-Swiper>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
