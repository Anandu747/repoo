"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavbarClient({ loggedIn }: { loggedIn: boolean }) {
  return (
    <header className="w-full bg-[#F9F9F9] border-b border-[#00000008]">
      <div className="h-[96px] py-4">
        <nav className="max-w-[1300px] h-[64px] mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-64.png" alt="Reppoo" width={30} height={30} />
            <span className="text-[24px] font-semibold text-[#0C0C13]">
              Reppoo
            </span>
          </div>

          {/* Right side */}
          {!loggedIn ? (
            <Link
              href="/admin/login"
              className="px-8 py-3 rounded-full border bg-white text-sm font-medium text-[#0C0C13]"
            >
              Admin Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="flex items-center gap-3">
                <Image
                  src="/images/avatar.png"
                  alt="Admin"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#0C0C13]">Edgar Thompson</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
              </Link>

              {/* ✅ CORRECT LOGOUT */}
              <Link
                href="/admin/logout"
                className="px-6 h-[44px] flex items-center rounded-full border border-[#3772FF] text-[#3772FF] font-medium"
              >
                Logout
              </Link>
            </div>
          )}

        </nav>
      </div>
    </header>
  );
}
