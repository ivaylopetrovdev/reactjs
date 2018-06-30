import ResultBox from './ResultBox';

jest.unmock('./ResultBox');

import React from 'react';
import { mountWithIntl } from '../../../utils/enzyme-test-helper';

describe('ResultBox (Pure component) test', () => {
	it('renders without crashing (with events)', () => {
		const mockedItem = {
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

		const wrapper = mountWithIntl(<ResultBox
			item={mockedItem}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('LazyLoad')).toHaveLength(1);
		expect(wrapper.find('h2')).toHaveLength(1);
		expect(wrapper.find('h2').html()).toContain(mockedItem.artist.name);
		expect(wrapper.find('h3')).toHaveLength(1);
		expect(wrapper.find('h3').html()).toContain(mockedItem.artist.facebook_page_url);
		expect(wrapper.find('h4')).toHaveLength(1);
		expect(wrapper.find('h4').html()).toContain('Events');

		expect(wrapper.find('div.tour-details')).toHaveLength(1);
		expect(wrapper.find('div.tour-details').find('.Rtable')).toHaveLength(1);
		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row')).toHaveLength(4);

		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row').get(2).props.children[1].props.children).toEqual(mockedItem.events[0].venue.country);

		expect(wrapper.find('FormattedDate')).toHaveLength(1);
		wrapper.unmount();
	});

	it('renders without crashing (with NO events)', () => {
		const mockedItem = {
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
			events: [],
		};

		const wrapper = mountWithIntl(<ResultBox
			item={mockedItem}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('LazyLoad')).toHaveLength(1);
		expect(wrapper.find('h2')).toHaveLength(1);
		expect(wrapper.find('h2').html()).toContain(mockedItem.artist.name);
		expect(wrapper.find('h3')).toHaveLength(1);
		expect(wrapper.find('h3').html()).toContain(mockedItem.artist.facebook_page_url);
		expect(wrapper.find('h4')).toHaveLength(1);
		expect(wrapper.find('h4').html()).toContain('Events');

		expect(wrapper.find('div.tour-details')).toHaveLength(1);
		expect(wrapper.find('div.tour-details').find('.Rtable')).toHaveLength(0);
		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row')).toHaveLength(0);

		expect(wrapper.find('FormattedDate')).not.toHaveLength(1);
		wrapper.unmount();
	});
});

