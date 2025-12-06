<template>
  <div class="dashboard">
    <div class="h-screen flex align-items-center justify-content-center">
      <div class="text-center p-4 shadow-7 border-round w-24rem">
        <h2 class="text-center mb-4">
          {{ t("dashboard.welcome", { name: userName }) }}
        </h2>
        {{ formattedDate }}
        <p>{{ t("dashboard.doorOpen") }}</p>
        <LoadingAnimation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRootStore } from "@/stores/store";
import { returnFormattedDate } from "@/domain/account/helper";
import LoadingAnimation from "@/domain/system/components/LoadingAnimation.vue";

const store = useRootStore();
const { t } = useI18n();

const userName = computed(() => store.accountStore.getAccountLogin.user_name);
const formattedDate = computed(() => returnFormattedDate(new Date()));
</script>
