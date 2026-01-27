"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import Sidebar from"./for_you/page";
import { useEffect,useState } from "react";
export default function RootLayout({ children }: { children: React.ReactNode },login) {
  const [refreshBooks, setRefreshBooks] = useState(false);
   function upadteSideBar(){
   }

  return (
  
  <body> 
 <main className="main">
          {children}
 </main>
 </body>
  
  );
}
