<script>
import axios from "axios";
import { store } from "../../store.js";

export default {
  data() {
    return {
      store,
    };
  },

};


</script>
<template>

  <div class="container text-center my-5">
    <img src="../assets/img/logo1.png" class="img-fluid mb-3">
    <h1 class="mb-4">Il tuo ordine sta per arrivare!</h1>
    <img src="../assets/img/cicogna-pagamento.png" class="img-fluid w-25 mb-3">
    <p class="lead">Il tempo di consegna medio stimato è di circa 45min.</p>
  </div>

  <div class="container mb-5">
    <div class="row text-center mb-3">
      <div class="col-md">
        <div class="card p-3">
          <h4><b>Riepilogo ordine:</b></h4>
          <p><b>Ordine:</b> </p>
          <p><b>Data dell'ordine:</b> </p>
          <p><b>Totale dell'ordine:</b> </p>
        </div>
      </div>
      <div class="col-md">
        <div class="card p-3">
          <h4><b>Informazioni sulla spedizione:</b></h4>
          <p><b>Nome:</b> </p>
          <p><b>Via:</b> </p>
          <p><b>Note:</b> </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Prodotti</th>
            <th scope="col">Quantità</th>
            <th scope="col">Prezzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="row">
               
             <div class="col-6">
              img
             </div>
             <div class="col-6">
              descrizione
             </div>
              </div>
            </td>
            <td>10</td>
            <td>€5.00</td>
          </tr>
          <!-- Ripeti per altri prodotti -->
        </tbody>
      </table>
    </div>

  </div>
</template>
