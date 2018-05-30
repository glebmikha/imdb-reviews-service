import axios from 'axios';

export const FETCH_SENTIMENT = 'FETCH_SENTIMENT'


export function fetchSentiment(text) {
  console.log('action',text);
  const values = {text: text}

  const request = axios.post('http://localhost:5000/predict', values)

  return {
    type: FETCH_SENTIMENT,
    payload: request
  }
}
