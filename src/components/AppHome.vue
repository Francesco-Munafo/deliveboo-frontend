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
      url_restaurant: "/api/restaurants",
      selectedRestaurants: [],
      pageLinks: null,
      currentPage: 1,
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
    async fetchData() {
      try {
        const response = await axios.get(this.url + this.url_type);
        let tempTypes = response.data.results;
        tempTypes = tempTypes.map((type) => ({ ...type, checked: false }));
        this.types = tempTypes;
        console.log("types:", this.types);
      } catch (err) {
        console.error(err);
      }
    },
    async caricaRisultati() {
      const slug = this.handleSlug();

      await this.getAllRestaurants(slug, 1);
    },

    async getAllRestaurants(slug, page = 1) {
      try {
        const response = await axios.get(
          `${this.url}${this.url_restaurant}?page=${page}`
        );
        const allRestaurants = response.data.results.data;

        const filteredRestaurants = allRestaurants.filter(
          (restaurant) =>
            restaurant.types.some((type) =>
              this.selectedTypes.includes(type.slug)
            ) && !this.selectedRestaurants.some((r) => r.id === restaurant.id)
        );

        this.selectedRestaurants = [
          ...this.selectedRestaurants,
          ...filteredRestaurants,
        ];

        const nextPage = response.data.results.next_page_url;
        if (nextPage) {
          const nextPageNumber = new URL(nextPage).searchParams.get("page");
          await this.getAllRestaurants(slug, nextPageNumber);
        }
      } catch (error) {
        console.error("Errore nella richiesta dei ristoranti:", error);
      }
    },
    async loadPage(url) {
      if (url) {
        const pageNumber = new URL(url).searchParams.get("page");
        await this.getAllRestaurants(pageNumber);
      }
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
            this.selectedRestaurants = this.selectedRestaurants.filter(
              (restaurant) =>
                !restaurant.types.some((t) => t.slug === type.slug)
            );
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

        for (let index = 0; index < this.selectedTypes.length; index++) {
          finalUrl = `${finalUrl}/${this.selectedTypes[index]}`;
          console.log("finalUrl", finalUrl);
        }
        console.log("finalUrl:", finalUrl.slice(1));
        return finalUrl.slice(1);
      }
    },

    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
    /*    nextPage() {
      if (this.selectedRestaurants.next_page_url) {
        const nextPageNumber = new URL(
          this.selectedRestaurants.next_page_url
        ).searchParams.get("page");
        this.getAllRestaurants(nextPageNumber);
      }
    },

    prevPage() {
      if (this.selectedRestaurants.prev_page_url) {
        const prevPageNumber = new URL(
          this.selectedRestaurants.prev_page_url
        ).searchParams.get("page");
        this.getAllRestaurants(prevPageNumber);
      }
    },

    setPage(page) {
      this.getAllRestaurants(page);
    }, */
  },
  mounted() {
    /*     this.getType(this.url + this.url_type); */
    this.fetchData();
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
            <button @click="caricaRisultati()">Carica Risultati</button>
          </div>
        </div>

        <div class="container my-5">
          <div class="row text-center">
            <h2>I nostri ristoranti</h2>
            <div
              class="col-md-4 d-flex mb-4 mt-4"
              v-for="restaurant in selectedRestaurants"
            >
              <div class="card flex-fill">
                <img
                  class="card-img-top"
                  :src="getImageUrl(restaurant.image)"
                  alt="Nome Ristorante"
                />
                <div
                  class="card-body d-flex justify-content-between flex-column"
                >
                  <h3>{{ restaurant.name }}</h3>
                  <p class="card-text">{{ restaurant.description }}</p>
                  <p class="card-text">
                    <font-awesome-icon
                      icon="fa-solid fa-location-dot"
                      style="color: #3d348b;"
                    />
                    {{ restaurant.address }}
                  </p>
                  <router-link
                    :to="{
                      name: 'SingleRestaurantView',
                      params: { slug: restaurant.slug },
                    }"
                    class="btn bg-warning text-white text-decoration-none"
                    >Vai al ristorante</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation" class="my-3 d-inline-block">
          <ul class="pagination">
            <li
              class="page-item"
              v-for="page in pageLinks"
              :key="page.label"
              :class="{
                active: page.label == currentPage,
                disabled: page.url === null,
              }"
            >
              <a class="page-link" href="#" @click.prevent="loadPage(page.url)">
                {{ page.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
</template>
