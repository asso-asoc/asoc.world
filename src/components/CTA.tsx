import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { ArrowRight } from "lucide-react";
import {useState} from "react";
import emailJs from "@emailjs/browser"

emailJs.init({
    publicKey: "_1n1jVeBAI44k9myO",
})

const CTA = () => {

    const [email, setEmail] = useState<string>("");

    const handleSubmit = () => {
        emailJs.send("service_dd2q187", "template_1ortkx5", {
            userEmail: email,
            email: "contact@asoc.world"
        }).then(() => {
            alert("Votre e-mail est envoyé ! Nous vous contacterons rapidement pour faire connaissance.")
        }).catch((e) => {
            alert("Une erreur est survenue lors de l'envoi de votre adresse.")
            console.log(e)
        })
    }

  return (
    <section className="py-24 px-4" id="cta">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-12 md:p-16 shadow-glow">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt pour rejoindre ASOC ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez ASOC aujourd'hui et prenez part à une communauté de partage avec des événements exceptionnels. <br/>
              Pour garantir une intégration fluide, vous aurez besoin de 2 parains pour vous inscrire.
          </p>
          
          <div className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="entrez votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Button size="lg" variant="secondary" className="h-12 whitespace-nowrap" onClick={handleSubmit}>
                C'est parti !
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
