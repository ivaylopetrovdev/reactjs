import React, { Component } from 'react';
import ResultsList from './ResultsList/ResultsList';
import styled from 'styled-components';
import { forceCheck } from 'react-lazyload';

/**
 * App's component - counter's date is determined by task - Black Friday
 * inclides also CSS-in-JS generic styles
 * @returns html of the counter's parts - page header, counter title, timer itself.
 */
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownOptions: {
				lp: 'Lowest price first',
				hp: 'Highest price first',
				lt: 'Longest tour first',
				st: 'Shortest tour first',
			},
			selectedDDoption: '',
			isLoading: false,
			error: null,
			results: null,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		fetch('https://api.myjson.com/bins/18x6yt')
			.then((response) => {
				if (response.ok && response.status === 200) {
					return response.json();
				}
				throw new Error('Something went wrong ...');
			})
			.then(data =>
				this.setState({
					results: data,
					isLoading: false,
				}))
			.catch(error => this.setState({
				error, isLoading: false,
			}));
	}

	sortResults(sortingOrder) {
		let orderingObj = {};
		switch (sortingOrder) {
			case 'hp':
				orderingObj = { field: 'price', order: 'desc' };
				break;
			case 'lt':
				orderingObj = { field: 'length', order: 'desc' };
				break;
			case 'st':
				orderingObj = { field: 'length', order: 'asc' };
				break;
			default:
				orderingObj = { field: 'price', order: 'asc' };
				break;
		}

		return this.state.results && this.state.results.sort(this.sortByString(orderingObj.field, orderingObj.order));
	}

	sortByString(key, order='asc') {
		return (a, b) => {
			if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
				// property doesn't exist on either object
				return 0;
			}

			const varA = (typeof a[key] === 'string') ?
				a[key].toUpperCase() : a[key];
			const varB = (typeof b[key] === 'string') ?
				b[key].toUpperCase() : b[key];

			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}
			return (
				(order == 'desc') ? (comparison * -1) : comparison
			);
		};
	}

	handleChange(event) {
		this.setState({
			selectedDDoption: event.target.value,
			results: this.sortResults(event.target.value),
		});

		console.log('sss');
		forceCheck();
		console.log('aaa');
	}

	render() {
		const {
			results, isLoading, error, dropdownOptions, selectedDDoption,
		} = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			return (
				<LoadingWrapper>
					We are looking for matches...
				</LoadingWrapper>
			);
		}

		return (
			<PageContent>
				<Header>
					<DropdownTitle>
					Sort By:
					</DropdownTitle>
					<Dropdown value={selectedDDoption || ''} onChange={this.handleChange}>
						<option value=''></option>
						{
							Object.keys(dropdownOptions).map(key => <option value={key} key={key}>{dropdownOptions[key]}</option>)
						}
					</Dropdown>
				</Header>

				{(
					results && results.length ?
						<ResultsList items={results} isLoading={isLoading} />
						: null
				)}
			</PageContent>
		);
	}
}

const Dropdown = styled.select.attrs({
	name: 'sortingchooser',
})`
	font-size: 14px;
	font-family: Arial, Helvetica, sans-serif;
	height: 3em;
	width: 14em;
	padding: 0px 10px;
	flex: 1 14em;
	max-width: 14em;
`;

const DropdownTitle = styled.div`
	font-size: 14px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	color: #76828e;
	height: 3em;
	flex: 1 100%;
	align-items: center;
	padding-right: 10px;
	display: flex;
    justify-content: flex-end;
`;

const Header = styled.div`
	display: flex;  
	font-size: 20px;
	align-items: flex-end
`;

const PageContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 100%;
	padding: 10px;
	background-color: #e8ebf0;    
`;

const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px;
	height: 4em;
	font-size: 14px;
	font-family: Arial, Helvetica, sans-serif;
`;
