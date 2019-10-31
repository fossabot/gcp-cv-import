import vision from '@google-cloud/vision';

interface ImportProductSetOptions {
  projectId: string;
  location: string;
  csvUri: string;
  logger?: any;
}

interface ImportProductSetOperation {
  name: string;
}

class ImportProductSet {
  private client = new vision.ProductSearchClient();
  private options: ImportProductSetOptions;
  constructor(options: ImportProductSetOptions) {
    if (options.logger === undefined) {
      options.logger = console;
    }
    this.options = options;
  }

  async import(): Promise<void> {
    const { projectId, location, csvUri, logger } = this.options;
    const [response, operation]: [
      any,
      ImportProductSetOperation
    ] = await this.client.importProductSets({
      parent: this.client.location({ projectId, location }),
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

export default ImportProductSet;