<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHome from "./components/AppHome.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      FontAwesomeIcon,
    };
  },

  components: {
    AppHome,
    AppFooter,
  },
  methods: {},

  mounted() {},
};
</script>

<template>
  <AppHome></AppHome>
  <AppFooter></AppFooter>
</template>

<style></style>
