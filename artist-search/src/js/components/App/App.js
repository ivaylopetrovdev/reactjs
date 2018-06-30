import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import { PageContent, Header, SearchBoxStyle, NoResultsWrapper } from './App.styles';

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
			results: 'Please, enter an artist\'s name',
		};

		this.handleArtistChange = this.handleArtistChange.bind(this);
	}

	/**
	 * @description Method responsible for updating the app's state with results value
	 * @param {Object} artistInfo - artist's details
	 */
	handleArtistChange(artistInfo) {
		if (artistInfo) {
			this.setState({
				results: artistInfo,
			});
		} else {
			this.setState({
				results: 'No results found. Please, try with another artist',
			});
		}
	}

	render() {
		const { results } = this.state;

		return (
			<PageContent>
				<Header>
					<SearchBoxStyle>
						<SearchBox handleChange={this.handleArtistChange} />
					</SearchBoxStyle>
				</Header>
				{(
					(results && typeof results === 'object') ?
						(<ResultBox item={results} />)
						: <NoResultsWrapper>{results}</NoResultsWrapper>
				)}
			</PageContent>
		);
	}
}

export default App;
