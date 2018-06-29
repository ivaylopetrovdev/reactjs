import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import { forceCheck } from 'react-lazyload';
import { sortByString } from '../../../utils/sorting';
import { PageContent, Header, DropdownTitle, Dropdown, LoadingWrapper } from './App.styles';

/**
 * @class
 * @classdesc Application main component
 */
class App extends Component {
	/**
	 * Create application.
	 * @param {Object} props - application props.
	 */
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			error: null,
			results: null,
		};

		this.handleArtistChange = this.handleArtistChange.bind(this);
	}

	handleArtistChange(artistInfo) {
		if (artistInfo) {
			this.setState({
				results: artistInfo,
			});
		} else {
			this.setState({
				results: 'no results found',
			});
		}
	}

	render() {
		const { results, isLoading, error } = this.state;

		if (error && error.length) {
			return <p>{error}</p>;
		}

		return (
			<PageContent>
				<Header>
					<SearchBox handleChange={this.handleArtistChange} />
				</Header>
				{(
					isLoading ?
						(
							<LoadingWrapper>
								We are looking for matches...
							</LoadingWrapper>
						) : (results && typeof results === 'object') ?
							(<ResultBox item={results} />)
						: <div>{results}</div>
				)}
			</PageContent>
		);
	}
}

export default App;
