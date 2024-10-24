import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/Herosection";
import Categories from "./Components/Categories/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
    </>
  );
}
