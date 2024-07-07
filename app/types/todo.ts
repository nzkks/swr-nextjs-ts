export type Todo =
  | {
      id: string;
      title: string;
      description: string;
      checked: boolean;
    }
  | undefined;
