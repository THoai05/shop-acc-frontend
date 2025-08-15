import api from "../lib/api";

export const getAccounts = async () => {
    const token = localStorage.getItem("token");
    const res = await api.get("/accounts", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return res.data;
};

export async function CreateAccount(data: any) {
    const token = localStorage.getItem("token");
    return await api.post("/accounts", data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
}

export async function EditAccount(id: number, data: any) {
    const token = localStorage.getItem("token");
    return api.put(`/accounts/${id}`, data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
}

export async function DeleteAccount(id: number, data: any) {
    const token = localStorage.getItem("token");
    return await api.delete(`/accounts/${id}`, {
        data: data,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}