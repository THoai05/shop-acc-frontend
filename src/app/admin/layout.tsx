import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl mb-6">Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li><Link href="/admin/accounts">Quản lý Acc</Link></li>
                        <li><Link href="/admin/games">Quản lý Game</Link></li>
                        <li><Link href="/admin/orders">Quản lý Đơn hàng</Link></li>
                        <li><Link href="/admin/users">Quản lý User</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-grow p-6 bg-gray-100">{children}</main>
        </div>
    );
}
