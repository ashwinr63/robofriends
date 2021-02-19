import React from 'react';
import Card from './Card';

	const CardList = ( { robots }) => {
		// if (true) {
		// 	throw new Error ('Nooooooo!');
		// }
		return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={i}
							id={robots[i].id}
							title={robots[i].title}
							completed={robots[i].completed} />
					);
				})
			}
		</div>

	);
}

export default CardList;