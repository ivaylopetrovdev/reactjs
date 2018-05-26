import App from './App';

jest.unmock('./App');

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../../utils/enzyme-test-helper';

const mockedResponse = [{
	id: 1, tour_name: 'Home Ing', length: 13, description: '13 days Home Ing experience', price: 5008, saving: 92, currency: 'AUD', destinations: ['Liushun', 'Uppsala', 'Zagórnik', 'Salon-de-Provence', 'Washington', 'Prawdzinski', 'Maredakalada', 'Breia', 'Baisha', 'Songlong'], age_from: 21, age_to: 73, rating: 3, tour_operator: 'Cormier-Pfeffer', country: 'Indonesia', tour_image: 'http://dummyimage.com/928x680.png/ff4444/ffffff', map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff',
}, {
	id: 2, tour_name: 'Hatity', length: 11, description: '11 days Hatity experience', price: 2641, saving: 108, currency: 'AUD', destinations: ['Chengnan', 'Tenggina Daya', 'Ribeira do Pombal', 'Liangdang Chengguanzhen', 'Boncong', 'Oebobo', 'Mégara', 'Qian’an', 'Zemio', 'Jelisavac'], age_from: 20, age_to: 45, rating: 5, tour_operator: 'Schoen Inc', country: 'Canada', tour_image: 'http://dummyimage.com/928x680.png/dddddd/000000', map_image: 'http://dummyimage.com/928x400.png/5fa2dd/ffffff',
}, {
	id: 3, tour_name: 'Biodex', length: 26, description: '26 days Biodex experience', price: 4604, saving: 148, currency: 'AUD', destinations: ['Uitenhage', 'Tomingad', 'Wenping', 'Stettler', 'Sidi Redouane', 'Niuzhuang', 'Nazran’', 'Az Zuwaytīnah', 'Iporá', 'Drosáto'], age_from: 27, age_to: 38, rating: 3, tour_operator: 'Larson-Heaney', country: 'Venezuela', tour_image: 'http://dummyimage.com/928x680.png/5fa2dd/ffffff', map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff',
}];

describe('App (component) test', () => {
	it('renders without crashing (normal fetch response)', async () => {
		global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
			resolve({
				ok: true,
				json() {
					return mockedResponse;
				},
			});
		}));

		const wrapper = shallowWithIntl(<App
		/>, 'en');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(wrapper.state('error')).toEqual(null);
		expect(wrapper.state('results')).toHaveLength(3);
		expect(wrapper.state('isLoading')).toEqual(false);
		expect(wrapper.html()).toContain('Sort By:');

		wrapper.unmount();
	});

	it('renders without crashing (problematic fetch response)', async () => {
		global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
			resolve({
				ok: false,
				json() {
					return mockedResponse;
				},
			});
		}));

		const wrapper = shallowWithIntl(<App
		/>, 'en');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(wrapper.state('error')).toEqual('Something went wrong ...');
		expect(wrapper.state('isLoading')).toEqual(false);
		expect(wrapper.state('results')).toEqual(null);
		expect(wrapper.html()).toContain('Sort By:');

		wrapper.unmount();
	});

	it('change selected value in the dropdown', async () => {
		global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
			resolve({
				ok: true,
				json() {
					return mockedResponse;
				},
			});
		}));

		const wrapper = mountWithIntl(<App
		/>, 'en');

		const spyChange = jest.spyOn(wrapper.instance(), 'handleChange');
		const spySort = jest.spyOn(wrapper.instance(), 'sortResults');

		await wrapper.instance().componentDidMount();

		expect(wrapper).toHaveLength(1);
		expect(wrapper.state('error')).toEqual(null);
		expect(wrapper.state('results')).toHaveLength(3);
		expect(wrapper.state('isLoading')).toEqual(false);
		expect(wrapper.state('selectedDDoption')).toHaveLength(0);
		expect(wrapper.html()).toContain('Sort By:');

		expect(wrapper.find('select')).toHaveLength(1);
		expect(wrapper.find('option')).toHaveLength(5);
		expect(wrapper.find('option').get(4).props.value).toEqual('st');
		expect(wrapper.find('option').get(4).props.children).toEqual('Shortest tour first');

		wrapper.find('select').simulate('change', { target: { value: 'st' } });

		expect(wrapper.find('select').props().value).toBe('st');

		expect(spyChange).toHaveBeenCalled();
		expect(spyChange).toHaveBeenCalledTimes(1);
		expect(spySort).toHaveBeenCalled();
		expect(spySort).toHaveBeenCalledTimes(1);

		expect(wrapper.state('selectedDDoption')).toHaveLength(2);
		expect(wrapper.state('selectedDDoption')).toEqual('st');

		wrapper.find('select').simulate('change', { target: { value: 'hp' } });

		expect(wrapper.find('select').props().value).toBe('hp');

		expect(spyChange).toHaveBeenCalled();
		expect(spyChange).toHaveBeenCalledTimes(2);
		expect(spySort).toHaveBeenCalled();
		expect(spySort).toHaveBeenCalledTimes(2);

		expect(wrapper.state('selectedDDoption')).toHaveLength(2);
		expect(wrapper.state('selectedDDoption')).toEqual('hp');

		wrapper.find('select').simulate('change', { target: { value: 'lt' } });

		expect(wrapper.find('select').props().value).toBe('lt');

		expect(spyChange).toHaveBeenCalled();
		expect(spyChange).toHaveBeenCalledTimes(3);
		expect(spySort).toHaveBeenCalled();
		expect(spySort).toHaveBeenCalledTimes(3);

		expect(wrapper.state('selectedDDoption')).toHaveLength(2);
		expect(wrapper.state('selectedDDoption')).toEqual('lt');

		wrapper.find('select').simulate('change', { target: { value: 'lp' } });

		expect(wrapper.find('select').props().value).toBe('lp');

		expect(spyChange).toHaveBeenCalled();
		expect(spyChange).toHaveBeenCalledTimes(4);
		expect(spySort).toHaveBeenCalled();
		expect(spySort).toHaveBeenCalledTimes(4);

		expect(wrapper.state('selectedDDoption')).toHaveLength(2);
		expect(wrapper.state('selectedDDoption')).toEqual('lp');

		wrapper.unmount();
	});
});

describe('App (component) :: Fetch call fails', () => {
	it('renders without crashing, but no response', async () => {
		global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
			reject(new Error('test error'));
		}));

		const wrapper = shallowWithIntl(<App
		/>, 'en');

		await wrapper.instance().componentDidMount();

		expect(wrapper.state('error')).toEqual('Something went wrong ...');
		expect(wrapper.state('isLoading')).toEqual(false);
		expect(wrapper.state('results')).toEqual(null);
		expect(wrapper).toHaveLength(1);

		wrapper.unmount();
	});
});
