"use strict";

xdescribe("enumerate", function () {
  it("properly enumerates", function () {});
});

describe("CDLLwS.Node class", function () {
  it("can be instantiated", function () {
    expect(function () {
      new CDLLwS.Node();
    }).not.toThrow();
  });
});

describe("CDLLwS.Node instance", function () {
  it("can be printed", function () {
    var n = new CDLLwS.Node("qwerty");
    expect(String(n)).toEqual("qwerty");

    n.data = "";
    expect(String(n)).toEqual("");

    n.data = 123;
    expect(String(n)).toEqual("123");

    n.data = null;
    expect(String(n)).toEqual(String(null));
  });
});

describe("CDLLwS class", function () {
  it("can be instantiated", function () {
    expect(function () {
      new CDLLwS();
    }).not.toThrow();
  });

  it("has a sentinel node", function () {
    var x = new CDLLwS();
    expect(x.sentinel instanceof CDLLwS.Node).toBe(true);
  });
});

describe("CDLLwS instance", function () {

  it("is an iterable", function () {
    expect(function () {
      var x = new CDLLwS();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }).not.toThrow();
  });

  it("is an iterable and can return Node instances", function () {
    var x = new CDLLwS();
    var tot = 100;
    for (var i = 0; i < tot; i++) {
      var val = Math.random();
      x.append(val);
    }
    //console.log(x, Symbol.iterator, x[Symbol.iterator]);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = x[Symbol.iterator](true)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var y = _step2.value;

        console.log("--->", y);
        expect(y instanceof CDLLwS.Node).toBe(true);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });

  it("stores its length", function () {
    var x = new CDLLwS();
    expect(x.length).toEqual(0);

    var tot = 100;
    for (var i = 0; i < tot; i++) {
      var val = Math.random();
      x.append(val);
    }
    expect(x.length).toEqual(tot);
  });

  it("appends values -> correct length", function () {
    var x = new CDLLwS();
    var tot = 100;

    expect(function () {
      for (var i = 0; i < tot; i++) {
        var val = Math.random();
        x.append(val);
      }
    }).not.toThrow();

    expect(x.length).toEqual(tot);
  });

  xit("gets values", function () {
    var x = new CDLLwS();
    x.append(1);
    x.append("a");
    x.append(null);
    x.append(undefined);
    x.append("z");

    expect(x.get(0)).toEqual(1);
    expect(x.get(1)).toEqual("a");
    expect(x.get(2)).toEqual(null);
    expect(x.get(3)).toEqual(undefined);
    expect(x.get(4)).toEqual("z");
    expect(x.get(-1)).toEqual("z");
    expect(function () {
      x.get(-2);
    }).toThrow();
    expect(function () {
      x.get(x.length);
    }).toThrow();
    expect(function () {
      x.get(x.length + 1);
    }).toThrow();
  });

  xit("inserts values", function () {
    var x = new CDLLwS();
    var tot = 100;
    for (var i = 0; i < tot; i++) {
      x.append(true);
    }

    console.log("22222222222222");
    for (var i = 0; i < 10; i++) {
      var index = Math.floor(Math.random() * x.length) - 1;
      var value = Math.random() * 1000000;
      console.log("---------------");
      console.log(index, value);
      console.log("---");
      x.insert(index, value);
      expect(x.get(index)).toEqual(value);
    }
  });
});
//# sourceMappingURL=mainSpec.js.map
