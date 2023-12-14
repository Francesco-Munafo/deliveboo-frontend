<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { store } from "../../store.js";

export default {
  name: "CartView",
  data() {
    return {
      store,
    };
  },
  methods: {
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
  <div class="container my-5">
    <h1 class="mb-4">Carrello</h1>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Prodotto</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Quantità</th>
            <th scope="col">Totale</th>
            <th scope="col">Azione</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartDish in store.cart">
            <td>
              <div class="media-body">
                <h5 class="mt-0">{{ cartDish.name }}</h5>
              </div>
            </td>

            <td>€ {{ cartDish.price }}</td>
            <td>
              <input
                type="number"
                class="form-control"
                v-model="cartDish.quantity"
                min="0"
                @input="updateQuantity(cartDish)"
              />
            </td>
            <td>€ {{ cartDish.dishTotalPrice }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteCartDish(cartDish)">
                Rimuovi
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Il tuo totale</span>
          <span class="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between">
            <span>Subtotale (EUR)</span>
            <strong>€ {{ store.totalPrice }}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Spedizione</span>
            <strong>€ Costo Spedizione</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Totale (EUR)</span>
            <strong>€ Totale</strong>
          </li>
        </ul>
        <RouterLink
          to="/cart"
          class="btn btn-warning btn-lg btn-block"
          aria-current="page"
        >
          Procedi al Checkout
        </RouterLink>
        <!--    <button class="btn btn-primary btn-lg btn-block" type="submit">
              Procedi al Checkout
            </button> -->
      </div>
      <div class="col-md-8 order-md-1">
        <button class="btn btn-link btn-sm">Continua lo shopping</button>
      </div>
    </div>
  </div>
</template>
