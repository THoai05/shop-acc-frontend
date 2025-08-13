import api from "../lib/api";

export async function registerUser(data: any) {
    const res = await api.post("/register", data, { withCredentials: true });
    return res.data;
}

export async function loginUser(data: any) {
    const res = await api.post("/login", data, { withCredentials: true });
    return res.data;
}
