import React from 'react';
import Card from './Card';

const CardList = ({ challenges }) => {
		
	return(
		<div>
		{
			challenges.map((challenge, i) => {
		return 	(
			<Card 
			key={challenges[i].challengeId} 
			challengeId={challenges[i].challengeId}
			name={challenges[i].challengeName} 
			avgWeeklyEarnings={challenges[i].challengeAverageWeeklyEarnings}
			/>
			);
		})	

		}
		</div>
	);
}
export default CardList;