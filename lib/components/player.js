'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _babelStandalone = require('babel-standalone');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkSpace = function (_Component) {
  _inherits(WorkSpace, _Component);

  function WorkSpace() {
    _classCallCheck(this, WorkSpace);

    return _possibleConstructorReturn(this, (WorkSpace.__proto__ || Object.getPrototypeOf(WorkSpace)).apply(this, arguments));
  }

  _createClass(WorkSpace, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.renderPlayer();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.require = this.require;

      this.renderPlayer();
    }
  }, {
    key: 'renderPlayer',
    value: function renderPlayer() {
      try {
        var code = (0, _babelStandalone.transform)(this.props.value, { presets: ['es2015', 'react'] }).code;
        _reactDom2.default.render(new Function(code).call(null, _react2.default), this.player);
      } catch (e) {}
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderPlayer();
    }
  }, {
    key: 'require',
    value: function require(name) {
      if (name === 'react') {
        return _react2.default;
      }
      if (name === 'react-dom') {
        return _reactDom2.default;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'player', id: 'player', ref: function ref(_ref) {
          return _this2.player = _ref;
        } });
    }
  }]);

  return WorkSpace;
}(_react.Component);

exports.default = WorkSpace;