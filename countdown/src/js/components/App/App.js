import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import { FormattedMessage } from 'react-intl';
import { PageContent, Header, CountdownTimer, TimerLabel } from './App.styles';

/**
 * @class
 * @classdesc Application main component
 */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finalDate: 'November 23, 2018',
		};
	}

	render() {
		const { finalDate } = this.state;
		return (
			<PageContent>
				<Header>
					<FormattedMessage id="app.title"
									  defaultMessage="Black Friday Countdown Timer ({finalDate})"
									  description="Title header on app main page"
									  values={{ finalDate }}/>
				</Header>

				<CountdownTimer>
					<TimerLabel>
						<FormattedMessage id="app.startsIn"
									  defaultMessage="Starts In"
									  description="Label for timer"/>
					</TimerLabel>

					<Timer finalDate={finalDate}/>
				</CountdownTimer>
			</PageContent>
		);
	}
}

export default App;
