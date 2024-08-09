"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { metadata } from './metadata';

import { Base } from "@/templates/base/base";
import { useEffect } from "react";
import React from "react";

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
          <Base children={children}></Base>
        </SessionProvider>
      </body>
    </html>
  );
}
