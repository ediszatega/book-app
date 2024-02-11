import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://www.dbooks.org/api/",
});

export default axiosClient;
