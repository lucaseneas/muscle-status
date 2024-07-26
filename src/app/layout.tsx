"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { metadata} from './metadata';



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        </head>
        <body className={`${inter.className} h-screen`}>
          
        <SessionProvider>
          {children}
        </SessionProvider>
          
        </body>
        

    </html>
  );
}
