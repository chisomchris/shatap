import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
  },
  server: {
    NEXTAUTH_SECRET: z.string().min(1),
    MONGODB_URI: z.string().min(1),
    API_BASE_URL: z.string().min(1),
  },

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
