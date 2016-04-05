'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');
var Icon = require('./Icon');

var NavButton = (function (_React$Component) {
  _inherits(NavButton, _React$Component);

  function NavButton() {
    _classCallCheck(this, NavButton);

    _get(Object.getPrototypeOf(NavButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(NavButton, [{
    key: 'render',
    value: function render() {
      var side = this.props.right ? 'right' : 'left';
      var classes = cx(this.props.className, 'btn-nav btn-link btn pull-' + side);
      var iconClass = this.props.icon ? this.props.icon : side + "-nav";
      var icon = React.createElement(Icon, { type: iconClass });

      var Component = this.props.href ? 'a' : 'button';

      if (side == 'left') {
        return React.createElement(
          Component,
          _extends({}, this.props, { className: classes }),
          icon,
          this.props.children
        );
      } else {
        // right
        return React.createElement(
          Component,
          _extends({}, this.props, { className: classes }),
          this.props.children,
          icon
        );
      }
    }
  }]);

  return NavButton;
})(React.Component);

module.exports = NavButton;