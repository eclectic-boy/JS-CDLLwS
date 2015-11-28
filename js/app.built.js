"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = [enumerate].map(regeneratorRuntime.mark);

function enumerate(iterable) {
  var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

  return regeneratorRuntime.wrap(function enumerate$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        i = 0;
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        _context.prev = 4;
        _iterator = iterable[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          _context.next = 14;
          break;
        }

        x = _step.value;
        _context.next = 10;
        return [i, x];

      case 10:
        i++;

      case 11:
        _iteratorNormalCompletion = true;
        _context.next = 6;
        break;

      case 14:
        _context.next = 20;
        break;

      case 16:
        _context.prev = 16;
        _context.t0 = _context["catch"](4);
        _didIteratorError = true;
        _iteratorError = _context.t0;

      case 20:
        _context.prev = 20;
        _context.prev = 21;

        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }

      case 23:
        _context.prev = 23;

        if (!_didIteratorError) {
          _context.next = 26;
          break;
        }

        throw _iteratorError;

      case 26:
        return _context.finish(23);

      case 27:
        return _context.finish(20);

      case 28:
      case "end":
        return _context.stop();
    }
  }, _marked[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}

var CDLLwS = (function () {
  function CDLLwS() {
    _classCallCheck(this, CDLLwS);

    this.sentinel = new CDLLwS.Node(null);
    this.sentinel.next = this.sentinel.prev = this.sentinel;

    this.length = 0;
  }

  _createClass(CDLLwS, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value(getNode) {
      var x;
      return regeneratorRuntime.wrap(function value$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              x = this.sentinel.next;

            case 1:
              if (!(x != this.sentinel)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return getNode ? x : x.data;

            case 4:
              x = x.next;
              _context2.next = 1;
              break;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: "get",
    value: function get(i, getNode) {
      var out = undefined;

      if (i < -1 || this.length <= i) {
        throw new Error("index not valid");
      } else if (i == 0) {
        out = this.sentinel.next;
      } else if (i == -1) {
        if (this.length > 0) {
          out = this.sentinel.prev;
        } else {
          throw new Error("index not valid");
        }
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = enumerate(this[Symbol.iterator](true))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2);

            var j = _step2$value[0];
            var x = _step2$value[1];

            if (j == i) {
              out = x;
              break;
            }
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
      }

      return getNode ? out : out.data;
    }
  }, {
    key: "_insert_data",
    value: function _insert_data(data, nextNode) {
      var node = new CDLLwS.Node(data);
      node.prev = nextNode.prev;
      node.next = nextNode;
      node.prev.next = node;
      node.next.prev = node;

      this.length++;
    }
  }, {
    key: "insert",
    value: function insert(i, data) {
      this._insert_data(data, this.length > 0 ? this.get(i, true) : this.sentinel);
    }
  }, {
    key: "append",
    value: function append(data) {
      this._insert_data(data, this.sentinel);
    }
  }, {
    key: "pop",
    value: function pop(i) {
      i = i !== undefined ? i : -1;
      var x = this.get(i, true);

      x.prev.next = x.next;
      x.next.prev = x.prev;

      this.length -= 1;
      return x.data;
    }
  }, {
    key: "index",
    value: function index(data) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = enumerate(this)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2);

          var i = _step3$value[0];
          var x = _step3$value[1];

          if (x === data) {
            return i;
            break;
          }
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

      throw new Error("'" + data + "' is not in list");
    }
  }, {
    key: "reverse",
    value: function reverse() {
      var x = this.sentinel.next;
      while (x != this.sentinel) {
        var _ref = [x.prev, x.next];
        x.next = _ref[0];
        x.prev = _ref[1];

        x = x.prev;
      }
      var _ref2 = [this.sentinel.prev, this.sentinel.next];
      this.sentinel.next = _ref2[0];
      this.sentinel.prev = _ref2[1];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var l = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var x = _step4.value;

          l.push(x);
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

      return l;
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.valueOf());
    }
  }]);

  return CDLLwS;
})();

CDLLwS.Node = (function () {
  function _class(data) {
    _classCallCheck(this, _class);

    this.data = data;
    this.prev = null;
    this.next = null;
  }

  _createClass(_class, [{
    key: "valueOf",
    value: function valueOf() {
      return this.data;
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.valueOf());
    }
  }]);

  return _class;
})();
//# sourceMappingURL=app.built.js.map
