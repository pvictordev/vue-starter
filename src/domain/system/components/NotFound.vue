<template>
  <div
    class="flex flex-column align-items-center justify-content-center min-h-screen text-center"
  >
    <div class="text-5xl font-bold">{{ $t("system.notFound.title") }}</div>
    <div class="text-2xl mt-2">{{ $t("system.notFound.subtitle") }}</div>
    <p class="mt-2">{{ $t("system.notFound.message") }}</p>
    <Button
      :label="$t('system.notFound.goHomeButton')"
      class="mt-4"
      @click="goHome"
    ></Button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
