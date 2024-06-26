import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
const vuetify = createVuetify({
	theme: {
		defaultTheme: 'light',
	},
    components,
    directives,
  })

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.mount('#root')