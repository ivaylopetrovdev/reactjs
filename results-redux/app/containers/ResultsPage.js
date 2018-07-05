import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectJokeAction, searchAction } from '../actions/actions';
import PageItem from '../components/PageItem';
import Loading from '../components/Loading';

/**
 * @class
 * @classdesc Application Results component
 */
class ResultsPage extends Component {
	constructor() {
		super();
		this.handleSelectJoke = this.handleSelectJoke.bind(this);
	}

	/**
	 * @description Lifecycle method responsible for receiving results from the server by
	 * dispatching *searchAction* immediately after initial rendering.
	 */
	componentDidMount() {
		this.props.dispatch(searchAction());
	}

	/**
	 * @description Method responsible for transition to details page and dispatching
	 * 'selectJokeAction' action when joke is clicked
	 * @param {Object} selectedJoke - selected joke details
	 */
	handleSelectJoke(selectedJoke) {
		this.props.dispatch(selectJokeAction(selectedJoke));
		this.props.history.push(`details/${selectedJoke.id}`);
	}

	render() {
		const { jokes } = this.props;

		return (
			<div>
				{jokes ? <div>
					<PageItem
						jokes={jokes}
						onHandleSelectJoke={this.handleSelectJoke}
					/>
				</div> : <Loading />}
			</div>
		);
	}
}

// Define PropTypes
ResultsPage.propTypes = {
	jokes: PropTypes.array,
	dispatch: PropTypes.func.isRequired,
};

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ jokes }) => ({
	jokes: jokes[0],
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(ResultsPage);
