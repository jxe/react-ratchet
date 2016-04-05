'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var Badge = (function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    _get(Object.getPrototypeOf(Badge.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      var extraClasses = [];
      if (this.props.inverted) extraClasses.push('badge-inverted');
      if (this.props.rStyle) extraClasses.push('badge-' + this.props.rStyle);
      var className = cx.apply(null, [this.props.className, "badge"].concat(extraClasses));

      return React.createElement('span', _extends({}, this.props, {
        className: className
      }));
    }
  }]);

  return Badge;
})(React.Component);

module.exports = Badge;