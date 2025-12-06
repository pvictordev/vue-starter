import { createApp } from "vue"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura"
import App from "./App.vue"
import router from "./router"
import {
  serviceProviders,
  HTTPProvider,
  UILibraryProvider,
  MessageProvider,
  LocalizationProvider,
} from "./providers/ServiceProviders"
import "primeicons/primeicons.css"
import "/node_modules/primeflex/primeflex.css"
import "./assets/styles/index.scss"
import "./assets/styles/libs/primevue/index.scss"

const app = createApp(App)
serviceProviders(app)
  .provide(new HTTPProvider())
  .provide(new UILibraryProvider())
  .provide(new MessageProvider())
  .provide(new LocalizationProvider())

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.mount("#app")
