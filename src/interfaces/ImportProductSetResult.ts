import { ImportProductSetReferenceImage } from './ImportProductSetReferenceImage';
import { ImportProductSetResultStatus } from './ImportProductSetResultStatus';

export interface ImportProductSetResult {
  referenceImages: ImportProductSetReferenceImage[];
  statuses: ImportProductSetResultStatus[];
}
