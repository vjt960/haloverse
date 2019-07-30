import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Showcase.scss';

export class Showcase extends Component {
  constructor(props) {
    super();
    this.state = {
      mapName: '',
      mapURL: '',
      description: '',
      index: Math.floor(Math.random() * Math.floor(props.maps.length))
    };
  }

  componentDidMount() {
    this.setState({
      mapName: this.props.maps[this.state.index].name,
      mapURL: this.props.maps[this.state.index].imageUrl,
      description: this.props.maps[this.state.index].description
    });
  }

  render() {
    return (
      <section
        className="main_showcase"
        style={{
          height: '70vh',
          width: '100%',
          backgroundImage: 'url(' + this.state.mapURL + ')',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover'
        }}
      >
        <p className="main_showcase--map-title">{this.state.mapName}</p>
        <p className="main_showcase--map-description">
          {this.state.description}
        </p>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  maps: state.maps
});

Showcase.propTypes = {
  isLoading: PropTypes.bool,
  maps: PropTypes.array.isRequired
};

export default connect(mapStateToProps);
