
import axios from "axios";

const authApi = axios.create({
    baseURL: "https://deportivapi.com.ar/api"
    //baseURL: "http://localhost:8000/api"
});

export default authApi;