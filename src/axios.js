import Axios from 'axios';
import { API_KEY } from '@env';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  params: {
    api_key: API_KEY,
  },
});


export default axios;