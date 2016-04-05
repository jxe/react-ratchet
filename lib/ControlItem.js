'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var ControlItem = (function (_React$Component) {
	_inherits(ControlItem, _React$Component);

	function ControlItem() {
		_classCallCheck(this, ControlItem);

		_get(Object.getPrototypeOf(ControlItem.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ControlItem, [{
		key: 'render',
		value: function render() {
			var classes = ['control-item'];
			if (this.props.active) classes.push('active');
			classes = classes.concat(this.props.className);

			return React.createElement(
				'a',
				_extends({}, this.props, { className: cx.apply(null, classes) }),
				this.props.children
			);
		}
	}]);

	return ControlItem;
})(React.Component);

module.exports = ControlItem;