"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Logo / brand */}
                <div className="flex flex-col">
                    <div className="flex flex-col justify-end">
                        <img src="/images/logo.png" alt="Logo" className="w-[80px] h-[45px]" />
                    </div>
                    <p className="text-gray-400 mt-1">© 2025 MyWebsite. All rights reserved.</p>
                </div>

                {/* Navigation links */}
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/" className="hover:!text-orange-400 transition">Trang chủ</Link>
                    <Link href="/nap-the" className="hover:!text-orange-400 transition">Nạp thẻ</Link>
                    <Link href="/mua-acc" className="hover:!text-orange-400 transition">Mua Acc</Link>
                    <Link href="/tin-tuc" className="hover:!text-orange-400 transition">Tin tức</Link>
                </div>

                {/* Social icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:!text-orange-400 transition">Facebook</a>
                    <a href="#" className="hover:!text-orange-400 transition">Twitter</a>
                    <a href="#" className="hover:!text-orange-400 transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
