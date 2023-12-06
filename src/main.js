import { createApp } from 'vue'
import '../src/assets/scss/app.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add()
import * as bootstrap from "bootstrap";
import App from './App.vue'

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
