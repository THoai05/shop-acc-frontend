import axios from "axios";
//tạo instance Axios
const api = axios.create({
    baseURL: "http://localhost:8000/api", // URL Laravel API
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, //allow to send cookie if be use cookie
});

//Interceptor để xử lý lỗi
// api.interceptors.response.use(response => response,
//     error => {
//         if (error.response?.status === 401) {
//             window.location.href = "/auth";
//         }
//         return Promise.reject(error);
//     }
// );

export default api;
