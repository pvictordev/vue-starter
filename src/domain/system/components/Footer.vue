<template>
  <footer
    class="flex justify-center items-center py-3 pl-3 text-white"
    :style="{ backgroundColor: randomColor }"
  >
    <span>{{ $t("system.footer.copyright", { year: currentYear }) }}</span>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { returnRandomHexColor } from "@/domain/system/helper";

const currentYear = ref(new Date().getFullYear());
const randomColor = ref(returnRandomHexColor());
</script>
