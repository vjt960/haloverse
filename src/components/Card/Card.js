import React from 'react';
import './Card.scss';

export const Card = ({ name, faction, image }) => {
  return (
    <article className="card">
      <header className="card_header">{name}</header>
      <img className="card_image" src={image} alt={name} />
      <footer className="card_footer">{faction}</footer>
    </article>
  );
};
