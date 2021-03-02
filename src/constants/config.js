import axios from 'axios';
import envioroments from './enviroments';

const http = () =>  {
    let baseURL = envioroments.apiUrl;

    const client = axios.create({ 
        baseURL,
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    client.interceptors.request.use(config => { 
        return config;
    }, err => { 

    });

    return client;
}

export default http();