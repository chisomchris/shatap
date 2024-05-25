"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import axios from "axios";
import { env } from "@/lib/env";

export const LogoutButton = () => {
  const { data: session } = useSession();
  const logOut = async () => {
    axios
      .get(
        `${env.API_BASE_URL}/v1/logout?refresh_token=${session?.refreshToken}`
      )
      .then(() => signOut())
      .catch((err) => console.log(err));
  };
  return <Button onClick={logOut}>Logout</Button>;
};
