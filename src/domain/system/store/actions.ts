import type { SystemState, ToastMessageType } from "../types";

export const actions = {
  setLoading(this: SystemState, isLoading: boolean): void {
    this.loading = isLoading;
  },

  addToastMessage(
    this: SystemState,
    type: ToastMessageType,
    payload: string
  ): void {
    this.$patch({
      toastMessage: {
        payload: payload,
        type: type,
      },
    });
  },
};
