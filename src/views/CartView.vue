<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import AppPagamento from "../components/AppPagamento.vue";
import { store } from "../../store.js";
import braintree from "braintree-web";
export default {
  name: "CartView",
  data() {
    return {
      store,
    };
  },
  components: {
    AppPagamento,
  },
  methods: {
    /*  */

    /*  */
    deleteCartDish(dish) {
      const index = store.cart.indexOf(dish);
      if (index !== -1) {
        store.cart.splice(index, 1);
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },

    updateQuantity(dish) {
      if (dish && dish.quantity > 0) {
        dish.dishTotalPrice = dish.price * dish.quantity;
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },
    updateTotalPrice() {
      store.totalPrice = store.cart.reduce(
        (total, dish) => total + dish.dishTotalPrice,
        0
      );
      store.saveTotalPrice();
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
    if (store.savedCart) {
      store.cart = JSON.parse(store.savedCart);
    }
    if (store.savedTotal) {
      store.totalPrice = JSON.parse(store.savedTotal);
    }
  },
};
</script>

<template>
  <section class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 mb-4">
          <!-- Checkout -->
          <form @submit.prevent="submitForm">
            <div class="card shadow-0 border">
              <div class="p-4">
                <h5 class="card-title mb-3">Checkout</h5>
                <div class="row">
                  <div class="col-6 mb-3">
                    <p class="mb-0">Nome</p>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="username"
                        placeholder="Inserisci il tuo nome"
                        class="form-control"
                        v-model="store.username"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-6">
                    <p class="mb-0">Cognome</p>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Inserisci il tuo cognome"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Telefono</p>
                    <div class="form-outline">
                      <input
                        type="tel"
                        id="phone"
                        value="+39 "
                        class="form-control"
                        v-model="store.phone"
                      />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Email</p>
                    <div class="form-outline">
                      <input
                        type="email"
                        id="user_email"
                        placeholder="example@gmail.com"
                        class="form-control"
                        v-model="store.user_email"
                      />
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="row">
                  <div class="col-sm-8 mb-3">
                    <p class="mb-0">Indirizzo</p>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="address"
                        placeholder="Inserisci il tuo indirizzo"
                        class="form-control"
                        v-model="store.address"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">Città</p>
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Inserisci la tua città"
                      class="form-control"
                    />
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">Casa</p>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Inserisci .."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Codice Postale</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <p class="mb-0">Messaggio per il venditore</p>
                  <div class="form-outline">
                    <textarea
                      class="form-control"
                      id="textAreaExample1"
                      rows="2"
                    ></textarea>
                  </div>
                </div>

                <AppPagamento></AppPagamento>
                <div class="float-end">
                  <button class="btn btn-light border">Cancella</button>
                </div>
              </div>
            </div>
          </form>
          <!-- Checkout -->
        </div>
        <div
          class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end"
        >
          <div class="ms-lg-4 mt-4 mt-lg-0" style="max-width: 320px;">
            <h6 class="mb-3">Il tuo ordine</h6>
            <div class="d-flex justify-content-between">
              <p class="mb-2">Prezzo Totale:</p>
              <p class="mb-2">€ {{ store.totalPrice }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="mb-2">Costo di spedizione:</p>
              <p class="mb-2">gratis</p>
            </div>
            <hr />

            <h6 class="text-dark my-4">Prodotti nel carrello</h6>

            <div
              class="d-flex align-items-center mb-4"
              v-for="cartDish in store.cart"
            >
              <div class="me-3 position-relative">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary"
                >
                  Quan
                </span>
                <img
                  :src="getImageUrl(cartDish.image)"
                  style="height: 96px; width: 96x;"
                  class="img-sm rounded border"
                />
              </div>
              <div class="">
                <a href="#" class="nav-link">
                  {{ cartDish.name }}
                </a>
                <div class="price text-muted">
                  Prezzo piatto: € {{ cartDish.price }}
                </div>
                <div>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cartDish.quantity"
                    min="0"
                    @input="updateQuantity(cartDish)"
                  />
                </div>
                <div
                  class="d-flex justify-content-between mt-1 align-items-center"
                >
                  <p class="mb-2 fw-bold pt-2">
                    Totale: € {{ cartDish.dishTotalPrice }}
                  </p>
                  <button
                    class="btn btn-danger py-1 px-2"
                    @click="deleteCartDish(cartDish)"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
