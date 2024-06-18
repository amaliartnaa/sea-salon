import About from "@/components/organisms/About";
import Hero from "@/components/organisms/Hero";
import ReviewSystem from "@/components/organisms/ReviewSystem";
import Services from "@/components/organisms/Services";
import Testimonials from "@/components/organisms/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="absolute w-2/3 h-screen top-0 right-0 -z-10"></div>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    </>
  );
}
