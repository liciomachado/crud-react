import axios from 'axios';

/**
 * Instância da biblioteca Axios para fazer requisições http na api; 
 */
const axiosInstance = axios.create({
    baseURL: 'https://localhost:44300/api/v1/',
});

export { axiosInstance };
