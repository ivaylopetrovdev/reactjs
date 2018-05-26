import ResultBox from './ResultBox';

jest.unmock('./ResultBox');

import React from 'react';
import { mountWithIntl } from '../../../utils/enzyme-test-helper';

describe('ResultBox (Pure component) test', () => {
	it('renders without crashing', () => {
		const mockedItem = {
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
		};

		const wrapper = mountWithIntl(<ResultBox
			item={mockedItem}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('LazyLoad')).toHaveLength(2);
		expect(wrapper.find('h2')).toHaveLength(1);
		expect(wrapper.find('h2').html()).toContain(mockedItem.tour_name);
		expect(wrapper.find('h3')).toHaveLength(1);
		expect(wrapper.find('h3').html()).toContain(mockedItem.description);

		expect(wrapper.find('div.tour-details')).toHaveLength(1);
		expect(wrapper.find('div.tour-details').find('.Rtable')).toHaveLength(1);
		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row')).toHaveLength(5);

		expect(wrapper.find('div.tour-details').find('.Rtable').find('div.Rtable-row').get(3).props.children[1].props.children).toEqual(mockedItem.country);

		expect(wrapper.find('div.additional-row')).toHaveLength(2);
		expect(wrapper.find('FormattedNumber')).toHaveLength(2);
		expect(wrapper.find('div.additional-row.days').html()).toContain(mockedItem.length);

		wrapper.unmount();
	});
});

