import type { App } from "vue";
import {
  InputText,
  InputNumber,
  Checkbox,
  RadioButton,
  Toast,
  Button,
  Dialog,
} from "primevue";

export default class UILibraryProvider {
  components = [
    { name: "InputText", component: InputText },
    { name: "InputNumber", component: InputNumber },
    { name: "Checkbox", component: Checkbox },
    { name: "RadioButton", component: RadioButton },
    { name: "Toast", component: Toast },
    { name: "Button", component: Button },
    { name: "Dialog", component: Dialog },
  ];
  provide(app: App) {
    this.components.map(({ name, component }) =>
      app.component(name, component)
    );
  }
}
