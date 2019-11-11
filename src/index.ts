import vision from '@google-cloud/vision';

interface ImportProductSetOptions {
  /**
   * The id of the Google Cloud project - [Docs](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
   */
  projectId: string;
  /**
   * The GCP location you would like to use, e.g. europe-west1
   */
  location: string;
  /**
   * The GCP storage URL of the csv file - e.g. gs://your-storage-bucket/name-of-the-csv-file.csv
   */
  csvUri: string;
  /**
   * Defaults to `console`. Pass any logger into here as long as it has `.info` as a method
   */
  logger?: any;
}

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

  async import(): Promise<void> {
    const { projectId, location, csvUri, logger } = this.options;
    const client = this.client;
    const parentLocation = await client.locationPath(projectId, location);
    const [response, operation] = await client.importProductSets({
      parent: parentLocation,
      inputConfig: {
        gcsSource: {
          csvFileUri: csvUri
        }
      }
    });
    logger.info(`Processing operation name ${operation.name}`);
    const [result] = await response.promise();
    logger.info('Processing complete');
    logger.info('Processing results:');

    for (const i in result.statuses) {
      const status = result.statuses[i];
      logger.info('Status of processing ', i, 'of the csv:', status);

      if (status.code === 0) {
        logger.info(result.referenceImages[i]);
      } else {
        logger.info('No reference image.');
      }
    }
  }
}
