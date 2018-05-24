import Timer from './Timer';

jest.unmock('./Timer');

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../../utils/enzyme-test-helper';

describe('Timer (component) test', () => {
	it('renders without crashing (future date)', () => {
		const mockedFinalDate = 'October 23, 2018';

		const wrapper = mountWithIntl(<Timer
			finalDate={mockedFinalDate}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.instance().state.timer.days).toBeGreaterThan(100);

		wrapper.unmount();
	});

	it('renders without crashing (past date)', () => {
		const mockedFinalDate = 'January 1, 2018';

		const wrapper = shallowWithIntl(<Timer
			finalDate={mockedFinalDate}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.instance().state.timer.days).toEqual(0);

		wrapper.unmount();
	});
});
