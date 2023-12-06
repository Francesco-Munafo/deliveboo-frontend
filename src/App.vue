<script>
<<<<<<< HEAD
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    data() {
        return {

        }
    },

    components: {
        AppHeader,
      
    },

}

</script>

<template>
  <AppHeader/>

</template>

<style lang="scss" scoped>

</style>
=======
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
>>>>>>> main
