import ResultBox from './TimerBox';

jest.unmock('./TimerBox');

import React from 'react';
import { mountWithIntl } from '../../../utils/enzyme-test-helper';

describe('TimerBox (Pure component) test', () => {
	it('renders without crashing', () => {
		const mockedLabel = 'days';
		const mockedValue = '99';

		const wrapper = mountWithIntl(<ResultBox
			label={mockedLabel}
			counterValue={mockedValue}
		/>, 'en');

		expect(wrapper).toHaveLength(1);
		expect(wrapper.html()).toContain(mockedValue);
		expect(wrapper.html()).toContain('Days');

		wrapper.unmount();
	});
});
