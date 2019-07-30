import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from '../../components/Card/Card';
import './Catalog.scss';

export const Catalog = props => {
  const enemyCards = props.enemies.map(enemy => {
    return <Card key={`${enemy.name}-${Date.now()}`} {...enemy} />;
  });

  return <section className="catalog">{enemyCards}</section>;
};

export const mapStateToProps = state => ({
  enemies: state.enemies
});

Catalog.propTypes = {
  enemies: PropTypes.array
};

export default connect(mapStateToProps)(Catalog);
