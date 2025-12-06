import { useRootStore } from "@/stores/store";
import { useToast } from "primevue";
import type { SystemState } from "../types";

const createMessagingSubscriber = () => {
  const toast = useToast();

  useRootStore().systemStore.$subscribe((mutation, state: SystemState) => {
    if (state.toastMessage) {
      const { type, payload } = state.toastMessage;

      switch (type) {
        case "ERROR":
          toast.add({
            severity: "error",
            summary: "Error",
            detail: payload,
            life: 5000,
          });
          break;

        case "SUCCESS":
          toast.add({
            severity: "success",
            summary: "Success",
            detail: payload,
            life: 5000,
          });
          break;

        case "WARNING":
          toast.add({
            severity: "warn",
            summary: "Warning",
            detail: payload,
            life: 5000,
          });
          break;

        case "INFO":
          toast.add({
            severity: "info",
            summary: "Info",
            detail: payload,
            life: 5000,
          });
          break;
      }
    }
  });
};

export { createMessagingSubscriber };
