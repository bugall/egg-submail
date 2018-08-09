'use strict';

const mock = require('egg-mock');

describe('test/submail.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/submail-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, submail')
      .expect(200);
  });
});
