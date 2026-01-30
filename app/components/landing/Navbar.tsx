import NavbarClient from "./NavbarClient";
import { isAdminLoggedIn } from "@/app/lib/auth";

export default async function Navbar() {
  const loggedIn = await isAdminLoggedIn(); 
  return <NavbarClient loggedIn={loggedIn} />;
}
