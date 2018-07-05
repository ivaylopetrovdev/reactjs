import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(<Provider store={store}>
	<PersistGate loading={null} persistor={persistor}>
		<Router>
			<App/>
		</Router>
	</PersistGate>
</Provider>, document.getElementById('root'));
