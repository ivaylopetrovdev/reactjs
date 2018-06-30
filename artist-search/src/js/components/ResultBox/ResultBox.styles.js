import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';

/**
 * Result box styles :: ResultWrapper styles
 */
export const ResultWrapper = styled.div`
	flex-direction: column;

	display: flex;
	margin-top: 20px;  

	background: #ffffff;

	text-align: center;

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
		flex: 1 50%;

		max-width: 50%;
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
		flex: 1 50%;

		max-width: 50%;
		padding: 15px;
	}

	@media ${breakpoints.laptop} {
		flex: 1 50%;
		flex-direction: row;

		max-width: 50%;
		padding: 20px;
	}
`;

/**
 * Result box styles :: ResultInfo styles
 */
export const ResultInfo = styled.div`
	flex-direction: row;

	display: flex;
	padding-right:10px;

	& > * {
		display: block;
		margin: 0;

		text-align: left;
	}

	h2 {
		font-size: 24px;
	}

	h3 {
		padding-top: 20px;

		font-weight: 500;
	}
	
	h4 {
		padding-top: 20px;

		font-weight: 700;
	}

	.label-cell  { 
		width: 30%;

		color: #7f8292;

		font-size: 11px;
		text-transform: uppercase;
	}

	.info-cell  { width: 70%; }

	.Rtable {
		flex-wrap: wrap;

		display: flex;
		padding: 0;
		border: 1px solid #000000;
		margin: 20px 0 0;

		.Rtable-row {
			display: flex;
			width: 100%;
			
			&:nth-child(even) {
				background-color: #f2f2f2; 
			}
			
			&:first-of-type {
				background: #000000;
				
				color: #ffffff;
				
				& > .label-cell {			
					color: #ffffff;
				}
			}

			.Rtable-cell {
				flex-grow: 1;

				overflow: hidden; // Or flex might break
				padding: 3px 10px;

				box-sizing: border-box;
				list-style: none;
			}
		}
	}

	@media ${breakpoints.mobileS} {
		flex-direction: column;

		display: flex;
		padding-right:0px;
		max-width: 100%;

		.label-cell { width: 40%; }
		.info-cell  { width: 60%; }
	}

	@media ${breakpoints.mobileM} {
		.label-cell { width: 30%; }
		.info-cell  { width: 70%; }
	}

`;
