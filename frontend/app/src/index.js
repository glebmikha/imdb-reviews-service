import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import PostIndex from './components/post_index';
import InputGroup from './components/input_group';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <InputGroup />
        <PostIndex />
        <div className="lowopacity"><strong>Try to copy this:</strong> The one actor that gave this reviewer
          pause was Anne Hathaway as Selina Kyle. She has historically
          been typecast as the girl next door, so it was a shock to watch
          her steal and fight her way through the City of Gotham. After a
          few scenes, however, we were convinced that the casting decisions
          was a good one, as Hathaway portrayed the darker Catwoman role brilliantly</div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
