// system.ts
import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";
import type { SystemState } from "../types";

export const useSystemStore = defineStore<
  "system",
  SystemState,
  typeof getters,
  typeof actions
>("system", {
  state,
  getters,
  actions,
});
