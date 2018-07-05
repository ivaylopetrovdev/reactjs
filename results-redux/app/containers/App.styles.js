import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';

/**
 * General styles :: PageContent styles
 */
export const PageContent = styled.div`
	flex-direction: column;
	flex: 1 100%;

	display: flex;
	padding: 10px;

	background-color: #6A745D;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;

	@media ${breakpoints.laptop} {
		max-width: 800px;
		margin: 0 auto;
	}

	@media ${breakpoints.laptopL} {
		max-width: 1400px;
	} 
`;

/**
 * General styles :: Header styles
 */
export const HeaderWrapper = styled.div`
	align-items: flex-start;

	display: flex;
	margin-top: 10px;
	
	flex-direction: column;
	flex: 1 100%;
	
	padding: 10px;
	height: 40px;
	
	background-color: #4F574B;
	
	line-height: 40px;
	
	& > a {
		color: #ffffff;
		text-decoration: none;
		
		&:hover {
			text-decoration: underline;
		}
	}
`;

/**
 * General styles :: LoadingWrapper styles
 */
export const LoadingWrapper = styled.div`
	align-items: center;
	justify-content: center;

	display: flex;
	height: 4em;
	padding: 50px;
`;
