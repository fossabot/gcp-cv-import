# gcp-cv-import

## Description

Package to [bulk import your GCP Cloud vision product set]([https://cloud.google.com/vision/product-search/docs/create-product-set#using_bulk_import_to_create_a_product_set_with_products](https://cloud.google.com/vision/product-search/docs/create-product-set#using_bulk_import_to_create_a_product_set_with_products).

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=matt-riley/gcp-cv-import)](https://dependabot.com) [![npm](https://img.shields.io/npm/dm/@matt-riley/gcp-cv-import?style=plastic)](https://www.npmjs.com/package/@matt-riley/gcp-cv-import)

## Usage

Install locally using `npm`

```bash
npm i -s @matt-riley/gcp-cv-import
```

Then within your code:

```typescript
import ImportProductSet from '@matt-riley/gcp-cv-import';

const importPrdSet = new ImportProductSet({
  projectId: 'some-gcp-project',
  location: 'europe-west1',
  csvUri: 'gs://some-bucket/a-csv-file.csv'
});

const importResults = importPrdSet.import();
```

There is an optional argument that can be passed into `new ImportProductSet` which is, `logger`.

By default `logger` will use the standard `console` to log the results, however if you use something like [winston]([https://www.npmjs.com/package/winston](https://www.npmjs.com/package/winston) or a custom logger, you can pass that in. The only stipulation is that it has to have a `.info` method.

## ToDo

- Handle errors better, the current approach just uses the errors provided from [@google-cloud/vision]([https://www.npmjs.com/package/@google-cloud/vision](https://www.npmjs.com/package/@google-cloud/vision) - which aren't always _that_ descriptive.

- More tests & better mocking.

- Improve the docs
