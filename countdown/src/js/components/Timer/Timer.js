import React, { Component } from 'react';
import TimerBox from '../TimerBox/TimerBox';
import { TimerWrapper } from './Timer.styles';

/**
 * @class
 * @classdesc Timer component
 */
class Timer extends Component {
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
		this.intervalId = null;
	}

	/**
	 * @description Lifecycle method - responsible for initial calculating of remaining time
	 */
	componentWillMount() {
		this.calculateTimer(this.props.finalDate);
	}

	/**
	 * @description Lifecycle method responsible for triggering timer so calculation of remaining time can be correct
	 */
	componentDidMount() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => this.calculateTimer(this.props.finalDate), 1000);
		}
	}

	/**
	 * @description Lifecycle method responsible for removing interval reference
	 */
	componentWillUnmount() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	/**
	 * @description Method responsible for calculating remaining time, split time parts in separate
	 * values that can be used and update them into component's state
	 * @param {string} - countdownTime - timer's final date
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
	 * @description Method responsible for validating value about leading zero
	 * @param {number} number - value that needs to be checked
	 * @returns {number|string} - validated value
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

export default Timer;
