var React = require('react');
var cx = require('classnames');

class SegmentedControl extends React.Component {
    render() {
		return (
			<div className={cx('segmented-control', this.props.className)}>
				{this.props.children}
			</div>
		);
	}
}

module.exports = SegmentedControl;
