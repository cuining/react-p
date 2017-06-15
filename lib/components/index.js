'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _editor = require('./editor');

var _editor2 = _interopRequireDefault(_editor);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _defaultCode = require('../constants/defaultCode');

var _defaultCode2 = _interopRequireDefault(_defaultCode);

require('../styles/base.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkSpace = function (_Component) {
  _inherits(WorkSpace, _Component);

  function WorkSpace(props) {
    _classCallCheck(this, WorkSpace);

    var _this = _possibleConstructorReturn(this, (WorkSpace.__proto__ || Object.getPrototypeOf(WorkSpace)).call(this, props));

    _this.state = {
      code: _defaultCode2.default
    };
    _this.handleCodeChange = _this.handleCodeChange.bind(_this);
    return _this;
  }

  _createClass(WorkSpace, [{
    key: 'handleCodeChange',
    value: function handleCodeChange(code) {
      this.setState({ code: code });
    }
  }, {
    key: 'render',
    value: function render() {
      var code = this.state.code;

      return _react2.default.createElement(
        'main',
        { className: 'reactp' },
        _react2.default.createElement(_editor2.default, { value: code, onChange: this.handleCodeChange }),
        _react2.default.createElement(_player2.default, { value: code })
      );
    }
  }]);

  return WorkSpace;
}(_react.Component);

exports.default = WorkSpace;