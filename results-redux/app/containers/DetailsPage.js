import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDetailsAction } from '../actions/actions';
import { ResultWrapper, ResultImages, Image, ResultDetails, ResultInfo, ResultsTitleWrapper, ResultDetailsInfo } from '../components/PageItem.styles';
import Loading from '../components/Loading';

/**
 * @class
 * @classdesc Application Details component
 */
class DetailsPage extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * @description Lifecycle method responsible for receiving details from the server by
	 * dispatching *getDetailsAction* immediately after initial rendering.
	 */
	componentDidMount() {
		this.props.dispatch(getDetailsAction(this.props.match.params.id));
	}

	render() {
		const { selectedJoke } = this.props;

		return (
			<div>
				{selectedJoke ? <div>
					<ResultWrapper className={'result-wrapper'}>
						<ResultImages>
							<Image src={selectedJoke.icon_url} />
						</ResultImages>

						<ResultDetails>
							<ResultDetailsInfo>
								<h4>{selectedJoke.value}</h4>
								<h5>URL: <a href={selectedJoke.url} target="_blank">{selectedJoke.url}</a></h5>
							</ResultDetailsInfo>
						</ResultDetails>
					</ResultWrapper>
				</div> : <Loading />}
			</div>
		);
	}
}

// Define PropTypes
DetailsPage.propTypes = {
	jokes: PropTypes.array,
	selectedJoke: PropTypes.object,
	dispatch: PropTypes.func.isRequired,
};

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ jokes }) => ({
	selectedJoke: jokes.selectedJoke,
}
);

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(DetailsPage);
