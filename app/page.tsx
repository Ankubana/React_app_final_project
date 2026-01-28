import Nav from "./components/nav";
import Landing from "./landing/page";
import Features from "./components/features";
import Statistics from "./components/statistics";
import Statistics_cont from "./components/statistics_continued";
import Review from "./components/Review";
import Sumarist from"./components/sumarist/page";
import BookDetail from "./components/BookDetail/page";

import "./globals.css";

export default function Home() {
  return (
    <div>
       <Nav/>
      <Landing/>
      <Features/>
      <Statistics/>
      <Statistics_cont/>
      <Review/>
    </div>
     );
}