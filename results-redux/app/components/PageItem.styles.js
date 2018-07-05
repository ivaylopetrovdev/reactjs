import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';

/**
 * General styles ::  ResultsTitle styles
 */
export const ResultsTitleWrapper = styled.div`
	align-items: flex-start;

	display: flex;
	margin-top: 10px;
	
	flex-direction: row;
	flex: 1 100%;
	
	padding: 10px;
	height: 40px;
	
	color: #ffffff;
	
	line-height: 40px;
	
	h2 {
		margin: 0;
		flex: 1 50%;    
		max-width: 50%;
	}
	
	span {
		align-items: flex-end;
		flex: 1 50%;    
		max-width: 50%;
		text-align: right;
	}
`;

/**
 * Result box styles :: ResultWrapper styles
 */
export const ResultWrapper = styled.div`
	flex-direction: column;
	flex: 1 30%;

	display: flex;
	margin-top: 20px;  

	background-color: #E0DBA7;

	text-align: center;
	border-radius: 15px;

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
	
	a {
		color: silver;
		text-decoration: none;
		
		&:hover {
			text-decoration: underline;
		}
	}
`;

/**
 * Result box styles :: ResultImages styles
 */
export const ResultImages = styled.div`
	flex-direction: column;
	justify-content: space-between;

	display: flex;

	@media ${breakpoints.tablet} {
		flex: 1 10%;

		max-width: 10%;
	}
`;

/**
 * Result box styles :: Image styles
 */
export const Image = styled.img`
	width: 100%;
	max-width: 100%;
`;

/**
 * Result box styles :: ResultDetails styles
 */
export const ResultDetails = styled.div`
	flex-direction: column;

	display: flex;
	padding: 10px;

	color: #273646;

	font-size: 13px;

	@media ${breakpoints.tablet} {
		flex: 1 90%;

		max-width: 90%;
		padding: 15px;
	}

	@media ${breakpoints.laptop} {
		flex: 1 90%;
		flex-direction: row;

		max-width: 90%;
		padding: 20px;
	}
`;

/**
 * Result box styles :: ResultInfo styles
 */
export const ResultInfo = styled.div`
	flex-direction: row;
	flex: 1 100%;
	max-width: 100%;

	display: flex;

	& > * {
		display: block;
		margin: 0;

		text-align: left;
	}

	h3 {
		flex-direction: row;
		flex: 1 90%;
		max-width: 90%;
	}

	h4 {
		flex-direction: column;
		flex: 1 100%;
		max-width: 100%;
	}

	h5 {
		flex-direction: column;
		flex: 1 100%;
		max-width: 100%;
	}

	button {
		white-space: nowrap;
		border-radius: 15px;
		background-color: #E5554F;
		color: #ffffff;
		border: none; 

		&:hover {
			cursor: pointer;
		}
	}
`;

/**
 * Result box styles :: ResultDetailsInfo styles
 */
export const ResultDetailsInfo = styled.div`
	flex-direction: column;
	flex: 1 100%;
	max-width: 100%;

	display: flex;

	& > * {
		display: block;
		margin: 0;

		text-align: left;
	}

	h4 {
		flex-direction: column;
		flex: 1 100%;
		max-width: 100%;
	}

	h5 {
		flex-direction: column;
		flex: 1 100%;
		max-width: 100%;
		
		margin-top: 20px;
		
		& > a {
			margin: 0;
	
			color: #565656;
		}
	}
`;
