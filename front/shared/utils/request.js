import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL
});

const request = function({
  ...options
}) {
  const onSuccess = function(response) {
    return response;
  }

  const onError = function(error) {
    const { response } = error;
    return Promise.reject(response.data && response.data.message ? response.data : error);
  }

  const headers = { 'Content-Type': 'application/json' };
    return client({
      method: 'get',
      headers: headers,
      ...options,
    })
    .then(onSuccess)
    .catch(onError);
}

export default request;