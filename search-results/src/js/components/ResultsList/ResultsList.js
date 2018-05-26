import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultBox from '../ResultBox/ResultBox';

/**
 * @class
 * @classdesc ResultsList component
 * @param {Array} items - collection of results from the search that needs to be shown
 */
class ResultsList extends Component {
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

export default ResultsList;
