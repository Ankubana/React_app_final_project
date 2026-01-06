import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import Sidebar from"./for_you/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Sidebar/>  
  <body> 

 <main className="main">
          <Nav />
          {children}
        </main>
 </body>
    </html>
  );
}
