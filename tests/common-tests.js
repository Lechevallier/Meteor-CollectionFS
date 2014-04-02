function equals(a, b) {
  return !!(EJSON.stringify(a) === EJSON.stringify(b));
}

Tinytest.add('cfs-base-package - test environment', function(test) {
  test.isTrue(typeof FS !== 'undefined', 'FS scope not declared');
  test.isTrue(typeof FS.Store !== 'undefined', 'FS scope "FS.Store" not declared');
  test.isTrue(typeof FS.AccessPoint !== 'undefined', 'FS scope "FS.AccessPoint" not declared');
  test.isTrue(typeof FS.Utility !== 'undefined', 'FS scope "FS.Utility" not declared');
  test.isTrue(typeof FS._collections !== 'undefined', 'FS scope "FS._collections" not declared');

  test.isTrue(typeof _Utility !== 'undefined', '_Utility test scope not declared');
});

Tinytest.add('cfs-base-package - _Utility.defaultZero', function(test) {
  test.equal(_Utility.defaultZero(), 0, 'Failes to return 0 when (undefined)');
  test.equal(_Utility.defaultZero(undefined), 0, 'Failes to return 0 when undefined');
  test.equal(_Utility.defaultZero(null), 0, 'Failes to return 0 when null');
  test.equal(_Utility.defaultZero(false), 0, 'Failes to return 0 when false');
  test.equal(_Utility.defaultZero(0), 0, 'Failes to return 0 when 0');
  test.equal(_Utility.defaultZero(-1), -1, 'Failes to return -1');
  test.equal(_Utility.defaultZero(1), 1, 'Failes to return 1');
  test.equal(_Utility.defaultZero(-0.1), -0.1, 'Failes to return -0.1');
  test.equal(_Utility.defaultZero(0.1), 0.1, 'Failes to return 0.1');
  test.equal(_Utility.defaultZero(''), 0, 'Failes to return ""');
  test.equal(_Utility.defaultZero({}), NaN, 'Failes to return NaN when object');
  test.equal(_Utility.defaultZero("dfdsfs"), NaN, 'Failes to return NaN when string');
  test.equal(_Utility.defaultZero("1"), 1, 'Failes to return 1 when string "1"');
});

Tinytest.add('cfs-base-package - FS.Utility.cloneFileRecord', function(test) {
  // Given an object with any props, should filter out 'collectionName',
  // 'collection', 'data', and 'createdByTransform'
  var result = FS.Utility.cloneFileRecord({a: 1, b: {c: 1}, d: [1, 2], collectionName: 'test', collection: {}, data: {}, createdByTransform: false});
  test.equal(result, {a: 1, b: {c: 1}, d: [1, 2]});
});

Tinytest.add('cfs-base-package - FS.Utility.defaultCallback', function(test) {
  test.isTrue(true);
  // TODO
});

Tinytest.add('cfs-base-package - FS.Utility.handleError', function(test) {
  test.isTrue(true);
  // TODO
});

Tinytest.add('cfs-base-package - FS.Utility.binaryToBuffer', function(test) {
  test.isTrue(true);
  // TODO
});

Tinytest.add('cfs-base-package - FS.Utility.bufferToBinary', function(test) {
  test.isTrue(true);
  // TODO
});

Tinytest.add('cfs-base-package - FS.Utility.connectionLogin', function(test) {
  test.isTrue(true);
  // TODO
});

/*
 * TODO Test utility methods
 */


//Test API:
//Tinytest.add('', function(test) {});
//Tinytest.addAsync('', function(test, onComplete) {});
//test.isFalse(v, msg)
//test.isTrue(v, msg)
//test.equalactual, expected, message, not
//test.length(obj, len)
//test.include(s, v)
//test.isNaN(v, msg)
//test.isUndefined(v, msg)
//test.isNotNull
//test.isNull
//test.throws(func)
//test.instanceOf(obj, klass)
//test.notEqual(actual, expected, message)
//test.runId()
//test.exception(exception)
//test.expect_fail()
//test.ok(doc)
//test.fail(doc)
//test.equal(a, b, msg)
