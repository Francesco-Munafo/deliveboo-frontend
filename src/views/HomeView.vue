<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHome from '../components/AppHome.vue';
import AppBrands from '../components/AppBrands.vue';

export default {
  name:
    "HomeView",


  data() {
    return {
      FontAwesomeIcon,
    };
  },
  components: {
    AppHome,
    AppBrands,
  }
};
</script>

<template>
  <AppHome></AppHome>
  <AppBrands></AppBrands>
</template>
