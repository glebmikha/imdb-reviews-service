import React, { Component } from 'react';
import { fetchSentiment } from '../actions';
import { connect } from 'react-redux';

class InputGroup extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(term) {
    this.setState({term});
  }

  onButtonClick(term) {
    console.log(term);
    this.props.fetchSentiment(term);
    this.setState({term: ''})
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.fetchSentiment(this.state.term);
      this.setState({term: ''});
    }
  }

  render() {
    return (
      <div className='searchContainer'>
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
          type="text"
          className="searchBox"
          placeholder="Paste your review..."
          onKeyPress={this._handleKeyPress}
        />

        <input
          onClick={() => this.onButtonClick(this.state.term)}
          className="searchButton"
          type="submit"
          value="Get sentiment"
        />
      </div>
    )
  }
}

export default connect(null, { fetchSentiment })(InputGroup);
