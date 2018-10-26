<template>
  <div class="home">
	<home-header></home-header>
  <router-view></router-view>
	<home-tabbar></home-tabbar>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeTabbar from '../components/Tabbar'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeTabbar
  }
}
</script>
