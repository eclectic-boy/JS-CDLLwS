"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = x[Symbol.iterator](true)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var y = _step2.value;

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

  it("is an iterable and can return the values within the Node instances", function () {
    var x = new CDLLwS();
    var tot = 100;
    for (var i = 0; i < tot; i++) {
      var val = Math.random();
      x.append(val);
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = x[Symbol.iterator](false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var y = _step3.value;

        expect(y instanceof CDLLwS.Node).not.toBe(true);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = x[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var y = _step4.value;

        expect(y instanceof CDLLwS.Node).not.toBe(true);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
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

  it("gets values", function () {
    var x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}];
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = l[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var v = _step5.value;

        x.append(v);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = enumerate(l)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _step6$value = _slicedToArray(_step6.value, 2);

        var i = _step6$value[0];
        var v = _step6$value[1];

        expect(x.get(i) instanceof CDLLwS.Node).not.toBe(true);
        expect(x.get(i)).toEqual(v);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

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

  it("gets values as Node instances", function () {
    var x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}];
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = l[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var v = _step7.value;

        x.append(v);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = enumerate(l)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _step8$value = _slicedToArray(_step8.value, 2);

        var i = _step8$value[0];
        var v = _step8$value[1];

        expect(x.get(i, true) instanceof CDLLwS.Node).toBe(true);
        expect(x.get(i, true).data).toEqual(v);
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

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

  it("inserts values", function () {
    var x = new CDLLwS();

    for (var i = 0; i < 100; i++) {
      var index = Math.floor(Math.random() * x.length);
      var _value = Math.random();
      x.insert(index, _value);
      expect(_value).toEqual(x.get(index));
    }

    //to insert in position -1 means to insert before the last item i.e. in position [-2]==[x.length-2]
    var value = Math.random();
    x.insert(-1, value);
    expect(value).toEqual(x.get(x.length - 2));
  });
});
//# sourceMappingURL=mainSpec.js.map
