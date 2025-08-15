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

export async function EditAccount(data: any) {
    return await api.put("/accounts", data);
}

export async function DeleteAccount(data: any) {
    return await api.delete("/accounts", data);
}