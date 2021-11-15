import axios from "axios";

const instance = axios.create({
    baseURL: "https://datingg-app.herokuapp.com/"
});

export default instance;