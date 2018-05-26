import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FormattedNumber } from 'react-intl';

import { ResultWrapper, ResultImages, Image, ResultDetails, ResultInfo, ResultAdditionalInfo, AmountWrapper, AmountValue, AmountLabel } from './ResultBox.styles';

/**
 * @class
 * @classdesc ResultBox component
 * @param {Object} item - result from the search that needs to be shown
 */
class ResultBox extends PureComponent {
	render() {
		const { item } = this.props;

		return (
			<ResultWrapper className={'result-wrapper'}>
				<ResultImages>
					<LazyLoad height={200} offset={0}>
						<Image src={item.tour_image} />
					</LazyLoad>

					<LazyLoad height={200} offset={0}>
						<Image src={item.map_image} />
					</LazyLoad>
				</ResultImages>

				<ResultDetails>
					<ResultInfo>
						<h2>{item.tour_name}</h2>
						<h3>{item.description}</h3>

						<div className="tour-details">
							<div className="Rtable Rtable--5cols Rtable--collapse">
								<div className="Rtable-row">
									<div className="Rtable-cell label-cell">destinations</div>
									<div className="Rtable-cell info-cell">{item.destinations.join(', ')
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
						<div className="additional-row">
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

export default ResultBox;
