import { createApp } from 'vue'
import './style.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add()
import App from './App.vue'

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
