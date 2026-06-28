import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Corporate from "@/components/Corporate";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Corporate />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
