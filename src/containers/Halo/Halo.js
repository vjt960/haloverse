import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatEnemies } from '../../utils/cleaner';
import { getEnemies } from '../../utils/apiCalls';
import { Loading } from '../../components/Loading/Loading';
import { Showcase } from '../Showcase/Showcase';
import { storeEnemies } from '../../actions';
import Catalog from '../Catalog/Catalog';
import './Halo.scss';

export class Halo extends Component {
  componentDidMount = async () => {
    const { storeEnemies } = this.props;
    const data = await getEnemies();
    const enemies = formatEnemies(data);
    storeEnemies(enemies);
  };

  render() {
    return (
      <section>
        {this.props.maps.length ? (
          <Showcase maps={this.props.maps} />
        ) : (
          <Loading target="showcase" />
        )}
        <h2 className="enemies_banner">Hostiles</h2>
        {this.props.enemies.length ? <Catalog /> : <Loading target="catalog" />}
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  maps: state.maps,
  stats: state.stats,
  enemies: state.enemies
});

export const mapDispatchToProps = dispatch => ({
  storeEnemies: enemies => dispatch(storeEnemies(enemies))
});

Halo.propTypes = {
  maps: PropTypes.array.isRequired,
  stats: PropTypes.string.isRequired,
  enemies: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Halo);
