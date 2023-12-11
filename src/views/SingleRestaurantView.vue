<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "SingleRestaurantView ",
  data() {
    return {
      blog_api: `http://127.0.0.1:8000/api/restaurants/${this.$route.params.slug}`,
      restaurant: {},
      restaurantCall: false,
    };
  },
  methods: {
    getRestoirantView() {
      axios
        .get(this.blog_api)
        .then((response) => {
          console.log("Response from API:", response.data);
          if (response.data.success) {
            this.restaurant = response.data.result;
            this.restaurantCall = true;
            console.log("this.restaurant", this.restaurant);
          } else {
            this.$router.push({ name: 'NotFound' });
            console.log('errore');
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
  <div v-if="this.restaurantCall">
    <h1>Piatti</h1>
    <div>{{ restaurant.name }}</div>
    <div>{{ restaurant.address }}</div>
    <div>
      <ul v-for="dish in restaurant.dishes">
        <li>{{ dish.name }}</li>
      </ul>
    </div>
  </div>
  <div v-else>
    <h1>Ops,non ha funzionato</h1>
  </div>
</template>
