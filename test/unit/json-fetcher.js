import jsonFetcher from '../../src/json-fetcher';

describe('jsonFetcher', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(jsonFetcher, 'greet');
      jsonFetcher.greet();
    });

    it('should have been run once', () => {
      expect(jsonFetcher.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(jsonFetcher.greet).to.have.always.returned('hello');
    });
  });
});
