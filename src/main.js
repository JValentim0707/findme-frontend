/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import VueTheMask from 'vue-the-mask'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import indexStore from './store/store'


const app = createApp(App)

registerPlugins(app)

app.use(indexStore);
app.use(VueTheMask)
app.mount('#app')
