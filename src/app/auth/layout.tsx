// src/app/auth/layout.tsx
"use client";
import { useEffect } from 'react';
import './auth.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        document.body.classList.add('auth-body');
        return () => {
            document.body.classList.remove('auth-body');
        };
    }, []);

    return <>{children}</>;
}
