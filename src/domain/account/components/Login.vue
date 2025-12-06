<template>
  <div class="login">
    <form
      @submit.prevent="onSubmit(!v$.$invalid)"
      class="h-screen flex align-items-center justify-content-center"
    >
      <div class="p-4 shadow-7 border-round w-24rem">
        <h2 class="text-center mb-4">{{ $t("auth.login.title") }}</h2>

        <!-- Email Field -->
        <div class="flex flex-column gap-2 mb-3">
          <label for="email" class="font-medium">{{
            $t("auth.login.email")
          }}</label>
          <InputText
            id="email"
            :placeholder="$t('auth.login.emailPlaceholder')"
            name="email"
            v-model="v$.email.$model"
            class="w-full"
          />
          <small v-if="v$.email.required.$invalid && submitted" class="p-error">
            {{ $t("auth.login.emailRequired") }}
          </small>
        </div>

        <!-- Password Field -->
        <div class="flex flex-column gap-2 mb-3">
          <label for="password" class="font-medium">{{
            $t("auth.login.password")
          }}</label>
          <InputText
            id="password"
            type="password"
            :placeholder="$t('auth.login.passwordPlaceholder')"
            name="password"
            v-model="v$.password.$model"
            class="w-full"
          />
          <small
            v-if="v$.password.required.$invalid && submitted"
            class="p-error"
          >
            {{ $t("auth.login.passwordRequired") }}
          </small>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-content-center mt-2">
          <Button
            type="submit"
            :label="$t('auth.login.loginButton')"
            :disabled="isLoading"
            class="w-full"
          />
        </div>

        <div class="mt-2 text-sm">
          <RouterLink to="/forgot-password">{{
            $t("auth.login.forgotPasswordLink")
          }}</RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/stores/store";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useRootStore();
const router = useRouter();
const isLoading = computed(() => store.systemStore.getLoading);

const submitted = ref(false);

const formFields = ref({
  email: "admin@mail.com",
  password: "1234",
});
const formRules = {
  email: {
    required: helpers.withMessage(t("auth.login.emailRequired"), required),
    email,
  },
  password: {
    required: helpers.withMessage(t("auth.login.passwordRequired"), required),
  },
};

const v$ = useVuelidate(formRules, formFields);
const onSubmit = async (isFormValid: boolean) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }

  if (
    formFields.value.email === "admin@mail.com" &&
    formFields.value.password === "1234"
  ) {
    await store.accountStore.accountLogin();
    router.push("/dashboard");
  } else {
    alert(t("auth.login.invalidCredentials"));
  }
};
</script>
