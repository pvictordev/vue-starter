import type { AccountGenericData, AccountState } from "../types";

export const getters = {
  getAccountLogin: (state: AccountState): AccountGenericData => {
    return state.accountGenericData;
  },
};
