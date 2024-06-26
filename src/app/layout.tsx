import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muscle Status",
  description: "Aplicativo para treinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        
        <body className={`${inter.className} h-screen`}>
          
          
          {children}
          
        </body>
        

    </html>
  );
}
