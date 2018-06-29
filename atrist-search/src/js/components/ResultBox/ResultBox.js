import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FormattedDate } from 'react-intl';

import { ResultWrapper, ResultImages, Image, ResultDetails, ResultInfo } from './ResultBox.styles';

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
						<a href={item.artist.facebook_page_url} target="_blank"><Image src={item.artist.image_url} /></a>
					</LazyLoad>
				</ResultImages>

				<ResultDetails>
					<ResultInfo>
						<h2><a href={item.artist.url} target="_blank">{item.artist.name}</a></h2>
						<h3><a href={item.artist.facebook_page_url} target="_blank">{item.artist.facebook_page_url}</a></h3>

						<div className="tour-details">
							date +, date -,
						{(
							item.events.length ?
								item.events.map(event => {
									return (
										<div key={event.id} className="Rtable Rtable--5cols Rtable--collapse">
											<div className="Rtable-row">
												<div className="Rtable-cell label-cell">venue</div>
												<div className="Rtable-cell info-cell">{event.venue.name}</div>
											</div>
											<div className="Rtable-row">
												<div className="Rtable-cell label-cell">city</div>
												<div className="Rtable-cell info-cell">{event.venue.city}</div>
											</div>
											<div className="Rtable-row">
												<div className="Rtable-cell label-cell">country</div>
												<div className="Rtable-cell info-cell">{event.venue.country}</div>
											</div>
											<div className="Rtable-row">
												<div className="Rtable-cell label-cell">date</div>
												<div className="Rtable-cell info-cell">
													<FormattedDate
														year='numeric'
														month='long'
														day='2-digit'
														value={event.datetime}
													/>
												</div>
											</div>
										</div>
									);
								})
								: null
						)}
						</div>
					</ResultInfo>

				</ResultDetails>
			</ResultWrapper>
		);
	}
}

ResultBox.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ResultBox;
