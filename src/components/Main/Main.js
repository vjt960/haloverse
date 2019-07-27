import React from 'react';
import { connect } from 'react-redux';
import { Showcase } from '../../containers/Showcase/Showcase';
// import Form from '../../containers/Form/Form';
// import Profile from '../../containers/Profile/Profile';

export const Main = props => {
  if (props.maps.length) {
    console.log(props);
  }
  return (
    <main>
      {props.maps.length && <Showcase maps={props.maps} />}
      <h2>Footer</h2>
      {/* <Form /> */}
      {/* <Profile /> */}
    </main>
  );
};

const mapStateToProps = state => ({
  maps: state.maps
});

export default connect(mapStateToProps)(Main);
