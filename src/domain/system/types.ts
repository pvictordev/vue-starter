export type ToastMessageType = "ERROR" | "SUCCESS" | "WARNING" | "INFO";

export interface ToastMessage {
  payload: string;
  type: ToastMessageType;
}

export interface SystemState {
  [x: string]: any;
  loading: boolean;
  toastMessage?: ToastMessage;
}
