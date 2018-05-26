import App from './App';

jest.unmock('./App');

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../../utils/enzyme-test-helper';

describe('App (component) test', () => {
	it('renders without crashing', () => {
		const wrapper = mountWithIntl(<App
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.instance().state.finalDate).toEqual('November 23, 2018');
		expect(wrapper.html()).toContain('Black Friday Countdown Timer (November 23, 2018)');
		expect(wrapper.html()).toContain('Starts In');

		wrapper.unmount();
	});
});
