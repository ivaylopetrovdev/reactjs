import styled from 'styled-components';
import SearchBox from '../SearchBox/SearchBox';
import { breakpoints } from '../../../utils/breakpoints';

/**
 * General styles :: PageContent styles
 */
export const PageContent = styled.div`
	flex-direction: column;
	flex: 1 100%;

	display: flex;
	padding: 10px;

	background-color: #e8ebf0;

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
export const Header = styled.div`
	align-items: flex-end;

	display: flex;
	margin-top: 10px;
`;

/**
 * General styles :: Dropdown styles
 */
export const SearchBoxStyle = styled.div`
	& > form > input {
		flex: 1 14em;

		width: 14em;
		max-width: 14em;
		height: 3em;
		padding: 0px 10px;
		
		color: #76828e;

		font-size: 14px;
		font-weight: bold;
	}
`;

/**
 * General styles :: NoResultsWrapper styles
 */
export const NoResultsWrapper = styled.div`
	align-items: center;
	justify-content: center;

	display: flex;
	height: 4em;
	padding: 50px;
`;
