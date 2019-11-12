export interface ImportProductSetOptions {
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
