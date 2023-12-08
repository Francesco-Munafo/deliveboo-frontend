<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from './components/AppHeader.vue';
import AppHome from "./components/AppHome.vue";
import AppFooter from "./components/AppFooter.vue";
import AppInfo from "./components/AppInfo.vue";
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      FontAwesomeIcon,
    };
  },

  components: {
    AppHeader,
    AppHome,
    AppFooter,
    AppInfo,
  },
  methods: {},

  mounted() {}
};
</script>

<template>
  <AppHeader></AppHeader> 
  <AppHome></AppHome>
  <AppInfo></AppInfo>
  <AppFooter></AppFooter>
             
</template>

<style></style>

