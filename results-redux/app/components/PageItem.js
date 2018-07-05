import React from 'react';
import PropTypes from 'prop-types';
import { ResultWrapper, ResultImages, Image, ResultDetails, ResultInfo, ResultsTitleWrapper } from './PageItem.styles';

/**
 * @class
 * @classdesc Item component for showing result records
 */
const PageItem = ({ jokes, onHandleSelectJoke }) => (
	<div>
		<ResultsTitleWrapper>
			<h2> Search Results </h2>

			<span>Total results found: <strong>{jokes.length}</strong></span>
		</ResultsTitleWrapper>

		<div>
			{jokes.map((joke, i) => (
				<ResultWrapper className={'result-wrapper'} key={joke.id}>
					<ResultImages>
						<Image src={joke.icon_url} />
					</ResultImages>

					<ResultDetails>
						<ResultInfo>
							<h3>{`${joke.value.substring(0, 50)}...`}</h3>
							<button
								onClick={onHandleSelectJoke.bind(this, joke)}
							>
								View Details
							</button>
						</ResultInfo>
					</ResultDetails>
				</ResultWrapper>
			))}
		</div>
	</div>
);

PageItem.propTypes = {
	jokes: PropTypes.array.isRequired,
	onHandleSelectJoke: PropTypes.func.isRequired,
};

export default PageItem;
