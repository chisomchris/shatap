import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "./env";
import { AuthOptions, Session, SessionStrategy, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import axios, { AxiosError } from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const { email, password } = credentials;
          const response = await axios.post(`${env.API_BASE_URL}/v1/login`, {
            email,
            password,
          });
          if (response.status !== 200) {
            return null;
          }
          return {
            id: response.data.id,
            email: response.data.email,
            name: response.data.username,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            accessTokenExpires: response.data.expiresIn,
          } as AdapterUser;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error(error?.response?.data);
          } else console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  //
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: AdapterUser | User }) => {
      if (user) {
        token.accessToken = user.accessToken || "";
        token.refreshToken = user.refreshToken || "";
        token.accessTokenExpires = user.accessTokenExpires || Date.now();
        token.id = user.id;
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      return await refreshAccessToken(token);
    },

    session: async ({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
      user: AdapterUser;
    }) => {
      if (session) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.error = token.error;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
} satisfies AuthOptions;

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token: JWT) {
  try {
    const response = await axios.post(
      `${env.API_BASE_URL}/refresh?refresh_token=${token.refreshToken}`
    );

    const refreshedTokens = response.data;

    if (response.status !== 200) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: refreshedTokens.expiresIn,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken, // Fall back to old refresh token
      error: null,
    };
  } catch (error) {
    // console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    } satisfies JWT;
  }
}
