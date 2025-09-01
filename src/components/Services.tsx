import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Heart, 
  Shield, 
  Sparkles, 
  Stethoscope, 
  Zap,
  Calendar,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const odontologyServices = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Limpeza Dental",
      description: "Profilaxia completa com ultrassom e polimento",
      features: ["Remoção de tártaro", "Polimento", "Flúor aplicação"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ortodontia",
      description: "Aparelhos fixos e móveis para alinhamento perfeito",
      features: ["Aparelho fixo", "Invisalign", "Contenção"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Clareamento Dental",
      description: "Tecnologia LED para um sorriso mais branco",
      features: ["Clareamento a laser", "Moldeiras", "Manutenção"]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Implantes",
      description: "Reposição de dentes com implantes de titânio",
      features: ["Implante unitário", "Prótese total", "All-on-4"]
    }
  ];

  const aestheticServices = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Harmonização Facial",
      description: "Procedimentos para equilibrar proporções faciais",
      features: ["Botox", "Preenchimento", "Fios de PDO"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Peeling",
      description: "Renovação celular para pele mais jovem",
      features: ["Peeling químico", "Microagulhamento", "Rejuvenescimento"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Harmonização Corporal",
      description: "Volume e definição natural dos lábios",
      features: ["Ácido hialurônico", "Contorno labial", "Hidratação"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Tratamento de Acne",
      description: "Protocolos personalizados para pele saudável",
      features: ["Limpeza profunda", "LED terapia", "Orientação domiciliar"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-warm-brown mb-6">
            Excelência em Cada Procedimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos e estéticos 
            com tecnologia de ponta e cuidado humanizado.
          </p>
        </div>

        {/* Odontologia Services */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Smile className="h-6 w-6 text-warm-brown" />
            <h3 className="text-2xl font-playfair font-semibold text-warm-brown">
              Odontologia
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {odontologyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-warm-beige flex items-center justify-center text-warm-brown group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-playfair text-warm-brown mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-warm-brown"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Botão "Saiba Mais" escondido conforme solicitado */}
                  {/*
                  <Button variant="ghost" className="w-full group/btn">
                    Saiba Mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Estética Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-6 w-6 text-warm-brown" />
            <h3 className="text-2xl font-playfair font-semibold text-warm-brown">
              Estética
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aestheticServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-warm-beige flex items-center justify-center text-warm-brown group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-playfair text-warm-brown mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-warm-brown"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Botão "Saiba Mais" escondido conforme solicitado */}
                  {/*
                  <Button variant="ghost" className="w-full group/btn">
                    Saiba Mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border-0">
            <h3 className="text-2xl font-playfair font-semibold text-warm-brown mb-4">
              Pronto para Transformar seu Sorriso?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma avaliação gratuita e descubra o tratamento ideal para você.
            </p>
            {/* Botão de agendamento escondido conforme solicitado */}
            {/*
            <Button variant="hero" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Avaliação Gratuita
            </Button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;