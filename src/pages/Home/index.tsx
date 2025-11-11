import About from "../../components/About";
import Contact from "../../components/Contacts";
import Hero from "../../components/Hero";
import Portfolio from "../../components/Portfolio";
import ScrollToTop from "../../components/shared/ScrollToTop";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Heade";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      <ScrollToTop />
    </>
  );
}
