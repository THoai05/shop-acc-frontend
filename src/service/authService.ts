import api from "../lib/api";

export async function registerUser(data: any) {
    const res = await api.post("/register", data, { withCredentials: true });
    return res.data;
}

export async function loginUser(data: { username: string; password: string }) {
    const res = await api.post("/login", data);

    localStorage.setItem("token", res.data.token);
    return res.data;
}

export async function logoutUser() {
    await api.post("/logout");
}
