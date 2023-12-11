<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

export default {
  name: "CartView",
  data() {
    return {
      cart: [],
      // Aggiungi altri dati come necessario
    };
  },
  methods: {
    getCart() {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        this.cart = JSON.parse(cartData);
      }
    },
    addToCart(item) {
      // Logica per aggiungere un articolo al carrello
      this.updateLocalStorage();
    },
    removeFromCart(index) {
      // Logica per rimuovere un articolo dal carrello
      this.updateLocalStorage();
    },
    updateCart(item, quantity) {
      // Logica per aggiornare la quantità di un articolo nel carrello
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    fetchProductDetails() {
      // Usa axios per recuperare i dati dal tuo API endpoint
    }
  },
  mounted() {
    this.getCart();
    this.fetchProductDetails();
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
            <th scope="col">Articolo</th>
            <th scope="col">Taglia</th>
            <th scope="col">Colore</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Quantità</th>
            <th scope="col">Totale</th>
            <th scope="col">Azione</th>
          </tr>
        </thead>
        <tbody>
     
          <tr>
            <td>
             
            
                <div class="media-body">
                  <h5 class="mt-0">Nome Prodotto</h5>
                </div>
            
            </td>
            <td>Taglia</td>
            <td>Colore</td>
            <td>€ Prezzo</td>
            <td>
              <input type="number" class="form-control" value="1" min="0">
            </td>
            <td>€ Totale</td>
            <td>
              <button class="btn btn-danger">Rimuovi</button>
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
            <strong>€ Subtotale</strong>
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

        
        <button class="btn btn-primary btn-lg btn-block" type="submit">Procedi al Checkout</button>
      </div>
      <div class="col-md-8 order-md-1">
        <button class="btn btn-link btn-sm">Continua lo shopping</button>
       
      </div>
    </div>
  </div>


</template>
