/*
 * action types
 */


export const TOGGLE_LIGHTS = 'TOGGLE_LIGHTS';

/*
 * action creators
 */

export function toggleLights(lightsOn) {
  return { type: TOGGLE_LIGHTS, lightsOn };
}
