import Axios from 'axios';


const axios = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 10000,
    params: {
        api_key: "acea91d2bff1c53e6604e4985b6989e2",
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