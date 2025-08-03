import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <section className="flex flex-col w-full p-4">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
