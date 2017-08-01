import { combineReducers } from 'redux';
import { TOGGLE_LIGHTS } from './actions';

function lights(state = {}, action) {
  switch (action.type) {
  case TOGGLE_LIGHTS:
    return {
      ...state,
      lightsOn: !state.lightsOn
    };
  default:
    return state;
  }
}

const smartHome = combineReducers({
  lights
});

export default smartHome;
