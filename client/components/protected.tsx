import { authOptions } from "@/lib/auth";
import { getUrl } from "@/lib/url";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const Protected = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  const [callback_url] = getUrl();
  if (!session) {
    return redirect(
      "/auth/login?redirect_uri=" + encodeURIComponent(callback_url)
    );
  }
  return <>{children}</>;
};
