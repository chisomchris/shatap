"use client";

import { Wrapper } from "@/components/ui/wrapper";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Wrapper>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </Wrapper>
      </body>
    </html>
  );
}
