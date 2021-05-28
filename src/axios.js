import Axios from 'axios';
import { API_KEY } from '@env';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  params: {
    api_key: API_KEY,
  },
});

/*
  DEBUGGING ONLY
*/

// axios.interceptors.request.use(
//     (req) => {
//         console.log("Request >");
//         console.log(req);
//         return req;
//     },
//     (error) => {
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     (res) => {
//         console.log("Response >");
//         console.log(res);
//         return res;
//     },
//     (error) => {
//         console.log(error);
//         return Promise.reject(error);
//     }
// );


export default axios;