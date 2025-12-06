<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLanguages"
      :key="lang.code"
      @click="switchLanguage(lang.code)"
      :class="{ active: currentLocale === lang.code }"
      class="p-2 m-1 border-round"
    >
      {{ $t(lang.nameKey) }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const availableLanguages = ref([
  { code: "en", nameKey: "system.languageSwitcher.english" },
  { code: "fr", nameKey: "system.languageSwitcher.french" },
]);

const switchLanguage = (langCode) => {
  locale.value = langCode;
  localStorage.setItem("locale", langCode);
};

// Watch for locale changes and persist to localStorage
watch(locale, (newLocale) => {
  localStorage.setItem("locale", newLocale);
});
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

button {
  cursor: pointer;
  background: none;
  border: 1px solid #ccc;
}

button.active {
  background-color: #e6e6e6;
  color: black;
}
</style>
