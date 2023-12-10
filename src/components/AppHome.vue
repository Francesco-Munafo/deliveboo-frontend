<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      FontAwesomeIcon,
      url: "http://127.0.0.1:8000",
      url_type: "/api/types",
      url_restourant: "/api/restaurants",
      types: [],
      selectedTypes: [],
    };
  },
  methods: {
    getType(url) {
      axios
        .get(url)
        .then((response) => {
          let tempTypes = response.data.results;
          tempTypes = tempTypes.map((type) => ({ ...type, checked: false }));
          this.types = tempTypes;
          console.log("types:", this.types);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getSlug(index) {
      const updatedTypes = this.types.map((type, i) => {
        if (i === index) {
          const typeGiaPresente = this.selectedTypes.find(
            (el) => el === type.slug
          );
          if (typeGiaPresente) {
            let indice;
            this.selectedTypes.forEach((type, id) => {
              if (type === typeGiaPresente) {
                indice = id;
              }
            });
            this.selectedTypes.splice(indice, 1);
          } else {
            this.selectedTypes.push(type.slug);
          }
          return { ...type, checked: !type.checked };
        } else {
          return type;
        }
      });
      this.types = updatedTypes;
    },
    handleSlug() {
      if (this.selectedTypes.length < 2) {
        return this.selectedTypes[0];
      } else {
        let finalUrl = "";
        /* this.selectedTypes.forEach((selectedType) => {
          finalUrl = `${finalUrl}/${selectedType}`;
        }); */
        for (let index = 0; index < this.selectedTypes.length; index++) {
          finalUrl = `${finalUrl}/${this.selectedTypes[index]}`;
        }
        console.log("finalUrl:", finalUrl.slice(1));
        return finalUrl.slice(1);
      }
    },
  },
  mounted() {
    this.getType(this.url + this.url_type);
  },
};
</script>

<template>
  <main>
    <section>
      <div class="container mt-5">
        <h2 class="text-center">Seleziona il tipo di cucina</h2>

        <div
          class="row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-lg-5 gap-4 justify-content-center pt-5"
        >
          <div
            class="form-check img_check img_ita bor_color d-flex justify-content-center gap-2 px-5 py-3"
            v-for="(typ, index) in this.types"
            :key="typ.id"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="typ.checked"
              :id="typ.slug"
              @change="getSlug(index)"
            />
            <label class="hover_effect custom-control-label" :for="typ.slug">
              {{ typ.name }}
            </label>
          </div>
        </div>
        <div class="d-flex justify-content-center pt-5">
          <div class="d-flex justify-content-center pt-5">
            <router-link
              :to="{
                name: 'Restaurants',
                params: {
                  slug:
                    this.selectedTypes.length > 0 && handleSlug().split('/'),
                },
              }"
              class="pt-2 bg_color text-white text-decoration-none"
            >
              Cerca
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
