import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = 'test_id';
const API_URL = 'https://rest.bandsintown.com/';

// /artists/{artistname}
// /artists/{artistname}/events

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
			results: null,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange() {
		this.setState({
			query: this.search.value
		}, () => this.getInfo())
	}

	getInfo() {
		const { query } = this.state;

		return axios.get(`${API_URL}artists/${query}?app_id=${API_KEY}`)
			.then((response) => {
				console.log('response', response);
				this.setState({
					results: response.data
				})
			})
	}

	render() {
		return (
			<form>
				<input
					placeholder="Search for..."
					ref={input => this.search = input}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

export default SearchBox;