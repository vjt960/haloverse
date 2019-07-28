import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          border: '1px solid magenta',
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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  maps: state.maps
});

export default connect(mapStateToProps);
