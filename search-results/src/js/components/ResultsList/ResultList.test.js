import ResultsList from './ResultsList';
import ResultBox from '../ResultBox/ResultBox';

jest.unmock('./ResultsList');

import React from 'react';
import { mountWithIntl } from '../../../utils/enzyme-test-helper';

describe('ResultsList (Pure component) test', () => {
	it('renders without crashing', () => {
		const mockedItems = [{
			id: 1,
			tour_name: 'Test Tour Name',
			length: 7,
			description: '7 days Test Tour experience',
			price: 7,
			saving: 1,
			currency: 'BGN',
			destinations: ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Rousse', 'Montana'],
			age_from: 21,
			age_to: 73,
			rating: 3,
			tour_operator: 'Fast Travel',
			country: 'Bulgaria',
			tour_image: 'http://dummyimage.com/928x680.png/ff4444/ffffff',
			map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff',
		}, {
			id: 2,
			tour_name: 'Test Tour Name 2',
			length: 8,
			description: '8 days Test Tour experience',
			price: 8,
			saving: 1,
			currency: 'BGN',
			destinations: ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Rousse', 'Montana'],
			age_from: 21,
			age_to: 73,
			rating: 3,
			tour_operator: 'Fast Travel #2',
			country: 'Bulgaria',
			tour_image: 'http://dummyimage.com/928x680.png/ff4444/ffffff',
			map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff',
		}];

		const wrapper = mountWithIntl(<ResultsList
			items={mockedItems}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('ResultBox')).toHaveLength(2);
		expect(wrapper.find('h2')).toHaveLength(2);
		expect(wrapper.find('h3')).toHaveLength(2);
		expect(wrapper.find('div.tour-details')).toHaveLength(2);
		expect(wrapper.find('div.tour-details').find('.Rtable')).toHaveLength(2);

		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row').get(3).props.children[1].props.children).toEqual(mockedItems[0].country);

		wrapper.unmount();
	});
});

