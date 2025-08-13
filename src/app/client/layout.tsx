import { ReactNode } from 'react';
import Link from 'next/link';

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <Link href="/">Shop Acc</Link>
                    <div>
                        <Link href="/login" className="mr-4">Đăng nhập</Link>
                        <Link href="/register">Đăng ký</Link>
                    </div>
                </nav>
            </header>
            <main className="container mx-auto p-4">{children}</main>
            <footer className="text-center p-4 text-gray-500">
                © 2025 Shop Acc
            </footer>
        </>
    );
}
