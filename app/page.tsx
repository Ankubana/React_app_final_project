import Image from "next/image";
import Nav from "./components/nav";
import Landing from"./components/landing";
import "./globals.css";
import Features from"./components/features";
import Statistics from"./components/statistics"
import Statistics_cont from "./components/statistics_continued";
import Review from "./components/Review"
import Footer from "./components/Footer"
import Summarist from"./components/summarist"
import Login from "./components/Login"
import BookDetails from "./components/BookDetails"
import For_you from "./components/For_you";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <BookDetails />
    </div>
  );
}
