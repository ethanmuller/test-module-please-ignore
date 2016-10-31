describe('app', function() {
  var app = require('../index.js');

  it('says hello', function() {
    expect(app.myFunction()).toBe('hello, world!');
  });
});
