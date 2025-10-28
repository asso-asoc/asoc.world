import Hero from "@/components/Hero.tsx";
import Services from "@/components/Services.tsx";
import About from "@/components/About.tsx";
import Activities from "@/components/Activities.tsx";
import CTA from "@/components/CTA.tsx";
import Footer from "@/components/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
