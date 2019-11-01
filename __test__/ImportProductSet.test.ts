import ImportProductSet from '../src';

describe('ImportProductSet', () => {
  describe('constructor', () => {
    test('options are correctly set', () => {
      const subject = new ImportProductSet({
        projectId: 'Foo',
        location: 'Bar',
        csvUri: 'Baz',
      })
      console.log(subject["options"].logger)
      expect(subject["options"].projectId === 'Foo')
    })
  })
})
