import styled from 'styled-components';

/**
 * General styles :: PageContent styles
 */
export const PageContent = styled.div`
	flex-flow: row wrap;

	display: flex;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;

	line-height: 1.42857;
`;

/**
 * General styles :: Header styles
 */
export const Header = styled.div`
	flex-direction: column;
	flex: 1 100%;
	align-items: center;

	display: flex;  
	padding: 10px;

	font-size: 20px;
`;

/**
 * General styles :: CountdownTimer styles
 */
export const CountdownTimer = styled.div`
	flex-direction: column;
	flex: 1 100%;

	display: flex;
	height: 50%;    
	padding: 40px 20% 10px;
`;

/**
 * General styles :: TimerLabel styles
 */
export const TimerLabel = styled.div`
	flex: 1 100%;
	text-transform: uppercase;

	display: flex;
	height: 20px;    

	letter-spacing: 3px;
`;
