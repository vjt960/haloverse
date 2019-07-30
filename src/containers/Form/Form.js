import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  storeUser,
  storeSpartan,
  storeEmblem,
  storeStats,
  hasErrored,
  clearError,
  userLoading,
  userLoaded
} from '../../actions';
import { getSpartanImg, getEmblem, getStats } from '../../utils/apiCalls';
import { formatStats } from '../../utils/cleaner';
import { Loading } from '../../components/Loading/Loading';
import PropTypes from 'prop-types';
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
    const {
      storeSpartan,
      storeEmblem,
      storeStats,
      hasErrored,
      clearError,
      userLoading,
      userLoaded
    } = this.props;
    userLoading();
    try {
      const spartanURL = await getSpartanImg(gamertag);
      const emblemURL = await getEmblem(gamertag);
      const stats = await getStats(gamertag);
      storeSpartan(spartanURL);
      storeEmblem(emblemURL);
      storeStats(formatStats(stats));
      clearError();
    } catch (error) {
      hasErrored(error.message);
    }
    userLoaded();
  };

  clearInput = () => {
    this.setState({ gamertag: '' });
  };

  render() {
    return (
      <form className="form_gamertag-form">
        <legend>SEARCH HALO LEGACY</legend>
        {this.props.userIsLoading && <Loading target="catalog" />}
        <p className="error-message">{this.props.error}</p>
        {!this.props.userIsLoading && (
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
        )}
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  userIsLoading: state.userIsLoading
});

export const mapDispatchToProps = dispatch => ({
  storeUser: gamertag => dispatch(storeUser(gamertag)),
  storeSpartan: url => dispatch(storeSpartan(url)),
  storeEmblem: url => dispatch(storeEmblem(url)),
  storeStats: stats => dispatch(storeStats(stats)),
  hasErrored: message => dispatch(hasErrored(message)),
  clearError: () => dispatch(clearError()),
  userLoading: () => dispatch(userLoading()),
  userLoaded: () => dispatch(userLoaded())
});

Form.propTypes = {
  error: PropTypes.string.isRequired,
  userIsLoading: PropTypes.bool.isRequired,
  storeUser: PropTypes.func.isRequired,
  storeSpartan: PropTypes.func,
  storeEmblem: PropTypes.func,
  storeStats: PropTypes.func,
  hasErrored: PropTypes.func,
  clearError: PropTypes.func,
  userLoading: PropTypes.func,
  userLoaded: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
