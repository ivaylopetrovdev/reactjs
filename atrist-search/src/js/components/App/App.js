import React, { Component } from 'react';
// import ResultsList from '../ResultsList/ResultsList';
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
			dropdownOptions: {
				name: 'Name (A-Z)',
				date: 'Date (Latest first)',
				city: 'City',
				country: 'Country',
				venue: 'Venue',
			},
			selectedDDoption: '',
			isLoading: false,
			error: null,
			results: null,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	/**
	 * @description Lifecycle method - responsible for forced validation of images visible in
	 * the viewport that need to be loaded once the sorting param is changed
	 */
	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedDDoption !== this.state.selectedDDoption) {
			forceCheck();
		}
	}

	/**
	 * @description Lifecycle method responsible for receiving search results from the server.
	 * Responsible for indicating the loading status and error handling
	 */
	// componentDidMount() {
	// 	this.setState({ isLoading: true });

		// return fetch('https://api.myjson.com/bins/18x6yt')
		// 	.then((response) => {
		// 		if (response.ok) {
		// 			return response.json();
		// 		}
		// 		throw new Error('Something went wrong ...');
		// 	})
		// 	.then(data =>
		// 		this.setState({
		// 			results: data,
		// 			isLoading: false,
		// 		}))
		// 	.catch(error => this.setState({
		// 		error: 'Something went wrong ...',
		// 		isLoading: false,
		// 	}));
	// }

	/**
	 * @description Method responsible for sorting the results based on the selected dropdown value
	 * @param {string} - sortingOrderValue - selected sorting value
	 * @return {Object} - sorted state results
	 */
	sortResults(sortingOrderValue) {
		const { results } = this.state;
		let orderingObj = {};

		switch (sortingOrderValue) {
			case 'name':
				orderingObj = { field: 'name', order: 'desc' };
				break;
			case 'date':
				orderingObj = { field: 'date', order: 'desc' };
				break;
			case 'city':
				orderingObj = { field: 'city', order: 'asc' };
				break;
			case 'country':
				orderingObj = { field: 'country', order: 'asc' };
				break;
			default:
				orderingObj = { field: 'venue', order: 'asc' };
				break;
		}

		return results && results.sort(sortByString(orderingObj.field, orderingObj.order));
	}

	/**
	 * @description Method responsible for updating the app's state with newly selected
	 * dropdown value
	 * @param {Object} event - action event
	 */
	handleChange(event) {
		this.setState({
			selectedDDoption: event.target.value,
			results: this.sortResults(event.target.value),
		});
	}

	render() {
		const {
			results, isLoading, error, dropdownOptions, selectedDDoption,
		} = this.state;

		if (error && error.length) {
			return <p>{error}</p>;
		}

		return (
			<PageContent>
				<Header>
					<SearchBox />
					<DropdownTitle>	Sort By:</DropdownTitle>
					<Dropdown value={selectedDDoption || ''} onChange={this.handleChange}>
						<option value=''></option>
						{
							Object.keys(dropdownOptions).map(key => <option value={key} key={key}>{dropdownOptions[key]}</option>)
						}
					</Dropdown>
				</Header>
				{(
					isLoading ?
						(
							<LoadingWrapper>
								We are looking for matches...
							</LoadingWrapper>
						) : (results && results.length) ?
							// (<ResultsList items={results} isLoading={isLoading} />)
						(<div>sssss results here</div>)
						: null
				)}
			</PageContent>
		);
	}
}

export default App;
