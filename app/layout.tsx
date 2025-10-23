import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from"./components/nav"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        
        {children}
        
      </body>
    </html>
  );
}
