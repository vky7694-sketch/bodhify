import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Learning from "./components/Learning";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Categories />

      <Learning />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />

    </main>
  );
}