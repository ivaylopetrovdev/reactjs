import styled from 'styled-components';

/**
 * TimerBox styles :: TimerElementWrapper styles
 */
export const TimerElementWrapper = styled.div`
	flex-direction: column;

	display: flex;
	min-width: 50px;
	padding: 3px 3px 0px;
	border: 1px solid #000000;    
	margin-right: 10px;

	text-align: center;
`;

/**
 * TimerBox styles :: TimerElementValue styles
 */
export const TimerElementValue = styled.div`
	flex-direction: row;
	flex: 1 100%;
	align-items: center;
	align-self: center;

	display: flex;
	max-width: 100%;
	max-height: 43px;

	font-size: 36px;
	font-weight: 500;
`;

/**
 * TimerBox styles :: TimerElementLabel styles
 */
export const TimerElementLabel = styled.div`
	flex-direction: row;
	flex: 1 100%;
	align-self: center;

	display: flex;
	max-width: 100%;
	max-height:10px;
	margin:0px 0px 2px;

	font-size: 9px;
	text-transform: uppercase;    
`;
