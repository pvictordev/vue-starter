import type { App } from "vue";
import HTTPProvider from "./HTTPProvider";
import UILibraryProvider from "./UILibraryProvider";
import MessageProvider from "./MessageProvider";
import LocalizationProvider from "./LocalizationProvider";

class ServiceProviders {
  app: App;
  constructor(app: App) {
    this.app = app;
  }

  provide(
    provider:
      | HTTPProvider
      | UILibraryProvider
      | MessageProvider
      | LocalizationProvider
  ) {
    provider.provide(this.app);
    return this;
  }
}

const serviceProviders = (app: App) => {
  return new ServiceProviders(app);
};

export {
  serviceProviders,
  ServiceProviders,
  HTTPProvider,
  UILibraryProvider,
  MessageProvider,
  LocalizationProvider,
};
