import axios from 'axios';

const init = () => {
  axios.defaults.baseURL = "http://35.225.41.97:5000/v1/";
  // axios.defaults.baseURL = "https://api.jceballos.com.co/api/";
  axios.defaults.withCredentials = true;
}


const get = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
}


const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
}


const api = {
  init,
  get,
  post,
}

export default api;