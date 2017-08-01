import { connect } from 'react-redux';
import { toggleLights } from '../redux/actions';
import Lights from '../components/Lights';

const mapStateToProps = (state) => {
  return {
    lightsOn: state.lightsOn;
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleLights: (lightsOn) => {
      dispatch(toggleLights(lightsOn));
    }
  };
};

const ContainerLights = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lights);

export default ContainerLights;