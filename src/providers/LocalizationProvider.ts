import type { App } from "vue";
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export default class LocalizationProvider {
  provide(app: App) {
    // Get saved locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem("locale") || "en";

    const i18n = createI18n({
      legacy: false,
      locale: savedLocale,
      fallbackLocale: "en",
      globalInjection: true,
      silentTranslationWarn: true,
      silentFallbackWarn: true,
      messages: {
        en,
        fr,
      },
    });

    app.use(i18n);
  }
}
