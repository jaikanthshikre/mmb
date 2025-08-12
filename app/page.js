import Image from "next/image";


import Slidetext from "./section/Slidetext";
import TopGames from "./section/TopGames";
import WhyChooseMMB from "./section/WhychooseMmb";
import BettingFAQ from "./section/BettingFaq";
import { Hero } from "./section/Hero";


export default function Home() {
  return (
    <>
   <Hero/>
   <Slidetext/>
   <TopGames/>
   <WhyChooseMMB/>
   <BettingFAQ/>
   
  </>
  );
}
