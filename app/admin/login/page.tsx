"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // 🔥 REQUIRED
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
      router.refresh(); // 🔥 forces navbar to re-read cookie
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-[360px] bg-white p-6 rounded-xl border border-[#E6E8EC]"
      >
        <h1 className="text-[20px] font-semibold text-[#23262F] mb-2">
          Admin Login
        </h1>

        <p className="text-[14px] text-[#777E90] mb-6">
          Enter your credentials to access the dashboard
        </p>

        <label className="block text-[14px] font-medium mb-1 text-black">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[44px] px-3 mb-4 border rounded-lg text-[#0C0C13]"
        />

        <label className="block text-[14px] font-medium mb-1 text-black">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[44px] px-3 mb-4 border rounded-lg text-[#0C0C13]"
        />

        {error && (
          <p className="text-[13px] text-red-500 mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full h-[44px] bg-[#23262F] text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
