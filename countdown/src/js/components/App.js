import React, { Component } from 'react';
import Timer from './Timer/Timer';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

/**
 * App's component - counter's date is determined by task - Black Friday
 * inclides also CSS-in-JS generic styles
 * @returns html of the counter's parts - page header, counter title, timer itself.
 */
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finalDate: 'November 23, 2018',
		};
	}

	render() {
		const { finalDate } = this.state;
		return (
			<CountdownTimer>
				<Header>
					<FormattedMessage id="app.title"
									  defaultMessage="Black Friday Countdown Timer ({finalDate})"
									  description="Title header on app main page"
									  values={{ finalDate }}/>
				</Header>

				<PageContent>
					<TimerLabel>
						<FormattedMessage id="app.startsIn"
									  defaultMessage="Starts In"
									  description="Label for timer"/>
					</TimerLabel>

					<Timer finalDate={finalDate}/>
				</PageContent>
			</CountdownTimer>
		);
	}
}

const CountdownTimer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	line-height: 1.42857;
	display: flex;
	flex-flow: row wrap;
`;

const Header = styled.div`
	display: flex;  
	flex-direction: column;
	flex: 1 100%;
	align-items: center;
	padding: 10px;
	font-size: 20px;
`;

const PageContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 100%;
	padding: 40px 20% 10px;
	height: 50%;    
`;

const TimerLabel = styled.div`
	display: flex;
	flex: 1 100%;
	text-transform: uppercase;
	letter-spacing: 3px;
	height: 20px;    
`;
