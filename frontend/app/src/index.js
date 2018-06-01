import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import SentimentIndex from './components/sentiment_index';
import InputGroup from './components/input_group';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

      <div>
        <InputGroup />
        <SentimentIndex />
      </div>

  </Provider>
  , document.querySelector('.container'));
