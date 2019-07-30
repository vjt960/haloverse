import React from 'react';
import './Loading.scss';

export const Loading = props => {
  return (
    <section className={`loading-${props.target}`}>
      <h5 className="loading-message">Loading . . .</h5>
    </section>
  );
};
