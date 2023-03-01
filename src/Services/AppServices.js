import axios from 'axios';
 

const END_POINTAPI = `${process.env.REACT_APP_API_BASE_URL}`

const instance = axios.create({
  baseURL: END_POINTAPI,
  timeout: 50000, 
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'mode': "no-cors",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return {
    ...config,
    headers: {
      Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null,
    },
  };
});

const responseBody = (response) => response.data;

export const AppServices = {
  get: (url) => instance.get(END_POINTAPI + url).then(responseBody),

  post: (body, url) => instance.post(END_POINTAPI + url, body).then(responseBody),

  put: (body, url) => instance.put(END_POINTAPI + url, body).then(responseBody),

  patch: (body, url) => instance.patch(END_POINTAPI + url, body).then(responseBody),

  delete: (body, url) => instance.delete(END_POINTAPI + url, body).then(responseBody),
};

export const GlobalManagement = {
  set: (key, val) => localStorage.setItem(key, val) 
}

export default AppServices;
