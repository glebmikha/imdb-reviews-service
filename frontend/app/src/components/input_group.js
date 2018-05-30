import React, { Component } from 'react';
import { fetchSentiment } from '../actions';
import { connect } from 'react-redux';

class InputGroup extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
  }

  onButtonClick(term) {
    console.log(term);
    this.props.fetchSentiment(term);
  }

  render() {
    return (
      <div className="input-group">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          type="text" className="form-control space-right"/>
        <span className="input-group-btn">
            <button
              onClick={() => this.onButtonClick(this.state.term)}
                className="btn btn-success" type="button">Get sentiment</button>
        </span>
      </div>
    )
  }
}

export default connect(null, { fetchSentiment })(InputGroup);