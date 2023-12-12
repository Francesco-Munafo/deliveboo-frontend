import { createApp } from "vue";
import "../src/assets/scss/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { router } from "./router.js";
import App from "./App.vue";

import {
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAtlassian, faFacebookF, faTwitter, faYoutube, faInstagram,faLocationDot,faCartShopping);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
