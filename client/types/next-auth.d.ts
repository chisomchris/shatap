import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
    } & DefaultSession["user"];
    accessToken: string | null;
    refreshToken: string | null;
    error: "RefreshAccessTokenError" | null;
  }
  interface User {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    error: "RefreshAccessTokenError" | null;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}
