"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import axios from "axios";
import { env } from "@/lib/env";

export const LogoutButton = () => {
  const { data: session } = useSession();
  const logOut = async () => {
    try {
      await axios.get(
        `${env.API_BASE_URL}/v1/logout?refresh_token=${session?.refreshToken}`
      );
      await signOut();
    } catch (error) {
      // console.log(error);
    }
  };
  return <Button onClick={logOut}>Logout</Button>;
};
