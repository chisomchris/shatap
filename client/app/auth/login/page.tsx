import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Login } from "./login";
import { getCsrfToken } from "next-auth/react";
import { headers } from "next/headers";

export const metadata = {
  title: "Shatapp | Login",
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const redirect_url = decodeURIComponent(headersList.get("x-url") || "/");

  if (session) {
    return redirect("/");
  }
  const csrfToken = await getCsrfToken();
  return <Login callback_url={redirect_url} csrfToken={csrfToken} />;
}
