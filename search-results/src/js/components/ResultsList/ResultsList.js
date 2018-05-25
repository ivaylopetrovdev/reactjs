import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultBox from '../ResultBox/ResultBox';

export default class ResultsList extends Component {
	render() {
		const { items } = this.props;

		return (
			items.map((item, i) => <ResultBox key={item.id} item={item} />)
		);
	}
}

ResultsList.propTypes = {
	items: PropTypes.array.isRequired,
};
