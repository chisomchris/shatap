import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Login } from "./login";
import { getCsrfToken } from "next-auth/react";

export const metadata = {
  title: "Shatapp | Login",
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  const csrfToken = await getCsrfToken();
  return <Login csrfToken={csrfToken} />;
}
