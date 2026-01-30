"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // 🔥 REQUIRED
      });

      router.push("/");
      router.refresh(); // 🔥 re-render navbar
    }

    logout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-gray-500">Logging out…</p>
    </div>
  );
}
