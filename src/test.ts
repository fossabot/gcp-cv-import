import ImportStuff from './index';

const thing = new ImportStuff({
  projectId: 'Foo',
  location: 'Bar',
  csvUri: 'gs://foobar/test/csv'
});

thing.import();
