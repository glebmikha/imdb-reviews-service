import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SentimentIndex extends Component {

  renderSentiments() {

    return _.map(this.props.sentiments, sentiment => {
      return (
                
        <tr className={sentiment.sign==='+' ? 'green' : 'red'}
          key={sentiment.id}>
          <td>{sentiment.text}</td>
          <td>{sentiment.sentiment}</td>
          <td><h1>{sentiment.sign}</h1></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='results-group'>
        {!this.props.sentiments.length > 0 ?
          <div className="lowopacity"><strong>Try to copy this: </strong>The one actor that gave this reviewer pause was Anne Hathaway
            as Selina Kyle. She has historically been typecast as the girl next door,
            so it was a shock to watch her steal and fight her way through the City of Gotham.
            After a few scenes, however, we were convinced that the casting decisions was a
            good one, as Hathaway portrayed the darker Catwoman role brilliantly</div>
            :
              <table>
                <colgroup>
                  <col className='sentiment'/>
                  <col className='prob'/>
                  <col className='sign'/>
                </colgroup>
                <tbody>
                  {this.renderSentiments()}
                </tbody>
              </table>
        }
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { sentiments: state.sentiments }
}

export default connect(mapStateToProps)(SentimentIndex);
