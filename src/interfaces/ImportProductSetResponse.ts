import { ImportProductSetResult } from './ImportProductSetResult';

export interface ImportProductSetResponse {
  promise(): Promise<[ImportProductSetResult]>;
}
