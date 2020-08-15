import React from 'react';

const Card = ({name, avgWeeklyEarnings, challengeId}) => {
	return (
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${challengeId}?100x100`} />
		<div>
			<h3>{name}</h3>
			<p>{avgWeeklyEarnings}</p>
		</div>
	</div>
	);
}
export default Card;