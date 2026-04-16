import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CasesGrid from "./components/CasesGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CasesGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}
