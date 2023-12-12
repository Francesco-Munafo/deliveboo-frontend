<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

export default {
  name: "SingleRestaurantView",
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
  <div v-if="this.restaurantCall">
    <div class="container mt-5">
      <div class="card shadow-lg rounded-5">
        <div class="row g-0">
          <!-- left -->
          <div class="col-md-6">
            <img :src="getImageUrl(restaurant.image)" class="img-fluid rounded-start" alt="restaurant">
          </div>
          <!-- right -->
          <div class="col-md-6 align-items-center d-flex">
            <div class="card-body text-center">
              <h2 class="card-title">{{ restaurant.name }}</h2>
              <div>{{ restaurant.address }}</div>
              <span v-for="typology in restaurant.types" :key="typology.id" class="mx-1">
                <span class="badge text-bg-warning my-3">{{ typology.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div>
      <h2 class="text-center mt-5">Il Menù</h2>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 d-flex" v-for="dish in restaurant.dishes">
            <div class="card border-0 shadow-sm flex-fill justify-content-between">
              <div class="row g-0">
                <div class="col-5 d-flex align-items-center justify-content-center">
                  <img :src="getImageUrl(dish.image)" class="img-fluid rounded-3" alt="Immagine"
                    style="max-height: 100px;">
                </div>
                <div class="col-7">
                  <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">{{ dish.name }}</h5>

                    <p class="card-text">{{ dish.price }} €</p>
                    <!-- <p class="card-text">{{ dish.description }} €</p> -->
                  </div>
                </div>
              </div>
              <button class="btn btn-warning text-white text-decoration-none">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Aggiungi al carrello
              </button>
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

<style></style>
