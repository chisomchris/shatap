import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Login } from "./login";
import { getCsrfToken } from "next-auth/react";
import { getUrl } from "@/lib/url";

export const metadata = {
  title: "Shatapp | Login",
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const [, urlObj] = getUrl();
  const { search } = urlObj;
  const searchParams = new URLSearchParams(search);
  const redirect_uri = searchParams.get("redirect_uri");
  if (session) {
    return redirect("/");
  }
  const csrfToken = await getCsrfToken();
  return <Login callback_url={redirect_uri} csrfToken={csrfToken} />;
}
