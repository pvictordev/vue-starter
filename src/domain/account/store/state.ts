import type { AccountState } from "../types";

export const state = (): AccountState => ({
  accountGenericData: {
    logged_in: false,
    is_admin: false,
    user_name: "",
  },
});
