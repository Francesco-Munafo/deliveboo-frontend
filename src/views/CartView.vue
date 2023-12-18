<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { store } from "../../store.js";

export default {
  name: "CartView",
  data() {
    return {
      store,
      base_url: "http://127.0.0.1:8000",
      loading: false,
      name: "",
      surname: "",
      city: "",
      home: "",
      address: "",
      postal_code: "",
      email: "",
      phone: "",
      message: "",
      errors: [],
      success: null,
    };
  },

  methods: {
    sendForm() {
      this.loading = true;
      this.errors = [];
      this.success = null;

      const payload = {
        name: this.name,
        surname: this.surname,
        city: this.city,
        address: this.address,
        postal_code: this.postal_code,
        home: this.home,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(payload);

      axios
        .post(this.base_url + "/api/cart", payload)
        .then((response) => {
          const success = response.data.success;
          if (!success) {
            // there are errors
            console.log(response);
            console.log(response.data.errors);
            this.errors = response.data.errors;
          } else {
            // All good
            console.log(response);
            console.log(response.data.message);
            // empty the form
            this.name = "";
            this.email = "";
            this.message = "";
            this.phone = "";
            this.surname = "";
            this.city = "";
            this.address = "";
            this.home = "";
            this.postal_code = "";

            // print a success message
            this.success = response.data.message;
          }
          this.loading = false;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },

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
      <!-- Checkout -->
      <form action="" v-on:submit.prevent="sendForm()">
        <div class="row" v-if="!loading">
          <div class="col-xl-8 col-lg-8 mb-4">
            <h5 class="card-title mb-3">Checkout</h5>
            <div class="row">

              <div class="col-6 mb-3">
                <p class="mb-0">Nome</p>
                <div class="form-outline">
                  <input type="text" name="name" id="name" class="form-control" placeholder="Mario"
                    aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }" />
                </div>
                <span style="font-size: 13px;" class="text-danger" v-for="message in errors.name">{{ message }}</span>
              </div>

              <div class="col-6">
                <p class="mb-0">Cognome</p>
                <div class="form-outline">
                  <input type="text" name="surname" id="surname" class="form-control" placeholder="Rossi"
                    aria-describedby="surnameHelper" v-model="surname" :class="{ 'is-invalid': errors.surname }" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.surname">{{ message
                  }}</span>
                </div>
              </div>

              <div class="col-6 mb-3">
                <p class="mb-0">Telefono</p>
                <div class="form-outline">
                  <input type="tel" name="phone" id="phone" class="form-control" placeholder="3894463472"
                    aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.phone">{{ message
                  }}</span>

                </div>
              </div>

              <div class="col-6 mb-3">
                <p class="mb-0">Email</p>
                <div class="form-outline">
                  <input type="text" name="email" id="email" class="form-control" placeholder="mariorossi22@gmail.com"
                    aria-describedby="emailHelper" v-model="email" :class="{ 'is-invalid': errors.email }" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.email">{{ message
                  }}</span>

                </div>
              </div>
            </div>

            <hr class="my-4" />

            <div class="row">
              <div class="col-sm-8 mb-3">
                <p class="mb-0">Indirizzo</p>
                <div class="form-outline">
                  <input type="text" name="address" id="address" class="form-control" placeholder="Via Verdi 22"
                    aria-describedby="addressHelper" v-model="address" :class="{ 'is-invalid': errors.address }" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.address">{{ message
                  }}</span>

                </div>
              </div>

              <div class="col-sm-4 mb-3">
                <p class="mb-0">Città</p>
                <input type="text" name="city" id="city" class="form-control" placeholder="Milano"
                  aria-describedby="cityHelper" v-model="city" :class="{ 'is-invalid': errors.city }">
                <span style="font-size: 13px;" class="text-danger" v-for="message in errors.city">{{ message }}</span>

              </div>

              <div class="col-sm-4 mb-3">
                <p class="mb-0">Casa</p>
                <div class="form-outline">
                  <input :class="{ 'is-invalid': errors.home }" type="text" name="home" id="home" class="form-control"
                    placeholder="prima casa verde" aria-describedby="homeHelper" v-model="home" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.home">{{ message
                  }}</span>
                </div>
              </div>

              <div class="col-sm-4 col-6 mb-3">
                <p class="mb-0">Codice Postale
                </p>
                <div class="form-outline">
                  <input type="text" name="postal_code" id="postal_code" class="form-control" placeholder="25030"
                    aria-describedby="postal_codeHelper" v-model="postal_code"
                    :class="{ 'is-invalid': errors.postal_code }" />
                  <span style="font-size: 13px;" class="text-danger" v-for="message in errors.postal_code">{{ message
                  }}</span>

                </div>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-outline">
                <textarea :class="{ 'is-invalid': errors.message }" class="form-control" name="message" id="message"
                  rows="3" placeholder="Inserisci il tuo messaggio..." v-model="message"></textarea>
                <span style="font-size: 13px;" class="text-danger" v-for="message in errors.message">{{ message
                }}</span>
              </div>
            </div>

            <span class="alert alert-success py-1" role="alert" v-if="success">
              <strong>Ordine effettuato con successo!</strong>
            </span>

            <div class="float-end mb-2">
              <button type="submit" class="btn btn-info" :class="{ ' btn-primary w-100': !loading }" :disabled="loading">
                <span> Paga </span>
              </button>

            </div>
          </div>

          <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
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

              <div class="d-flex align-items-center mb-4" v-for="cartDish in store.cart">
                <div class="me-3 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    Quan
                  </span>
                  <img :src="getImageUrl(cartDish.image)" style="height: 96px; width: 96x;"
                    class="img-sm rounded border" />
                </div>
                <div class="">
                  <a href="#" class="nav-link">
                    {{ cartDish.name }}
                  </a>
                  <div class="price text-muted">Prezzo piatto: € {{ cartDish.price }}</div>
                  <div>
                    <input type="number" class="form-control" v-model="cartDish.quantity" min="0"
                      @input="updateQuantity(cartDish)" />
                  </div>
                  <div class="d-flex justify-content-between mt-1 align-items-center">
                    <p class="mb-2 fw-bold pt-2 ">Totale: € {{ cartDish.dishTotalPrice }}</p>
                    <button class="btn btn-danger py-1 px-2" @click="deleteCartDish(cartDish)">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>

        <div class="py-5 d-flex justify-content-center" v-else>
          <div class="loader-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>


<style scoped>
.loader-container {
  --uib-size: 80px;
  --uib-color: black;
  --uib-speed: 1s;
  --uib-dot-size: calc(var(--uib-size) * 0.18);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: calc(var(--uib-size) * 0.5);
  width: var(--uib-size);
}

.dot {
  flex-shrink: 0;
  width: calc(var(--uib-size) * 0.17);
  height: calc(var(--uib-size) * 0.17);
  border-radius: 50%;
  background-color: var(--uib-color);
  transition: background-color 0.3s ease;
}

.dot:nth-child(1) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45) infinite;
}

.dot:nth-child(2) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3) infinite;
}

.dot:nth-child(3) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15) infinite;
}

.dot:nth-child(4) {
  animation: jump var(--uib-speed) ease-in-out infinite;
}

@keyframes jump {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-200%);
  }
}
</style>