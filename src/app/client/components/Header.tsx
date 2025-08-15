"use client";
import Link from "next/link";
import Logo from "./Logo";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 bg-gradient-to-r from-orange-400 to-pink-400 shadow-md min-h-[64px] relative">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-6 relative">

        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden md:flex relative group right-100">
          <span className="flex cursor-pointer text-xl text-black items-center gap-2">
            <p className="text-xl text-black font-semibold">☰</p> <p className="text-xl text-black font-semibold">Danh mục</p>
          </span>
          <ul className="absolute left-0 top-full mt-6 bg-white text-black py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex gap-6 whitespace-nowrap">
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/client">Trang chủ</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/nap-the">Nạp thẻ</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/nap-atm">Nạp ATM</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/mua-acc">Mua Acc</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/tin-tuc">Tin Tức</Link></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          <li className="w-8 h-8 flex items-center justify-center rounded hover:bg-white transition">
            <Link href="/gio-hang">
              <FaShoppingCart size={22} className="text-black hover:text-black transition" />
            </Link>
          </li>
          <li className="px-4 py-1 rounded-lg hover:bg-white transition">
            <Link href="/auth" className="text-black">Đăng nhập</Link>
          </li>
        </ul>

        {/* Desktop Dropdown menu */}

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white top-full left-0 shadow-lg z-40">
          <ul className="flex flex-col p-4 gap-2 text-black">
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/client">Trang chủ</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/nap-the">Nạp thẻ</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/nap-atm">Nạp ATM</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/mua-acc">Mua Acc</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/tin-tuc">Tin Tức</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2">
              <FaShoppingCart size={20} /> <Link href="/gio-hang">Giỏ hàng</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200"><Link href="/auth">Đăng nhập</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
