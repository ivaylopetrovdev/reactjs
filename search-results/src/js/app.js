import React from 'react';
import ReactDOM from 'react-dom';

// importing internationalisation files
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

// add locale files for supported languages
addLocaleData([...en, ...de]);

// language without region code
const language = navigator.language.split(/[-_]/)[0];

// importing App component
import App from './components/App';

// fetch main element where application should be placed
const app = document.getElementById('app');

function renderApp() {
	return (
		<IntlProvider locale={language}>
			<App />
		</IntlProvider>
	);
}

ReactDOM.render(renderApp(), app);