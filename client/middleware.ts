import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  const { origin, pathname, search } = request.nextUrl;
  requestHeaders.set("x-url", JSON.stringify({ origin, pathname, search }));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/",
// };
