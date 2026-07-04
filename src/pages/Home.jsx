import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import TikTok from "../components/TikTok";
import DownloadApp from "../components/DownloadApp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Rooms />
      <Gallery />
      <Reviews />
      <TikTok />
      <DownloadApp />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;