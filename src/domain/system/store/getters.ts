import type { SystemState } from "../types";

export const getters = {
  getLoading: (state: SystemState): boolean => {
    return state.loading;
  },
};
