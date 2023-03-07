import axios from "axios";

const dataAPIClient = axios.create({
    baseURL: "https://swapi.dev/api",
});

dataAPIClient.interceptors.response.use(
    (response) => {
        console.log("Data API: ", response);
        return response;
    },
    (error) => {
        console.log("Data API Error: ", error);
        return Promise.reject(error);
    }
);

export default dataAPIClient;
