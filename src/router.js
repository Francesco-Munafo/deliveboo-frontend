// 0.Import the createWebHashHistory and createRouter from vue-router
import { createWebHashHistory, createRouter } from "vue-router";

// 1. Define route components.
import HomeView from "./views/HomeView.vue";
import RestaurantsView from "./views/RestaurantsView.vue";



// 2. Define some routes
const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/restaurants", name: "Restaurants", component: RestaurantsView },

];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});

// export the vue router instance
export { router };
