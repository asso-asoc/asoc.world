import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {

    const gotToCTA = () => {
        const cta = document.getElementById("cta");
        if (cta) {
            cta.scrollIntoView({ behavior: "smooth" });
        }
    }

    const gotToServices = () => {
        const services = document.getElementById("services");
        if (services) {
            services.scrollIntoView({ behavior: "smooth" });
        }
    }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre porte vers le
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Sports & Culture</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              ASOC est une communauté de passionnés de sport et de culture.
              Nous vivons et partageons notre passion à travers des événements qui enrichissent notre découverte du monde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg" onClick={gotToCTA}>
              Rejoindre ASOC aujourd'hui
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-2" onClick={gotToServices}>
              Nos activités
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
