import Axios from 'axios';


const axios = Axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    timeout: 10000,
    params: {
        api_key: "acea91d2bff1c53e6604e4985b6989e2",
    },
});


export default axios;