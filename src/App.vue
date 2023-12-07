<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
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
    AppFooter,
    AppBrands,

  },

}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>


