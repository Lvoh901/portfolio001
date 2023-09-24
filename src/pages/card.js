// Card.js
import React from 'react';

function Card(props) {
  const { title, description, imageSrc } = props;

  return (
    <div className="card skill">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
