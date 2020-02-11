# gcp-cv-import

## Description

Package to [bulk import your GCP Cloud vision product set](https://cloud.google.com/vision/product-search/docs/create-product-set#using_bulk_import_to_create_a_product_set_with_products).

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ALLCAPSDEV/gcp-cv-import)](https://dependabot.com) [![npm](https://img.shields.io/npm/dm/@ALLCAPSDEV/gcp-cv-import?style=plastic)](https://www.npmjs.com/package/@ALLCAPSDEV/gcp-cv-import) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ALLCAPSDEV/gcp-cv-import.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ALLCAPSDEV/gcp-cv-import/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/e344678c9b5207782ca4/maintainability)](https://codeclimate.com/github/ALLCAPSDEV/gcp-cv-import/maintainability)

## Usage

Install locally using `npm`

```bash
npm i -s @ALLCAPSDEV/gcp-cv-import
```

Then within your code:

```typescript
import ImportProductSet from '@ALLCAPSDEV/gcp-cv-import';

const importPrdSet = new ImportProductSet({
  projectId: 'some-gcp-project',
  location: 'europe-west1',
  csvUri: 'gs://some-bucket/a-csv-file.csv'
});

const importResults = importPrdSet.import();
```

There is an optional argument that can be passed into `new ImportProductSet` which is, `logger`.

By default `logger` will use the standard `console` to log the results, however if you use something like [winston](https://www.npmjs.com/package/winston) or a custom logger, you can pass that in. The only stipulation is that it has to have a `.info` method.

## ToDo

- Handle errors better, the current approach just uses the errors provided from [@google-cloud/vision](https://www.npmjs.com/package/@google-cloud/vision) - which aren't always _that_ descriptive.

- More tests & better mocking.

- Improve the docs
