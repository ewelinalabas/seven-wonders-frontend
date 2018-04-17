export namespace SnackbarState {
  export type Entry = {
    id: number;
    message: string;
    isOpen?: boolean;
    timeoutId?: number;
  };

  export const INITIAL: Entry[] = [];
}

export type SnackbarState = {
  snackbars?: SnackbarState.Entry[];
};
