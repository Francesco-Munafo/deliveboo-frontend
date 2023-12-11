<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
import AppFooter from "./components/AppFooter.vue";
import AppBrands from './components/AppBrands.vue';
import axios from "axios";





export default {
  name: 'App',
  data() {
    return {
      FontAwesomeIcon,
    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppBrands,


  },


  mounted() { }
};
</script>



 





<template>
  <AppHeader />

  <router-view></router-view>

  <AppFooter></AppFooter>
</template>



<style lang="scss" scoped></style>



