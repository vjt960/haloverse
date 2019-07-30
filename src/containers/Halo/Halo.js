import React, { Component } from 'react';
import './Halo.scss';
import { Showcase } from '../Showcase/Showcase';
import { connect } from 'react-redux';
import { Loading } from '../../components/Loading/Loading';
import Catalog from '../Catalog/Catalog';
import { getEnemies } from '../../utils/apiCalls';
import { formatEnemies } from '../../utils/cleaner';
import { storeEnemies } from '../../actions';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Halo);
