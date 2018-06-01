import { FETCH_SENTIMENT } from '../actions';
import _ from 'lodash';

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_SENTIMENT:
      return [action.payload.data, ...state]
    default: return state
  }
}
