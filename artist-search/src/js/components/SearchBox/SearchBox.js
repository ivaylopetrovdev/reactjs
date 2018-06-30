import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = 'test_id';
const API_URL = 'https://rest.bandsintown.com/artists/';

/**
 * @class
 * @classdesc SearchBox component
 */
class SearchBox extends Component {
	/**
	 * Create component.
	 * @param {Object} props - component props.
	 */
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			timerId: null,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.getArtistInfo = this.getArtistInfo.bind(this);
	}

	/**
	 * @description Lifecycle method responsible for triggering check in LocalStorage.
	 * if value in LocalStorage is present, then fetching data will be triggered
	 */
	componentDidMount() {
		this.hydrateStateWithLocalStorage();
	}

	/**
	 * @description Method responsible for checking last value entered in LocalStorage
	 * and updating the state if presented
	 */
	hydrateStateWithLocalStorage() {
		if (localStorage.hasOwnProperty('query')) {
			const cachedQuery = localStorage.getItem('query');

			if (cachedQuery) {
				this.search.value = cachedQuery;

				this.setState({
					query: cachedQuery,
				}, () => {
					this.handleInputChange();
				});
			}
		}
	}

	/**
	 * @description Method responsible for storing the query value in LocalStorage and
	 * triggering fetching of artist's details
	 */
	handleInputChange() {
		const { timerId } = this.state;
		const { value } = this.search;

		if (value === '') {
			return;
		}

		clearTimeout(timerId);
		localStorage.setItem('query', value);

		this.setState({
			query: value,
			timerId: setTimeout(this.getArtistInfo, 500)
		});
	}

	/**
	 * @description Method responsible for fetching of artist's details - main details and events
	 * @return {Object} - artist details / false
	 */
	getArtistInfo() {
		const { query } = this.state;

		return axios.get(`${API_URL}${query}?app_id=${API_KEY}`)
			.then((response) => {
				if (response.data && response.data.name) {
					return axios.get(`${API_URL}${query}/events?app_id=${API_KEY}`)
						.then((responseEvents) => {
							return this.props.handleChange && this.props.handleChange({ artist: response.data, events: responseEvents.data.length && responseEvents.data});
						})
				} else {
					return this.props.handleChange && this.props.handleChange(false);
				}
			})
	}

	render() {
		return (
			<form>
				<input
					id="searchBox"
					type="text"
					placeholder="Search for..."
					ref={input => this.search = input}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

export default SearchBox;
