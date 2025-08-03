import { AuthRedirect } from "@/components/AuthRedirect";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <AuthRedirect />
      <section className="flex flex-col w-full p-4">
        <Navbar />
        <Hero />
        <Footer />
      </section>
    </>
  );
};

export default Home;
