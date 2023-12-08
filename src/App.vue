<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
import AppHome from "./components/AppHome.vue";
import AppFooter from "./components/AppFooter.vue";
import AppInfo from "./components/AppInfo.vue";
import axios from "axios";




import AppBrands from './components/AppBrands.vue';





export default {
  name: 'App',
  data() {
    return {
      FontAwesomeIcon,
    }
  },

  components: {
    AppHeader,

    AppHome,
  
    AppInfo,

    AppFooter,
    AppBrands,


  },


  mounted() {}
};
</script>



 





<template>
  <AppHeader />
    <AppHome></AppHome>
  <router-view></router-view>

  <AppInfo></AppInfo>
  <AppFooter></AppFooter>
             
</template>



<style lang="scss" scoped></style>



