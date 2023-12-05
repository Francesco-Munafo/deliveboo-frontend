import { createApp } from "vue";
import "../src/assets/scss/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import * as bootstrap from "bootstrap";

import {
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
);
import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
