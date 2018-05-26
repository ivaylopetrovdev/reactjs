import TimerBox from './TimerBox';

jest.unmock('./TimerBox');

import React from 'react';
import { mountWithIntl } from '../../../utils/enzyme-test-helper';

describe('TimerBox (Pure component) test', () => {
	it('renders without crashing', () => {
		const mockedLabel = 'days';
		const mockedValue = '99';

		const wrapper = mountWithIntl(<TimerBox
			label={mockedLabel}
			counterValue={mockedValue}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('div.timer-element-wrapper')).toHaveLength(1);
		expect(wrapper.find('div.timer-value')).toHaveLength(1);
		expect(wrapper.find('div.timer-label')).toHaveLength(1);

		expect(wrapper.find('div.timer-value').html()).toContain(mockedValue);
		expect(wrapper.find('div.timer-label').html()).toContain('Days');

		wrapper.unmount();
	});
});


