<<<<<<< HEAD
import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const httpClient = axios.create({
    baseURL: baseURL,
    withCredentials: true
=======
import axios from "axios";

const httClient = axios.create({
    baseURL: 'http://localhost:8080'
>>>>>>> parent of 69de65b (Erro na pasta node_modules)
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httClient.post(requestUrl, objeto);
    }

    put(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httClient.put(requestUrl, objeto)
    }

    delete(url) {
        const requestUrl = `${this.apiurl}${url}`
        return httClient.delete(requestUrl)
    }

    get(url) {
        const requestUrl = `${this.apiurl}${url}`
        return httClient.get(requestUrl)
    }
}
export default ApiService;