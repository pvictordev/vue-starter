import { defineStore } from "pinia";
import { useAccountStore } from "@/domain/account/store/account";
import { useSystemStore } from "@/domain/system/store/system";

export const useRootStore = defineStore("store", () => {
  const accountStore = useAccountStore();
  const systemStore = useSystemStore();

  return {
    accountStore,
    systemStore,
  };
});
