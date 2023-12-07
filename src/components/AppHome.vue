<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  data() {
    return {
      FontAwesomeIcon,
    };
  },
};
</script>

<template>
  <main>
    <!-- <section>
      <div class="container">
        <h2 class="text-center">Seleziona il tipo di cucina</h2>
        <div class="pt-5 hover_effect">
          <a class="rounded bor_color img_ita">Cucina Italiana</a>
        </div>
      </div>
    </section> -->
    <section>
      <div class="container">
        <h2 class="text-center">Seleziona il tipo di cucina</h2>
        <form action="">
          <div class="row gap-3">
            <div
              class="form-check img_check img_ita bor_color d-flex justify-content-center gap-2 col px-5 py-3"
            >
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="hover_effect custom-control-label"
                for="flexCheckDefault"
              >
                Cucina Italiana
              </label>
            </div>
            <div
              class="form-check img_check img_cinese bor_color d-flex justify-content-center gap-2 col px-5 py-3"
            >
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label hover_effect"
                for="flexCheckDefault"
              >
                Cucina Cinese
              </label>
            </div>
            <div
              class="form-check img_check img_messicana bor_color d-flex justify-content-center gap-2 col px-5 py-3"
            >
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label hover_effect"
                for="flexCheckDefault"
              >
                Cucina Messicana
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-center pt-5">
            <router-link to="/restaurants" class="pt-2 bg_color text-white" >Cerca</router-link>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
