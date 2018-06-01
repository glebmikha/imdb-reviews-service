import { combineReducers } from 'redux';
import SentimentReducer from './reducer_sentiment';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  sentiments: SentimentReducer,
});

export default rootReducer;
