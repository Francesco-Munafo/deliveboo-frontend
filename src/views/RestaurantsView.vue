<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "RestaurantsView",
  data() {
    return {
      url_restourant: `http://127.0.0.1:8000/api${this.$route.path}`,
      selectedRestaurants: [],
    };
  },
  methods: {
    getRestourant(url) {
      axios
        .get(url)
        .then((response) => {
          this.selectedRestaurants = response.data.result.data[0].restaurants;
          console.log("selectedRestaurants:", this.selectedRestaurants);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getRestourant(this.url_restourant);
    console.log("this.$route.path:", this.$route.path);
  },
};
</script>

<template> </template>

<style lang="scss"></style>
