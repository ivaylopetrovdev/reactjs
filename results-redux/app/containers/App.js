import React, { Component } from 'react';
import Header from '../common/Header';
import { Switch, Route } from 'react-router-dom';
import ResultsPage from './ResultsPage';
import DetailsPage from './DetailsPage';
import { PageContent, HeaderWrapper } from './App.styles';

/**
 * @class
 * @classdesc Application main component
 */
class App extends Component {
	render() {
		return (
			<PageContent>
				<HeaderWrapper>
					<Header />
				</HeaderWrapper>

				<main>
					<Switch>
						<Route exact path="/" component={ ResultsPage } />
						<Route exact path="/details/:id" component={ DetailsPage } />
					</Switch>
				</main>
			</PageContent>
		);
	}
}

export default App;
