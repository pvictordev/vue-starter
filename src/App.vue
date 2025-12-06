<template>
  <Toast />
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { createMessagingSubscriber } from "@/domain/system/store/subscribers";
import Header from "@/domain/system/components/Header.vue";
import Footer from "@/domain/system/components/Footer.vue";

onMounted(async () => {
  createMessagingSubscriber();
});
</script>
