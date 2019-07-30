import React from 'react';
import './Catalog.scss';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const Catalog = props => {
  const enemyCards = props.enemies.map(enemy => {
    return <Card key={enemy.name} {...enemy} />;
  });

  return <section className="catalog">{enemyCards}</section>;
};

const mapStateToProps = state => ({
  enemies: state.enemies
});

export default connect(mapStateToProps)(Catalog);
