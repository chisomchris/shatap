import type { Metadata } from "next";
import { Poppins as FontPoppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme";
import { AuthProvider } from "@/providers/auth";
import { Toaster } from "@/components/ui/toaster";

const poppins = FontPoppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shatapp",
  description: "Stay Connected Always",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-poppins antialiased flex flex-col justify-between",
          poppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
