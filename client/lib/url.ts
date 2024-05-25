import { headers } from "next/headers";

export const getUrl = () => {
  "server only";
  const headersList = headers();
  const url = JSON.parse(headersList.get("x-url") || "{}");
  const { search, pathname, origin } = url;
  if (!origin) throw new Error("Invalid origin");
  return [
    `${origin}${pathname ? pathname : ""}${search ? "?" + search : ""}`,
    url,
  ];
};
