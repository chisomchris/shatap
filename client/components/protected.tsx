import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const Protected = async ({ children }: PropsWithChildren) => {
  const headersList = headers();
  const redirect_url = decodeURIComponent(headersList.get("x-url") || "/");

  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(`/auth/login?redirect_uri=${redirect_url}`);
  }
  return <>{children}</>;
};
