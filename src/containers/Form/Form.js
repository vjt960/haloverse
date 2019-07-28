import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeUser } from '../../actions';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      gamertag: ''
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(event);
    this.props.storeUser(this.state.gamertag);
    this.clearInput();
  }

  clearInput() {
    this.setState({ gamertag: '' });
  }

  render() {
    return (
      <form className="form_gamertag-form">
        <legend>SEARCH HALO LEGACY</legend>
        <input
          type="text"
          name="gamertag"
          placeholder="Enter Xbox Gamertag"
          value={this.state.gamertag}
          onChange={event => this.handleChange(event)}
          className="gamertag-input"
        />
        <input
          type="submit"
          value="SUBMIT"
          onClick={event => this.handleSubmit(event)}
          className="gamertag-submit"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  storeUser: gamertag => dispatch(storeUser(gamertag))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
