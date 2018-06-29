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

	@media ${breakpoints.laptop} {
		flex: 1 30%;

		max-width: 30%;
	}
`;

/**
 * Result box styles :: Image styles
 */
export const Image = styled.img`
	width: 100%;
	max-width: 100%;

	&:first-child {
		margin-bottom:5px;

		@media ${breakpoints.tablet} {
			margin-bottom:10px;
		}
	}
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
		flex: 1 70%;
		flex-direction: row;

		max-width: 70%;
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
		margin: 20px 0 0;

		.Rtable-row {
			display: flex;
			width: 100%;

			.Rtable-cell {
				flex-grow: 1;

				overflow: hidden; // Or flex might break
				padding: 3px 0;

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

	@media ${breakpoints.laptop} {
		flex: 1 60%;
		flex-direction: column;

		padding-right:20px;
		max-width: 60%;
	}
`;

/**
 * Result box styles :: ResultAdditionalInfo styles
 */
export const ResultAdditionalInfo = styled.div`
	flex-direction: row;

	display: flex;

	& > * {
		display: block;
		margin: 0;
	}

	.additional-row {
		display: flex;
		min-height:44px;
		border-bottom: 1px solid #c0cad4;

		&.days {
			align-items: center;
			justify-content: center;

			display: flex;

			font-size: 20px;
			font-weight: 700;
		}
	}

	@media ${breakpoints.mobileS} {
		flex-direction: column;

		max-width: 100%;
		padding-top: 10px;
	}

	@media ${breakpoints.tablet} {
		max-width: 100%;
		padding-top: 15px;
	}

	@media ${breakpoints.laptop} {
		flex: 1 40%;
		flex-direction: column;

		max-width: 40%;
		padding-top: 0px;
	}
`;

/**
 * Result box styles :: AmountWrapper styles
 */
export const AmountWrapper = styled.div`
	flex-direction: column;
	flex: 1;

	display: flex;
	margin-bottom: 6px;   
`;

/**
 * Result box styles :: AmountValue styles
 */
export const AmountValue = styled.div`
	flex-direction: row;
	flex: 1 100%;

	display: flex;
	max-width: 100%;

	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;

	&.align-left {
		align-self: flex-start;
	}

	&.align-right {
		align-self: flex-end;
	}
`;

/**
 * Result box styles :: AmountLabel styles
 */
export const AmountLabel = styled.div`
	flex-direction: row;
	flex: 1 100%;

	display: flex;
	max-width: 100%;
	margin:0px 0px 2px;

    &.align-left {
		align-self: flex-start;
	}

	&.align-right {
		align-self: flex-end;
	}   
`;
