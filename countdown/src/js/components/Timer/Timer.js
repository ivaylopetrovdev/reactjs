import React, { Component } from 'react';
import TimerBox from './TimerBox';
import styled from 'styled-components';

/**
 * Timer's component - timer responsible for:
 * - visualizing counter's date
 * - calculating remaining time
 * - validating values for leading zeroes
 * inclides also CSS-in-JS styles
 * @accepts timer's final date
 * @returns html of the counter - wrapper and counter elements showing values via pure component.
 */
export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			},
		};
	}

	/**
     * Method responsible for calculating remaining time, split time parts in separate
	 * values that can be used and update them into component's state
     * @accepts countdownTime - timer's final date
     */
	calculateTimer(countdownTime) {
		const { timer } = this.state;
		const timeLeft = Date.parse(countdownTime) - Date.parse(new Date());

		let seconds = 0;
		let minutes = 0;
		let hours = 0;
		let days = 0;

		if (timeLeft > 0) {
			seconds = Math.floor((timeLeft / 1000) % 60);
			minutes = Math.floor((timeLeft / 1000 / 60) % 60);
			hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
			days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		}

		this.setState({
			timer: Object.assign({}, timer, {
				days, hours, minutes, seconds,
			}),
		});
	}

	/**
     * Lifecycle method responsible for initial calculating of remaining time
     */
	componentWillMount() {
		this.calculateTimer(this.props.finalDate);
	}

	/**
     * Lifecycle method responsible for triggering timer so calculation of remaining time can be correct
     */
	componentDidMount() {
		setInterval(() => this.calculateTimer(this.props.finalDate), 1000);
	}

	/**
     * Method responsible for validating value for leading zero
     * @accepts 'number' - desired value
     * @returns validated value
     */
	leadingZero(number) {
		return number < 10 ? `0${number}` : number;
	}

	render() {
		const { timer } = this.state;

		return (
			<TimerWrapper class={'time-wrapper'}>
				{(
					Object.keys(timer).map((timeValue, index) =>
						<TimerBox key={timeValue} label={timeValue} counterValue={(timeValue !== 'days' ? this.leadingZero(timer[timeValue]) : timer[timeValue])} />)
				)}
			</TimerWrapper>
		);
	}
}

const TimerWrapper = styled.div`
	display: flex;
	flex: 1 1 100%;
	max-width: 100%;
`;
