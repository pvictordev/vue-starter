import type { AccountState } from "../types";
import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

export const useAccountStore = defineStore<
  "account",
  AccountState,
  typeof getters,
  typeof actions
>("account", {
  state,
  getters,
  actions,
});
