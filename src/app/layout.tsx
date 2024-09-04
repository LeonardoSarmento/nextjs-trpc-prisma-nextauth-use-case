import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Next.JS + Next-Auth + tRPC + prisma use case | Leonardo",
  description: "Use case to apply in a FullStack development project with Next.Js for tRPC and prism while authentication is applied by Next-Auth.",
  icons: [{ rel: "icon", url: "/thumbs-up.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <Container>{children}</Container>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
