<template>
  <header
    class="flex justify-content-end align-items-center py-2 pr-3 gap-2"
    :style="{ backgroundColor: randomColor }"
  >
    <nav class="flex justify-content-end">
      <ul class="flex gap-3">
        <li v-show="loginStatus">{{ $t("system.header.dashboard") }}</li>
      </ul>
    </nav>
    <LanguageSwitcher />
  </header>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRootStore } from "@/stores/store";
import { returnRandomHexColor } from "@/domain/system/helper";
import LanguageSwitcher from "@/domain/system/components/LanguageSwitcher.vue";

const store = useRootStore();
const loginStatus = computed(
  () => store.accountStore.getAccountLogin.logged_in
);
const randomColor = ref(returnRandomHexColor());
</script>
