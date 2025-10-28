import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              ASOC
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Promouvoir l'activité sportive et culturelle pour tous.
            </p>
          </div>

          {/* Quick Links */}
          <div>
          </div>

          {/* Activities */}
          <div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Nous contacter</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@asoc.org" className="hover:text-primary transition-colors">
                  contact@asoc.world
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
