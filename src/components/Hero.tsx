import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-soft">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto">
                  <img 
                    src="/lovable-uploads/d952346d-8c5f-490e-8941-e2ab32765cb0.png"
                    alt="Relive Odontologia e Estética"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-xl font-bulgari text-charcoal tracking-wide">
                Sorrir com Saúde, Realçar sua Beleza
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oferecemos excelência em odontologia e estética, promovendo autoestima 
                e bem-estar através de tratamentos inovadores e cuidado humanizado.
              </p>

              {/* Botões escondidos conforme solicitado */}
              {/* 
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Agendar Consulta
                </Button>
                <Button variant="outline-elegant" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
              </div>
              */}
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-warm-brown" />
                <span>(11) 96829-6877</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-warm-brown" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/c286323d-1e25-4866-bdef-eff14537808c.png"
                alt="Paciente sorrindo - Clínica Relive"
                className="w-full h-[600px] md:h-[700px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-elegant opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-warm opacity-20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;