import axios from 'axios';

export const FETCH_SENTIMENT = 'FETCH_SENTIMENT';
const BASE_URL = 'http://localhost:5000';

export function fetchSentiment(text) {
  console.log('action',text);
  const values = {text: text}

  const request = axios.post(`${BASE_URL}/predict`, values)

  return {
    type: FETCH_SENTIMENT,
    payload: request
  }
}
