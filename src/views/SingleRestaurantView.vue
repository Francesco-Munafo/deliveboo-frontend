<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "SingleRestaurantView ",
  data() {
    return {
      blog_api: `http://127.0.0.1:8000/api/restaurants/${this.$route.params.slug}`,
      restourant: {},
    };
  },
  methods: {
    getRestoirantView() {
      axios
        .get(this.blog_api)
        .then((response) => {
          console.log("Response from API:", response.data);
          if (response.data.success) {
            this.restourant = response.data.result;
            console.log("this.restourant", this.restourant);
          } else {
            this.$router.push({ name: "ErrorPage" });
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err.message);
        });
    },
  },
  mounted() {
    this.getRestoirantView();
  },
};
</script>
<template>
  <h1>Piatti</h1>
  <div>
    <div>{{ restourant.name }}</div>
    <div>{{ restourant.address }}</div>
    <div>
      <ul v-for="dish in restourant.dishes">
        <li>{{ dish.name }}</li>
      </ul>
    </div>
  </div>
</template>
