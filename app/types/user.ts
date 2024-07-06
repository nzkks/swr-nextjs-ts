// usage of 'type' instead of 'interface' allows specifying 'undefined' in 'OR' condition
export type User =
  | {
      userName: string;
    }
  | undefined;
