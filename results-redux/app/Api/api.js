const authParameters = {
	headers: {
		Accept: 'application/json',
	},
};

/**
 * Helper:: function to delay async calls
 * @params { Object } data
 */
function delayedPromise(data) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(data), 1000);
	});
}

/**
 * Access CN search endpoint for fetching jokes
 * @params { String } searchQuery
 * @return { Array }
 */
export const getJokesList = (searchQuery) => {
	const CN_LIST_API_ENDPOINT = 'https://api.chucknorris.io/jokes/search?query=dev';

	return fetch(CN_LIST_API_ENDPOINT, authParameters)
		.then(response => response.json())
		.then(json => delayedPromise(json.result));
};

/**
 * Access CN details endpoint for fetching joke's details
 * @params { String } jokeId
 * @return { Array }
 */
export const getJokesDetails = (jokeId) => {
	const CN_DETAILS_API_ENDPOINT = `https://api.chucknorris.io/jokes/${jokeId}`;

	return fetch(CN_DETAILS_API_ENDPOINT, authParameters)
		.then(response => response.json())
		.then(json => delayedPromise([json]));
};
