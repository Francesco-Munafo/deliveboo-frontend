<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "RestaurantsView",
  data() {
    return {
      url_restourant: `http://127.0.0.1:8000/api${this.$route.path}`,
      selectedRestaurants: [],
    };
  },
  methods: {
    getRestourant(url) {
      axios
        .get(url)
        .then((response) => {
          this.selectedRestaurants = response.data.result.data[0].restaurants;
          console.log("selectedRestaurants:", this.selectedRestaurants);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getRestourant(this.url_restourant);
    console.log("this.$route.path:", this.$route.path);
  },
};
</script>




<template>
  <!-- TO DO: 
  -CHIEDERE SE PREFERISCONO UN CONTAINER O PIù
  -COSA AGGIUNGERE -->
  <!-- -sidebar si o no -->
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar">
        <!-- parte per i filtri -->
      </div>
      <!-- I FANTASTICI MENù -->
      <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="container my-5">
          <div class="row text-center">
            <h2>Scopri i nostri fantastici menù</h2>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
            <div class="col bg-info p-3">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto">
                <div class="card-body">
                  <p class="card-text">Nome del Piatto</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- I NOSTRI RISTORANTI -->
        <div class="container my-5">
          <div class="row text-center">
            <h2>I nostri ristoranti</h2>
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome Ristorante">
                <div class="card-body">
                  <p class="card-text">Descrizione del Ristorante</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome Ristorante">
                <div class="card-body">
                  <p class="card-text">Descrizione del Ristorante</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome Ristorante">
                <div class="card-body">
                  <p class="card-text">Descrizione del Ristorante</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome Ristorante">
                <div class="card-body">
                  <p class="card-text">Descrizione del Ristorante</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome Ristorante">
                <div class="card-body">
                  <p class="card-text">Descrizione del Ristorante</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- I RISTORANTI PIù VOTATI -->
        <div class="container my-5">
          <div class="row text-center">
            <h2>I nostri ristoranti più apprezzati</h2>
            <div class="col">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">Informazioni sul Ristorante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">Informazioni sul Ristorante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">Informazioni sul Ristorante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">Informazioni sul Ristorante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">Informazioni sul Ristorante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>


<style lang="scss">


</style>


