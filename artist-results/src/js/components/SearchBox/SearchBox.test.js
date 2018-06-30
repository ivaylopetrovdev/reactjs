import SearchBox from './SearchBox';

jest.unmock('./SearchBox');

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../../utils/enzyme-test-helper';

class LocalStorageMock {
	constructor() {
		this.store = {};
	}

	clear() {
		this.store = {};
	}

	getItem(key) {
		return this.store[key] || null;
	}

	setItem(key, value) {
		this.store[key] = value.toString();
	}

	removeItem(key) {
		delete this.store[key];
	}
}

window.localStorage = new LocalStorageMock();
jest.useFakeTimers();

describe('SearchBox (Pure component) test', () => {
	it('renders without crashing (no localstorage value)', async () => {
		const wrapper = shallowWithIntl(<SearchBox />, 'en');

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');
		const handleInputChange = jest.spyOn(wrapper.instance(), 'handleInputChange');
		const getArtistInfo = jest.spyOn(wrapper.instance(), 'getArtistInfo');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(wrapper.state('query')).toEqual('');
		expect(wrapper.state('timerId')).toEqual(null);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(handleInputChange).not.toHaveBeenCalled();
		expect(getArtistInfo).not.toHaveBeenCalled();
		expect(localStorage.store).toEqual({});

		wrapper.unmount();
	});
});

describe('SearchBox test (with localstorage value)', () => {
	it('renders without crashing', async () => {
		const wrapper = mountWithIntl(<SearchBox />, 'en');

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');
		const handleInputChange = jest.spyOn(wrapper.instance(), 'handleInputChange');
		const getArtistInfo = jest.spyOn(wrapper.instance(), 'getArtistInfo');

		window.localStorage.setItem('query', 'Maroon 5');

		// mocking the check for statement: hasOwnProperty
		window.localStorage.query = 'Maroon 5';

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(handleInputChange).toHaveBeenCalledTimes(1);
		expect(wrapper.state('query')).toEqual('Maroon 5');
		expect(wrapper.state('timerId')).not.toBeNull();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(getArtistInfo, 500);

		wrapper.unmount();
	});
});

describe('SearchBox test (with localstorage value, empty string)', () => {
	it('renders without crashing (with localstorage value, empty string)', async () => {
		const wrapper = mountWithIntl(<SearchBox />, 'en');

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');
		const handleInputChange = jest.spyOn(wrapper.instance(), 'handleInputChange');
		const getArtistInfo = jest.spyOn(wrapper.instance(), 'getArtistInfo');

		window.localStorage.setItem('query', '');

		// mocking the check for statement: hasOwnProperty
		window.localStorage.query = '';

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);

		expect(setTimeout).toHaveBeenCalledTimes(2);

		expect(wrapper.state('timerId')).not.toBeNull();

		wrapper.unmount();
	});
});

describe('SearchBox test (fill strings into input - text value and empty)', () => {
	it('renders without crashing', async () => {
		const wrapper = mountWithIntl(<SearchBox />, 'en');

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');
		const handleInputChange = jest.spyOn(wrapper.instance(), 'handleInputChange');
		const getArtistInfo = jest.spyOn(wrapper.instance(), 'getArtistInfo');

		window.localStorage.setItem('query', '');

		// mocking the check for statement: hasOwnProperty
		window.localStorage.query = '';

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(wrapper.state('timerId')).toBeNull();

		expect(wrapper.find('input')).toHaveLength(1);

		// change input's value
		wrapper.find('input').instance().value = 'test-value';

		// trigger input's onChange
		wrapper.find('#searchBox').simulate(
			'change',
			{ target: { value: 'test-value' } },
		);

		await wrapper.instance().handleInputChange();

		expect(handleInputChange).toHaveBeenCalledTimes(1);
		expect(wrapper.state('query')).toBe('test-value');

		expect(setTimeout).toHaveBeenCalled();
		expect(setTimeout).toHaveBeenCalledTimes(4);
		expect(setTimeout).toHaveBeenLastCalledWith(getArtistInfo, 500);

		// value should remain the same in the state
		wrapper.find('input').instance().value = '';

		await wrapper.instance().handleInputChange();

		expect(handleInputChange).toHaveBeenCalledTimes(2);

		// setState is not triggered
		expect(wrapper.state('query')).toBe('test-value');
		expect(setTimeout).toHaveBeenCalledTimes(4);

		wrapper.unmount();
	});
});

describe('SearchBox test (get data, normal response)', () => {
	it('renders without crashing', async () => {
		const baseProps = {
			handleChange: jest.fn(),
		};

		const wrapper = mountWithIntl(
			<SearchBox
				{...baseProps}
			/>,
			'en',
		);

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(wrapper.state('timerId')).not.toBeNull();

		await wrapper.instance().getArtistInfo();

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledTimes(1);

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledWith({
			artist: {
				id: 510,
				name: 'Maroon 5',
				url: 'http://www.bandsintown.com/Maroon5?came_from=67',
				image_url: 'https://s3.amazonaws.com/bit-photos/large/7481529.jpeg',
				thumb_url: 'https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg',
				facebook_page_url: 'https://www.facebook.com/maroon5',
				mbid: '0ab49580-c84f-44d4-875f-d83760ea2cfe',
				tracker_count: 0,
				upcoming_event_count: 0,
			},
			events: [
				{
					id: '13722599',
					artist_id: '438314',
					url: 'http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67',
					on_sale_datetime: '2017-03-01T18:00:00',
					datetime: '2017-03-19T11:00:00',
					description: 'This is a description',
					venue: {
						name: 'Encore Beach Club',
						latitude: '36.12714',
						longitude: '-115.1629562',
						city: 'Las Vegas',
						region: 'NV',
						country: 'United States',
					},
					offers: [
						{
							type: 'Tickets',
							url: 'http://www.bandsintown.com/event/13722599/buy_tickets?app_id=foo&artist=Skrillex&came_from=67',
							status: 'available',
						},
					],
					lineup: [
						'string',
					],
				},
			],
		});

		wrapper.unmount();
	});
});

describe('SearchBox test (get data, no events)', () => {
	it('renders without crashing', async () => {
		const baseProps = {
			handleChange: jest.fn(),
		};

		const wrapper = mountWithIntl(
			<SearchBox
				{...baseProps}
			/>,
			'en',
		);

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(wrapper.state('timerId')).not.toBeNull();

		// change input's value
		wrapper.find('input').instance().value = 'test-value2';

		// trigger input's onChange
		wrapper.find('#searchBox').simulate(
			'change',
			{ target: { value: 'test-value2' } },
		);

		await wrapper.instance().getArtistInfo();

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledTimes(1);

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledWith({
			artist: {
				id: 510,
				name: 'Maroon 5',
				url: 'http://www.bandsintown.com/Maroon5?came_from=67',
				image_url: 'https://s3.amazonaws.com/bit-photos/large/7481529.jpeg',
				thumb_url: 'https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg',
				facebook_page_url: 'https://www.facebook.com/maroon5',
				mbid: '0ab49580-c84f-44d4-875f-d83760ea2cfe',
				tracker_count: 0,
				upcoming_event_count: 0,
			},
			events: 0,
		});

		wrapper.unmount();
	});
});

describe('SearchBox test (get data, no match)', () => {
	it('renders without crashing', async () => {
		const baseProps = {
			handleChange: jest.fn(),
		};

		const wrapper = mountWithIntl(
			<SearchBox
				{...baseProps}
			/>,
			'en',
		);

		const hydrateStateWithLocalStorage = jest.spyOn(wrapper.instance(), 'hydrateStateWithLocalStorage');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(hydrateStateWithLocalStorage).toHaveBeenCalledTimes(1);
		expect(wrapper.state('timerId')).not.toBeNull();

		// change input's value
		wrapper.find('input').instance().value = 'test-value3';

		// trigger input's onChange
		wrapper.find('#searchBox').simulate(
			'change',
			{ target: { value: 'test-value3' } },
		);

		await wrapper.instance().getArtistInfo();

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledTimes(1);

		expect(wrapper.instance().props.handleChange).toHaveBeenCalledWith(false);

		wrapper.unmount();
	});
});