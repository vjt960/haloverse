import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  storeUser,
  storeSpartan,
  storeEmblem,
  storeStats
} from '../../actions';
import { getSpartanImg, getEmblem, getStats } from '../../utils/apiCalls';
import { formatStats } from '../../utils/cleaner';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      gamertag: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(event);
    this.props.storeUser(this.state.gamertag);
    this.loadProfile(this.state.gamertag);
    this.clearInput();
  };

  loadProfile = async gamertag => {
    const { storeSpartan, storeEmblem, storeStats } = this.props;
    const spartanURL = await getSpartanImg(gamertag);
    const emblemURL = await getEmblem(gamertag);
    const stats = await getStats(gamertag);
    storeSpartan(spartanURL);
    storeEmblem(emblemURL);
    storeStats(formatStats(stats));
  };

  clearInput = () => {
    this.setState({ gamertag: '' });
  };

  render() {
    return (
      <form className="form_gamertag-form">
        <legend>SEARCH HALO LEGACY</legend>
        <div className="form_input-container">
          <input
            type="text"
            name="gamertag"
            placeholder="Enter Xbox Gamertag"
            value={this.state.gamertag}
            onChange={event => this.handleChange(event)}
            className="gamertag-input"
          />
          <button
            onClick={event => this.handleSubmit(event)}
            className="gamertag-submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  storeUser: gamertag => dispatch(storeUser(gamertag)),
  storeSpartan: url => dispatch(storeSpartan(url)),
  storeEmblem: url => dispatch(storeEmblem(url)),
  storeStats: stats => dispatch(storeStats(stats))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
