export interface ImportProductSetOperation {
  name: string;
  metadata: {
    '@type': string;
    [key: string]: string;
  };
  done: boolean;
}
