"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
// import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  session: any;
}

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
            {/* <Navbar /> */}
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}
