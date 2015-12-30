var zenify = require('./index');
var assert =  require('assert');

function test () {
  assert(false, 'Fail');
  return 'test';
}

var zenTest = zenify(test);

assert.equal(typeof zenTest(), 'undefined', 'Fails');
