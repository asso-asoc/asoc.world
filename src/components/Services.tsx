import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Calendar, Plane, Tag, UserRoundIcon } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Evénement excitant",
    description: "Rencontre avec des artistes, initiation à des sports, peu importe le niveau, et bien plus encore.",
  },
  {
    icon: Plane,
    title: "Voyage memorable",
    description: "Expériences de voyage de groupe organisées combinant sports d'aventure, exploration culturelle et activités de team building.",
  },
  {
    icon: UserRoundIcon,
    title: "Partage",
    description: "En tant qu'association, nous avons à cœur de rendre la pratique du sport et de la culture accessible à tous.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Que faisons-nous ?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ASOC fournit une aide à la découverte et à la pratique d'activités sportives et culturelles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" id="services">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
