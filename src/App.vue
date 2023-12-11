<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
import AppFooter from "./components/AppFooter.vue";

import axios from "axios";



import AppNavbar from "./components/AppNavbar.vue";

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
    AppNavbar,


  },


  mounted() { }
};
</script>



 





<template>
  <AppNavbar></AppNavbar>
  <AppHeader />

  <router-view></router-view>

  <AppFooter></AppFooter>
</template>



<style lang="scss" scoped></style>



