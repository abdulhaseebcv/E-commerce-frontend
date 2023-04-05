import axios from 'axios'
import { server_api } from './Constants'

const instance = axios.create({
    baseURL: server_api
});

export default instance