const messages_en = {
	'app.title': 'Black Friday Countdown Timer ({finalDate})',
	'app.startsIn': 'Starts In',
	'app.timer.days': 'Days',
	'app.timer.hours': 'Hours',
	'app.timer.minutes': 'Minutes',
	'app.timer.seconds': 'Seconds',
};

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = messages_en;

import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function nodeWithIntlProp(node, { intl }) {
    return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, setLocale) {
    const intlProvider = new IntlProvider({ locale: setLocale, messages }, {});
    const { intl } = intlProvider.getChildContext();
    return shallow(nodeWithIntlProp(node, { intl }), {
        context: { intl }
    });
};

export function mountWithIntl(node, setLocale) {
    const intlProvider = new IntlProvider({ locale: setLocale, messages }, {});
    const { intl } = intlProvider.getChildContext();

    return mount(nodeWithIntlProp(node, { intl }), {
        context: { intl },
        childContextTypes: { intl: intlShape }
    });
};
