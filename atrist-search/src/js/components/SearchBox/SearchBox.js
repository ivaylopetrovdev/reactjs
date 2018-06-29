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
	 * Create application.
	 * @param {Object} props - application props.
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

	componentDidMount() {
		this.hydrateStateWithLocalStorage();
	}

	hydrateStateWithLocalStorage() {
		// if the key exists in localStorage
		if (localStorage.hasOwnProperty('query')) {
			// get the key's value from localStorage
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
		const { query } = this.state;

		return (
			<form>
				<input
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
