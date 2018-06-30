import App from './App';

jest.unmock('./App');

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../../utils/enzyme-test-helper';

const mockedResponse = {
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
};

describe('App (component) test', () => {
	it('renders without crashing (no results)', async () => {
		const wrapper = shallowWithIntl(<App
		/>, 'en');

		await wrapper.instance().handleArtistChange();

		expect(wrapper).toHaveLength(1);
		expect(wrapper.state('results')).toEqual('No results found. Please, try with another artist');
		expect(wrapper.html()).toContain('Search for...');
		wrapper.unmount();
	});

	it('renders without crashing (normal results)', async () => {
		const wrapper = shallowWithIntl(<App
		/>, 'en');

		wrapper.instance().handleArtistChange(mockedResponse);

		expect(wrapper).toHaveLength(1);

		wrapper.unmount();
	});
});
