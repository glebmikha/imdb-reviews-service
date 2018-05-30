import { FETCH_SENTIMENT } from '../actions';
import _ from 'lodash';

const initialState = {sentiments: [
//   {
//     sentiment: "0.96161",
//     text: "I liked this movie very much. It's a great movie"
// }
]}

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_SENTIMENT:
      console.log('reducer',action.payload);
      return {
        ...state,
        sentiments: [...state.sentiments, action.payload.data]
      }
    default: return state
  }
}
