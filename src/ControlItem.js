var React = require('react')
var cx = require('classnames')

class ControlItem extends React.Component {
    render() {
		var classes = ['control-item'];
		if (this.props.active) classes.push('active');
		classes = classes.concat(this.props.className);

		return (
			<a {...this.props} className={cx.apply(null, classes)}>{this.props.children}</a>
		);
	}
}

module.exports = ControlItem;
