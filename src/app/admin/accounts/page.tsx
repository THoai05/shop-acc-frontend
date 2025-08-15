"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAccounts, CreateAccount, EditAccount, DeleteAccount } from "@/service/accountService";
import { FormEvent } from "react";
import { Toast } from "primereact/toast";
import { useRef } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Dropdown } from "primereact/dropdown";
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';               // Core
import 'primeicons/primeicons.css';

interface account {
    id: number,
    game_id: number,
    username: string,
    password: string,
    registe_type: string,
    price: number,
    status: string,
}

export default function AccountPage() {
    const router = useRouter();
    const [accounts, setAccounts] = useState<account[]>([]);
    const [gameID, setGameID] = useState('');
    const toast = useRef<Toast>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [price, setPrice] = useState('');
    const [registerType, setRegisterType] = useState('');
    const [status, setStatus] = useState('available');
    const [selectedAccount, setSelectedAccount] = useState<account | null>(null);
    const statuses = [
        { label: 'Available', value: "available" },
        { label: 'Sold', value: "sold" }
    ]
    const FetchAccount = async () => {
        try {
            const data = await getAccounts();
            setAccounts(data);
        } catch (error) {
            console.log("Error:", error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: "failed to fetch accounts" });
        }
    }
    useEffect(() => {
        FetchAccount();
    }, [])

    const handleSubmit = async () => {
        try {
            const res = await CreateAccount({
                game_id: Number(gameID),
                username,
                password,
                register_type: registerType,
                price: Number(price),
                status
            });

            if (res.status === 201) {
                toast.current?.show({ severity: 'success', summary: 'Success', detail: "Create account successfull" });
                setGameID('');
                setUsername('');
                setPassword('');
                setPrice('');
                setRegisterType('');
                setStatus('available');
                await FetchAccount();
            }
        } catch (error) {
            console.error("Error:", error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: "Failed to create account" })
        }
    }
    return (
        <>
            <Toast ref={toast} />
            <h1 className="text-2xl font-semibold">Quản lý Acc</h1>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="field">
                    <label htmlFor="cardProduct" className="block mb-2" >Game ID</label>
                    <InputText
                        id="gameID"
                        type="number"
                        value={gameID}
                        placeholder="Game ID"
                        onChange={(e) => {
                            setGameID(e.target.value)
                        }}
                    />

                </div>
                <div className="field">
                    <label htmlFor="Username" className="block mb-2">Username</label>
                    <InputText id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <InputText id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="register_type" className="block mb-2">Register type</label>
                    <InputText id="register_type" type="text" value={registerType} onChange={(e) => setRegisterType(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="price" className="block mb-2">Price</label>
                    <InputText id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="status" className="block mb-2">Status</label>
                    <Dropdown id="status" value={status} options={statuses} onChange={(e) => setStatus(e.value)} placeholder="Select Status" />
                </div>
                <motion.div className="field mt-5" whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <Button label="Create Stock Card" onClick={handleSubmit} className="transition transform  hover:shadow-lg duration-300" />
                </motion.div>
            </div>
            <div className="rounded">
                <h1 className="text-xl font-sold mt-5">Accounts List</h1>
                <DataTable value={accounts} selection={selectedAccount}
                    onSelectionChange={(e) => setSelectedAccount(e.value as account)}
                    selectionMode="single" className="p-datatable-sm shadow-md !rounded-lg hover:shadow-lg transition"
                    rowClassName={(rowData) => {
                        if (selectedAccount && selectedAccount.id === rowData.id) {
                            return "!bg-blue-100 cursor-pointer";
                        }
                        return "cursor-pointer"
                    }} >
                    <Column field="id" header="ID" />
                    <Column field="game_id" header="Game ID" />
                    <Column field="username" header="Username" />
                    <Column field="password" header="Password" />
                    <Column field="register_type" header="Register type" />
                    <Column field="status" header="Status" />
                    <Column field="price" header="Price" />
                </DataTable>
            </div>
        </>
    );
}