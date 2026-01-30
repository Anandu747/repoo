"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin() {
  const cookieStore = await cookies();

  cookieStore.set("admin-auth", "true", { path: "/" });


  redirect("/admin/dashboard");
}
