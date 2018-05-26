import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function nodeWithIntlProp(node, { intl }) {
	return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, setLocale) {
	const intlProvider = new IntlProvider({ locale: setLocale }, {});
	const { intl } = intlProvider.getChildContext();
	return shallow(nodeWithIntlProp(node, { intl }), {
		context: { intl },
	});
}

export function mountWithIntl(node, setLocale) {
	const intlProvider = new IntlProvider({ locale: setLocale }, {});
	const { intl } = intlProvider.getChildContext();

	return mount(nodeWithIntlProp(node, { intl }), {
		context: { intl },
		childContextTypes: { intl: intlShape },
	});
}
