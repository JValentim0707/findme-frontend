/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import indexStore from './store/store'


const app = createApp(App)

registerPlugins(app)

app.use(indexStore);
app.mount('#app')
