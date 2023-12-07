<script>
import AppFooter from './components/AppFooter.vue';
import AppBrands from './components/AppBrands.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppBrands,

  },
  data() {
    return {

    }

  },

  methods: {

  },

  mounted() {

  }

}
</script>

<template>
  <AppBrands></AppBrands>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
