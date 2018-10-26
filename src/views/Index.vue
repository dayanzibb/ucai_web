<template>
  <div class="index">
	<home-swiper></home-swiper>
 	<home-grid></home-grid>
 	<home-table></home-table>
  </div>
</template>

<script>
import HomeSwiper from '../components/home/Swiper'
import HomeGrid from '../components/home/Grid'
import HomeTable from '../components/home/Table'

export default {
  data(){
    return {}
  },
  components: {
    HomeSwiper,
    HomeGrid,
    HomeTable
  }
}
</script>
