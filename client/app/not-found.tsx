import { Wrapper } from "@/components/ui/wrapper";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = { title: "Shatapp | Not Found" };

export default function NotFound() {
  const headersList = headers();
  const url = JSON.parse(headersList.get("x-url") || "{}");
  const { pathname } = url;

  return (
    <Wrapper>
      <h2>
        <span>{pathname}</span> Not Found
      </h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Wrapper>
  );
}
