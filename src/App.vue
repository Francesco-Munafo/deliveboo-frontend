<script>
import AppHome from "./components/AppHome.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "App",

  data() {
    return {
      FontAwesomeIcon,
    };
  },

  components: {
    AppHome,
  },
};
</script>

<template>
  <AppHome></AppHome>
</template>

<style></style>
