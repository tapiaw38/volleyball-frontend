
import axios from "axios";

const authApi = axios.create({
    //baseURL: "https://agrapi.com.ar/api"
    baseURL: "https://deportivapi.com.ar/api"
});

export default authApi;