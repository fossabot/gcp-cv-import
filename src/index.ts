import vision from '@google-cloud/vision';
import { ImportProductSetOptions } from './interfaces/ImportProductSetOptions';
import { google } from '@google-cloud/vision/build/protos/protos';
export default class ImportProductSet {
  /**
   * Creates a private client of vision.ProductSearchClient.
   */
  private client = new vision.ProductSearchClient();
  /**
   * The options passed in from the constructor
   */
  private options: ImportProductSetOptions;
  constructor(options: ImportProductSetOptions) {
    /**
     * Set the logger to `console` if one isn't passed in
     */
    options.logger = options.logger || console;
    this.options = options;
  }

  async import(): Promise<google.cloud.vision.v1.IImportProductSetsResponse> {
    const { projectId, location, csvUri, logger } = this.options;
    const client = this.client;
    const parentLocation = client.locationPath(projectId, location);
    const [response, operation] = await client.importProductSets({
      parent: parentLocation,
      inputConfig: {
        gcsSource: {
          csvFileUri: csvUri
        }
      }
    });
    logger.info(`Processing operation name ${operation?.name}`);
    const [result] = await response.promise();
    logger.info('Processing complete');
    logger.info('Processing results:');

    result.statuses?.forEach((status, idx: number) => {
      logger.info(`Status of processing line ${idx} of the csv.`);
      status.code === 0 && result.referenceImages
        ? logger.info(result.referenceImages[idx])
        : logger.info('No reference image.');
    });
    return result;
  }
}
