import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

/**
 * Timer's element component - Pure Component
 * inclides also CSS-in-JS styles
 * @accepts element's label and value
 * @returns html of the element - wrapper, value and label in a box
 */
export default class TimerBox extends PureComponent {
	render() {
		const { label, counterValue } = this.props;
		return (
			<TimerElementWrapper class={'timer-element-wrapper'}>
				<TimerElementValue class={'timer-value'}>
					{counterValue}
				</TimerElementValue>

				<TimerElementLabel class={'timer-label'}>
					<FormattedMessage id={`app.timer.${label}`}
						defaultMessage={label}
						description="Label for timer component"/>
				</TimerElementLabel>
			</TimerElementWrapper>
		);
	}
}

const TimerElementWrapper = styled.div`
	display: flex;
    flex-direction: column;
    padding: 3px 3px 0px;
    min-width: 50px;
    margin-right: 10px;
	text-align: center;
	border: 1px solid #000000;    
`;

const TimerElementValue = styled.div`
	display: flex;
	flex-direction: row;
    flex: 1 100%;
	max-width: 100%;
	align-self: center;
	max-height: 43px;
	font-size: 36px;
	font-weight: 500;
	align-items: center;
`;

const TimerElementLabel = styled.div`
	display: flex;
    flex-direction: row;
    flex: 1 100%;
	max-width: 100%;
	align-self: center;
	font-size: 9px;
	margin:0px 0px 2px;
	max-height:10px;
    text-transform: uppercase;    
`;
