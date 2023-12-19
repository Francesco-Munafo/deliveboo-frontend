<script>
import { store } from "../../store.js";
export default {
  name: "AppNavbar",
  data() {
    return {
      store,
      scrollY: 0,
    };
  },
  components: {},
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
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    if (store.savedCart) {
      store.cart = JSON.parse(store.savedCart);
    }
    if (store.savedTotal) {
      store.totalPrice = JSON.parse(store.savedTotal);
    }

  },
  computed: {
    iconStyle() {
      const extraOffset = 80; // distanza per centrarlo
      const offsetThreshold = 100; // offset per non farlo andare fuori navbar senza lo scroll

      let translateY = this.scrollY;
      if (this.scrollY > offsetThreshold) {
        translateY += extraOffset;
      }

      return {
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.3s ease-in-out',
      };
    },
    totalDishesCount() {
      return this.store.cart.reduce((total, dish) => total + dish.quantity, 0);
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

};
</script>

<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #f7b801;margin-bottom:-5px;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <div class="d-md-flex align-items-center">
          <img style="width: 80px;" src="/src/assets/img/wired-lineal-13-pizza.gif" alt="pizza" />
          <img style="width: 200px;" src="/src/assets/img/logo1.png" alt="logo" />
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <div class="d-flex gap-3 ms-auto">
          <button class="d-sm-block btn header-button">
            <a class="col_select text-decoration-none" href="/">
              <i class="fa-solid fa-house"></i> Home
            </a>
          </button>
          <button class="btn header-registration-button">
            <a class="col_white text-decoration-none" href="http://127.0.0.1:8000/login">
              <i class="fa-solid fa-user"></i> area personale
            </a>
          </button>
          <button class="btn header-registration-button col_select d-sm-block position-relative z-3" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
            :style="iconStyle">
            <i class="col_white fa-solid fa-cart-shopping"></i>
            <div v-if="totalDishesCount > 0" class="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {{ totalDishesCount }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-end w-50 .offcanvas-md offcanvas-custom" tabindex="-1" id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Carrello
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
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
                  <input type="number" class="form-control" v-model="cartDish.quantity" min="0"
                    @input="updateQuantity(cartDish)" />
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
          <div class="col-md-8 order-md-2 mb-4">
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
            <RouterLink to="/cart" class="btn btn-warning btn-lg btn-block" aria-current="page">
              Procedi al Checkout
            </RouterLink>
            <!--    <button class="btn btn-primary btn-lg btn-block" type="submit">
              Procedi al Checkout
            </button> -->
          </div>
          <div class="col-md-4 order-md-1">
            <button class="btn btn-link btn-sm">Continua lo shopping</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.header-button {
  padding: 9px 20px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  transition: all 0.5s ease;

  .col_select,
  i {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 15px;
    color: #3d348b;
    font-weight: bold;
  }
}

.header-button:hover {
  background-color: #3d348b;
  box-shadow: rgb(93 24 220) 0px 7px 29px 0px;

  .col_select,
  i {
    color: white;
    font-weight: bold;
  }
}

.header-registration-button {
  padding: 9px 20px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: #3d348b;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  transition: all 0.5s ease;

  .col_white {
    letter-spacing: 1.5px;
    font-size: 15px;
    text-transform: uppercase;
    color: white;
  }
}

.header-registration-button:hover {
  background-color: white;
  box-shadow: rgb(93 24 220) 0px 7px 29px 0px;

  .col_white,
  i {
    color: #3d348b;
    font-weight: bold;
  }
}

// MEDIA QUERIES
@media screen and (min-width: 576px) and (max-width: 1200px) {
   .offcanvas-custom{
    width:75% !important;
   }
}
@media screen and (max-width: 576px)  {
   .offcanvas-custom{
    width:100% !important;
   }
}
</style>
