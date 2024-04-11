import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Home/Nav";
import ClientProvider from "./components/Hoc/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}</body>
      </html>
    </ClientProvider>
  );
}
