import ImportProductSet from '../src';

describe('ImportProductSet', () => {
  describe('constructor', () => {
    test('options are correctly set without a logger', () => {
      const subject = new ImportProductSet({
        projectId: 'Foo',
        location: 'Bar',
        csvUri: 'Baz'
      });
      expect(subject['options'].projectId).toEqual('Foo');
      expect(subject['options'].location).toEqual('Bar');
      expect(subject['options'].csvUri).toEqual('Baz');
      expect(subject['options'].logger).toEqual(console);
    });
    test('options are correctly set with a custom logger', () => {
      const customLogger = {
        info: console.info
      };
      const subject = new ImportProductSet({
        projectId: 'Foo',
        location: 'Bar',
        csvUri: 'Baz',
        logger: customLogger
      });
      expect(subject['options'].projectId).toEqual('Foo');
      expect(subject['options'].location).toEqual('Bar');
      expect(subject['options'].csvUri).toEqual('Baz');
      expect(subject['options'].logger).toEqual(customLogger);
    });
  });
  describe('import', () => {
    let subject: ImportProductSet;
    beforeEach(() => {
      subject = new ImportProductSet({
        projectId: 'Foo',
        location: 'Bar',
        csvUri: 'Baz'
      });

      subject.import();
    });
    test('function to have called cloud visions locationPath', () => {
      expect(subject['client'].locationPath).toHaveBeenCalledWith({
        projectId: 'Foo',
        location: 'Bar'
      });
      expect(subject['client'].locationPath).toHaveReturned();
    });
    test('function to have called cloud visions importProductSets', () => {
      expect(subject['client'].importProductSets).toHaveBeenCalledWith({
        inputConfig: {
          gcsSource: {
            csvFileUri: 'Baz'
          }
        }
      });
      expect(subject['client'].importProductSets).toHaveReturned();
    });
  });
});
