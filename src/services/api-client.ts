import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

//This is the API client we are creating using create() method, and we can use this client to make all HTTP requests.
//With this configuration, this key will be included in query string of every request, we send to backend, via axios
const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '0c8bec16e9e241cca20958d0a2ef7ab9'
    }
})

export default apiClient;