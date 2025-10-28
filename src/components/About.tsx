import { Button } from "@/components/ui/button.tsx";
import { Users, Heart, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Heart, value: "50+", label: "Monthly Events" },
  { icon: Zap, value: "100+", label: "Partner Locations" },
];

const About = () => {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La communauté commence avec
              <span className="bg-gradient-accent bg-clip-text text-transparent"> vous.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ASOC est plus qu'une simple association : nous sommes une communauté dynamique qui se consacre à rendre
                les activités sportives et culturelles accessibles à tous. Que vous cherchiez à vous lancer dans un nouveau passe-temps,
                à rencontrer des personnes partageant les mêmes idées ou simplement à rester actif, nous sommes là pour vous accompagner
                dans votre parcours.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous travaillons sans relâche pour négocier les meilleurs tarifs avec les installations locales,
                organiser divers événements et créer des opportunités pour nos membres d'explorer de nouveaux intérêts
                sans barrières financières.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
