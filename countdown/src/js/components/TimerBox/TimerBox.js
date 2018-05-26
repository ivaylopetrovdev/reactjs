import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { TimerElementWrapper, TimerElementValue, TimerElementLabel } from './TimerBox.styles';

/**
 * @class
 * @classdesc Timer's element component - Pure Component
 */
class TimerBox extends PureComponent {
	render() {
		const { label, counterValue } = this.props;
		return (
			<TimerElementWrapper className={'timer-element-wrapper'}>
				<TimerElementValue className={'timer-value'}>
					{counterValue}
				</TimerElementValue>

				<TimerElementLabel className={'timer-label'}>
					<FormattedMessage id={`app.timer.${label}`}
						defaultMessage={label}
						description="Label for timer component"/>
				</TimerElementLabel>
			</TimerElementWrapper>
		);
	}
}

export default TimerBox;
