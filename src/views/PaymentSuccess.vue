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
</template>
