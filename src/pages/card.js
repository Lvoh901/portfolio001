// Card.js
import React from 'react';

function Card(props) {
  const { title, number } = props;

  return (
    <div className="skill">
      <p className="number">{number}</p>
      <h5 className="card-title">{title}</h5>
    </div>
  );
}

export default Card;
