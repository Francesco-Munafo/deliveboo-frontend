<script>
import { store } from "../../store.js";
import dropin from "braintree-web-drop-in";
import axios from "axios";
export default {
  name: "AppPagamento",
  data() {
    return {
      store,
      dropinInstance: null,
    };
  },

  methods: {
    submitPayment() {
      if (this.dropinInstance) {
        this.dropinInstance
          .requestPaymentMethod()
          .then(({ nonce }) => {
            document.getElementById("nonce").value = nonce;

            // Dati da inviare al backend
            const simulatedData = {
              nonce: simulatedNonce,
              username: store.username,
              address: store.address,
              total: store.totalPrice,
              user_email: store.user_email,
            };
            console.log("Simulated transaction data:", simulatedData);
            // Utilizza Axios per inviare il nonce al backend
            axios
              .post("api/order", requestData)
              .then((response) => {
                console.log(
                  "Dati della transazione inviati al backend:",
                  response.data
                );

                // Se la transazione è andata a buon fine, imposta lo stato del pagamento
                this.paymentStatus = "success";

                // Naviga alla pagina di conferma se il pagamento è stato completato con successo
                if (this.paymentStatus === "success") {
                  this.$router.push("/paymant-success");
                }
              })
              .catch((error) => {
                console.error(
                  "Errore nell'invio dei dati della transazione al backend:",
                  error
                );
              });
          })
          .catch((error) => {
            console.error(
              "Errore nella richiesta del metodo di pagamento:",
              error
            );
          });
      }
    },

    //simulazione pagamento
    /* simulatePayment() {
      // Simula l'ottenimento del nonce e l'invio al backend
      const simulatedNonce = "fake_nonce_for_testing";

      document.getElementById("nonce").value = simulatedNonce;

      // Simula l'invio dei dati al backend
      const simulatedData = {
        nonce: simulatedNonce,
        username: store.username,
        address: store.address,
        total: store.totalPrice,
        user_email: store.user_email,
      };

      console.log("Simulated transaction data:", simulatedData);

      // Simula il reindirizzamento alla pagina di conferma
      this.$router.push("/paymant-success");
    }, */
  },

  mounted() {
    // Cattura il riferimento al pulsante
    const button = document.querySelector("#submitButton");

    dropin.create(
      {
        authorization: "orders/generate", //  chiave di autorizzazione
        container: "#dropin-container",
      },
      (error, instance) => {
        if (error) {
          console.error(error);
          return;
        }

        // Assegna l'istanza di dropin all'oggetto Vue per poterla utilizzare nei metodi
        this.dropinInstance = instance;

        // Aggiungi un listener al click del pulsante usando Vue
        button.addEventListener("click", () => {
          this.submitPayment();
        });
      }
    );
  },
};
</script>
<template>
  <!--  <form @submit.prevent="submitForm"> -->
  <div id="dropin-container"></div>
  <button id="submitButton" type="button">Purchase</button>
  <input type="hidden" id="nonce" name="payment_method_nonce" />
  <!--   </form> -->
</template>
