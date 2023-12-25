import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workinteck-fe-final.onrender.com",
});
export default axiosInstance;
