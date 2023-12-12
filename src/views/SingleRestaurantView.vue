<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "SingleRestaurantView ",
  data() {
    return {
      FontAwesomeIcon,
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

    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
  },
  mounted() {
    this.getRestoirantView();
  },
};
</script>
<template>
  <div>
    <div class="text-center pt-5">
      <h2>{{ restourant.name }}</h2>
      <div>{{ restourant.address }}</div>
    </div>

    <div>
        <h2 class="text-center mt-5">Il Menù</h2>
      <div class="container mb-5">
        <div class="row text-center">
          <div class="col-md-3 d-flex mb-4 mt-4" v-for="dish in restourant.dishes">

            <div class="card mb-3 flex-fill">
              <img :src="getImageUrl(dish.image)" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ dish.name }}</h5>
                <p class="card-text">{{ dish.description }}</p>
                <p class="card-text">{{ dish.price }} €</p>
                <button class="btn bg-warning text-white text-decoration-none"> <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Aggiungi al carrello </button>
                
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>
  </div>
  <div v-else>
    <h1>Ops,non ha funzionato</h1>
  </div>
</template>
