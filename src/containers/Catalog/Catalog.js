import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from '../../components/Card/Card';
import './Catalog.scss';

export const Catalog = props => {
  const enemyCards = props.enemies.map(enemy => {
    return <Card key={enemy.name} {...enemy} />;
  });

  return <section className="catalog">{enemyCards}</section>;
};

const mapStateToProps = state => ({
  enemies: state.enemies
});

Catalog.propTypes = {
  enemies: PropTypes.array.isRequied
};

export default connect(mapStateToProps)(Catalog);
