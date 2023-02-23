import flats from '../../data/flats';

export function setFlats() {
  // API call
  return {
    type: 'SET_FLATS',
    payload: flats
  }
}
