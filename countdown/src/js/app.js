import React from 'react';
import ReactDOM from 'react-dom';

// importing App component
import App from './components/App';

// importing internationalisation files
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import messages_de from '../translations/de';
import messages_en from '../translations/en';

// add locale files for supported languages
addLocaleData([...en, ...de]);

// languages mapping
const messages = {
	de: messages_de,
	en: messages_en,
};

// language without region code
const language = navigator.language.split(/[-_]/)[0];

// fetch main element where application should be placed
const app = document.getElementById('app');

function renderApp() {
	return (
		<IntlProvider locale={language} messages={messages[language]}>
			<App />
		</IntlProvider>
	);
}

ReactDOM.render(renderApp(), app);
