import type { App } from "vue";
import ToastService from "primevue/toastservice";

export default class MessageProvider {
  provide(app: App) {
    app.use(ToastService);
  }
}
