<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
import AppHome from "./components/AppHome.vue";
import AppBrands from './components/AppBrands.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios';

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
         AppFooter,
        AppBrands,
      
    },

}

</script>

<template>
  <AppHeader/>
  <AppHome></AppHome>
   <AppBrands></AppBrands>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>

</style>


