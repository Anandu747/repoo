import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/app/lib/auth";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isLoggedIn = isAdminLoggedIn();

  if (!isLoggedIn) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      {children}
    </div>
  );
}
