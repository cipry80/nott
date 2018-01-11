import request from 'superagent';

const Helpers = {};

const unauthorizedRequest = request => {
  request.on('response', res => {
    if (res.status === 401 || res.status === 403) {
      localStorage.clear();
      window.location = '/login';
    }
  });
};

const noData = ['get', 'delete'];
const data = ['post', 'put'];

noData.forEach(el => {
  Helpers[el] = (url, headers = {}, token = true) => {
    let defaultHeaders = {
      Accept: 'application/json'
    };

    if (token) {
      let token = localStorage.getItem('token') || null;
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    return request[el](url)
      .use(unauthorizedRequest)
      .set(Object.assign({}, defaultHeaders, headers));
  };
});

data.forEach(el => {
  Helpers[el] = (url, headers = {}, data, token = true) => {
    let defaultHeaders = {
      Accept: 'application/json'
    };

    if (token) {
      let token = localStorage.getItem('token') || null;
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    return request[el](url)
      .use(unauthorizedRequest)
      .set(Object.assign({}, defaultHeaders, headers))
      .send(data);
  };
});

export default Helpers;
