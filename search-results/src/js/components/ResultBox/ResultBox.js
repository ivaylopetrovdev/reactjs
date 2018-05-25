import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from '../../../utils/breakpoints';
import LazyLoad from 'react-lazyload';
import { FormattedNumber } from 'react-intl';

/**
 * Timer's element component - Pure Component
 * inclides also CSS-in-JS styles
 * @accepts element's label and value
 * @returns html of the element - wrapper, value and label in a box
 */
export default class ResultBox extends PureComponent {
	render() {
		const { item } = this.props;

		return (
			<ResultWrapper class={'result-wrapper'}>
				<ResultImages>
					{/*<img src={item.tour_image} />*/}
					{/*<img src={item.map_image} />*/}

					<LazyLoad height={200} offset={0}>
						<Image src={'https://placeimg.com/928/680/arch'} />
					</LazyLoad>

					<LazyLoad height={200} offset={0}>
						<Image src={'https://placeimg.com/928/400/people'} />
					</LazyLoad>
				</ResultImages>

				<ResultDetails>
					<ResultInfo>
						<h2>{item.tour_name}</h2>
						<h3>{item.description}</h3>

						<div class="tour-details">
							<div className="Rtable Rtable--5cols Rtable--collapse">
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">destinations</div>
									<div className="Rtable-cell info-cell">{item.destinations.join(", ")
									}</div>
								</div>
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">starts/ends in</div>
									<div className="Rtable-cell info-cell">{`${item.destinations[0]} / ${item.destinations[item.destinations.length - 1]}`}</div>
								</div>
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">age range</div>
									<div className="Rtable-cell info-cell">{`${item.age_from} to ${item.age_to} year olds`}</div>
								</div>
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">country</div>
									<div className="Rtable-cell info-cell">{item.country}</div>
								</div>
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">operator</div>
									<div className="Rtable-cell info-cell">{item.tour_operator}</div>
								</div>
							</div>
						</div>
					</ResultInfo>

					<ResultAdditionalInfo>
						<div class="additional-row">
							<AmountWrapper>
								<AmountLabel class={'align-left'}>
									Our saving
								</AmountLabel>

								<AmountValue class={'align-left'}>
									<FormattedNumber
										style="currency" currency={item.currency} value={ item.saving}/>
								</AmountValue>
							</AmountWrapper>

							<AmountWrapper>
								<AmountLabel class={'align-right'}>
									From
								</AmountLabel>

								<AmountValue class={'align-right'}>
									<FormattedNumber
										style="currency" currency={item.currency} value={ item.price}/>

								</AmountValue>
							</AmountWrapper>

						</div>
						<div className="additional-row days">
						{`${item.length} days`}
						</div>
					</ResultAdditionalInfo>
				</ResultDetails>
			</ResultWrapper>
		);
	}
}

ResultBox.propTypes = {
	item: PropTypes.object.isRequired,
};

const ResultWrapper = styled.div`
	display: flex;
    flex-direction: column;
	text-align: center;  
	margin-top: 20px;
	background: #fff;
	
	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
`;

const ResultImages = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	@media ${breakpoints.tablet} {
		flex: 1 50%;
		max-width: 50%;
	}
	
	@media ${breakpoints.laptop} {
		flex: 1 30%;
		max-width: 30%;
	}
`;

const Image = styled.img`
	max-width: 100%;
	width: 100%;
	
	&:first-child {
		margin-bottom:5px;
		@media ${breakpoints.tablet} {
		margin-bottom:10px;
		}
	}
`;

const ResultDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-size: 13px;
	font-family: Arial, Helvetica, sans-serif;
	color: #273646;
	
	@media ${breakpoints.tablet} {
		flex: 1 50%;
		max-width: 50%;
		padding: 15px;
	}
	
	@media ${breakpoints.laptop} {
		flex: 1 70%;
		max-width: 70%;
		flex-direction: row;
		padding: 20px;
	}
`;

const ResultInfo = styled.div`
	display: flex;
	flex-direction: row;
	padding-right:10px;
	
	& > * {
		margin: 0;
		display: block;
		text-align: left;
	}
	
	h2 {
		font-size: 24px;
	}
	
	h3 {
		padding-top: 20px;
		font-weight: 500;
	}
	
	/* Table column sizing
	================================== */
	.label-cell  { 
		width: 30%;
		text-transform: uppercase;
		color: #7f8292;
		font-size: 11px;
	}
	.info-cell  { width: 70%; }
	
	.Rtable {
		display: flex;
		flex-wrap: wrap;
		margin: 20px 0 0;
		padding: 0;
		
		.Rtable-row {
			width: 100%;
			display: flex;
			
			.Rtable-cell {
				box-sizing: border-box;
				flex-grow: 1;
				padding: 3px 0;
				overflow: hidden; // Or flex might break
				list-style: none;
			}
		}
	}
	
	@media ${breakpoints.mobileS} {
		max-width: 100%;
		padding-right:0px;
		display: flex;
		flex-direction: column;
		
		.label-cell { width: 40%; }
		.info-cell  { width: 60%; }
	}
	
	@media ${breakpoints.mobileM} {
		.label-cell { width: 30%; }
		.info-cell  { width: 70%; }
	}
	
	@media ${breakpoints.laptop} {
		flex: 1 60%;
		max-width: 60%;
		flex-direction: column;
		padding-right:20px;
	}
`;

const ResultAdditionalInfo = styled.div`
	display: flex;
	flex-direction: row;

	& > * {
		margin: 0;
		display: block;
	}
	
	.additional-row {
		border-bottom: 1px solid #c0cad4;
		display: flex;
		min-height:44px;
		
		&.days {
			font-size: 20px;
			font-weight: 700;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	
	@media ${breakpoints.mobileS} {
		padding-top: 10px;
		max-width: 100%;
		flex-direction: column;
	}
	
	@media ${breakpoints.tablet} {
		max-width: 100%;
		padding-top: 15px;
	}
	
	@media ${breakpoints.laptop} {
		flex: 1 40%;
		max-width: 40%;
		flex-direction: column;
		padding-top: 0px;
	}
`;


const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-bottom: 6px;   
`;

const AmountValue = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 100%;
	max-width: 100%;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 700;
	
	&.align-left {
		align-self: flex-start;
	}
	
	&.align-right {
		align-self: flex-end;
	}
`;

const AmountLabel = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 100%;
	max-width: 100%;
	margin:0px 0px 2px;
	
    &.align-left {
		align-self: flex-start;
	}
	
	&.align-right {
		align-self: flex-end;
	}   
`;
