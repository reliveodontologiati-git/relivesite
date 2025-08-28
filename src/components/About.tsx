import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Award, 
  Shield,
  Clock,
  Star,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ética",
      description: "Transparência e honestidade em todos os procedimentos"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acolhimento",
      description: "Cuidado humanizado e atenção personalizada"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Inovação",
      description: "Tecnologia de ponta e técnicas atualizadas"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança",
      description: "Protocolos rigorosos de biossegurança"
    }
  ];

  const stats = [
    { number: "5000+", label: "Pacientes Atendidos" },
    { number: "10+", label: "Anos de Experiência" },
    { number: "50+", label: "Procedimentos Diferentes" },
    { number: "98%", label: "Satisfação dos Clientes" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                Sobre a Clínica
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-warm-brown mb-6">
                Cuidando do seu sorriso há mais de uma década
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  A <span className="font-playfair font-semibold text-warm-brown">Clínica Relive</span> nasceu 
                  com a missão de transformar vidas através do cuidado com a saúde bucal e estética facial. 
                  Nossa equipe multidisciplinar combina experiência, tecnologia e dedicação para oferecer 
                  tratamentos de excelência.
                </p>
                <p>
                  Acreditamos que cada sorriso é único e merece um tratamento personalizado. Por isso, 
                  desenvolvemos protocolos individualizados que respeitam as necessidades e expectativas 
                  de cada paciente.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-warm-brown mb-3">
                    Nossa Missão
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Oferecer excelência em odontologia e estética, promovendo autoestima 
                    e bem-estar através de tratamentos inovadores.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-warm-brown mb-3">
                    Nossa Visão
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ser referência em cuidados integrados de saúde oral e estética 
                    facial na região.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-6">
                Nossos Valores
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-warm-beige flex items-center justify-center text-warm-brown flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-warm-brown mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline-elegant">
              Conheça Nossa Equipe
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Stats & Image */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-playfair font-bold text-warm-brown mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <Card className="border-0 shadow-elegant gradient-warm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-warm-brown" />
                    <h3 className="font-playfair font-semibold text-warm-brown">
                      Horários Flexíveis
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Segunda - Sexta</span>
                      <span className="text-sm font-medium">8h às 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Sábados</span>
                      <span className="text-sm font-medium">8h às 14h</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">
                      Avaliação média de 4.9/5 no Google
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;