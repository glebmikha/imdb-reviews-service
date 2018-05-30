import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {

  renderSentiments() {
    return _.map(this.props.sentiments.sentiments, sentiment => {
      return (
        <li className="list-group-item" key={sentiment.id}>
          {sentiment.text}
          <span> {sentiment.sentiment}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderSentiments()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sentiments: state.sentiments}
}

export default connect(mapStateToProps)(PostIndex);
