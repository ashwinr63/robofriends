import React from 'react';

const Card = ({title, completed, id}) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5'>
			<img src ={`https://robohash.org/${id}?100x100`} alt='robots' />
			<div>
				<h2>{title}</h2>
			    <p>{completed}</p>
			</div>
		</div>
	);
}

export default Card;