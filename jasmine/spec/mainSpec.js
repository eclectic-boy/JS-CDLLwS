"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe("enumerate", function () {
  it("properly enumerates", function () {
    var l = [];
    for (var i = 0; i < 100; i++) {
      l.push(Math.random());
    }
    var j = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = enumerate(l)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var i = _step$value[0];
        var x = _step$value[1];

        expect(i).toEqual(j);
        expect(x).toEqual(l[i]);
        j++;
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
  });
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
    var x = new CDLLwS();

    expect(x[Symbol.iterator]).not.toBe(undefined);
    expect(function () {
      var x = new CDLLwS();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = x[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;
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
    }).not.toThrow();
  });

  it("appends values and stores length", function () {
    var x = new CDLLwS();
    expect(x.length).toEqual(0);

    var tot = 100;
    for (var i = 0; i < tot; i++) {
      var value = Math.random();
      x.append(value);
      expect(x.get(-1)).toEqual(value);
      expect(x.length).toEqual(i + 1);
    }

    expect(x.length).toEqual(tot);
  });

  it("inserts values and stores length", function () {
    var x = new CDLLwS();
    expect(x.length).toEqual(0);

    var tot = 100;

    for (var i = 0; i < tot; i++) {
      var index = Math.floor(Math.random() * x.length);
      var _value = Math.random();
      x.insert(index, _value);
      expect(_value).toEqual(x.get(index));
      expect(x.length).toEqual(i + 1);
    }

    //to insert in position -1 means to insert before the last item i.e. in position [-2]==[x.length-2]
    var value = Math.random();
    x.insert(-1, value);
    expect(value).toEqual(x.get(x.length - 2));

    expect(x.length).toEqual(tot + 1);
  });

  it("is an iterable and can return Node instances", function () {
    var x = new CDLLwS();
    var tot = 100;
    for (var i = 0; i < tot; i++) {
      x.append(Math.random());
    }
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = x[Symbol.iterator](true)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var y = _step3.value;

        expect(y instanceof CDLLwS.Node).toBe(true);
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
  });

  it("is an iterable and can return the values within the Node instances", function () {
    var x = new CDLLwS();
    var tot = 100;
    for (var i = 0; i < tot; i++) {
      x.append(Math.random());
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = x[Symbol.iterator](false)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = x[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var y = _step5.value;

        expect(y instanceof CDLLwS.Node).not.toBe(true);
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
  });

  it("gets values", function () {
    var x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}, function () {}];
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = l[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var v = _step6.value;

        x.append(v);
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

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = enumerate(l)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _step7$value = _slicedToArray(_step7.value, 2);

        var i = _step7$value[0];
        var v = _step7$value[1];

        expect(x.get(i) instanceof CDLLwS.Node).not.toBe(true);
        expect(x.get(i)).toEqual(v);
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
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = l[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var v = _step8.value;

        x.append(v);
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

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = enumerate(l)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var _step9$value = _slicedToArray(_step9.value, 2);

        var i = _step9$value[0];
        var v = _step9$value[1];

        expect(x.get(i, true) instanceof CDLLwS.Node).toBe(true);
        expect(x.get(i, true).data).toEqual(v);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
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

  it("correctly outputs a string as a normal list", function () {
    var x = new CDLLwS();
    var l = [];
    for (var i = 0; i < 100; i++) {
      var value = Math.random();
      x.append(value);
      l.push(value);
    }
    expect(x.toString()).toEqual(l.toString());
  });

  it("has its valueOf method which outputs a normal list", function () {
    var x = new CDLLwS();
    var l = [];
    for (var i = 0; i < 100; i++) {
      var value = Math.random();
      x.append(value);
      l.push(value);
    }
    expect(x.valueOf()).toEqual(l);
  });
});
//# sourceMappingURL=mainSpec.js.map
