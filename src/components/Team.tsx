import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Calendar,
  Linkedin,
  Instagram 
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. Ana Carolina Silva",
      role: "Cirurgiã-Dentista",
      specialty: "Ortodontia e Harmonização Facial",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      credentials: ["CRO-SP 123456", "Especialista em Ortodontia", "Pós-graduação em Harmonização"],
      experience: "12 anos"
    },
    {
      name: "Dr. Rafael Mendes",
      role: "Cirurgião-Dentista",
      specialty: "Implantodontia e Próteses",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      credentials: ["CRO-SP 789012", "Especialista em Implantodontia", "Mestrado em Prótese"],
      experience: "15 anos"
    },
    {
      name: "Dra. Nubia Campos",
      role: "Enfermeira Esteta",
      specialty: "Harmonização Corporal e Laserterapia",
      image: "/lovable-uploads/2a35d284-6419-4109-a9e2-a5aa03ffcfb0.png",
      credentials: ["Coren 755072", "Especialista em Harmonização Corporal", "Especialista em Laserterapia"],
      experience: "8 anos"
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Cirurgião-Dentista",
      specialty: "Periodontia e Endodontia",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      credentials: ["CRO-SP 456789", "Especialista em Periodontia", "Pós-graduação em Endodontia"],
      experience: "10 anos"
    }
  ];

  return (
    <section id="team" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nossa Equipe
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-warm-brown mb-6">
            Profissionais Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe é formada por profissionais altamente qualificados, 
            com especialização e experiência comprovada em suas áreas de atuação.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Icons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.role}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {member.specialty}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-warm-brown" />
                    <span className="text-sm font-medium">{member.experience} de experiência</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-4 w-4 text-warm-brown mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        {member.credentials.map((credential, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground">
                            {credential}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 shadow-elegant gradient-warm">
            <CardContent className="p-0">
              <Award className="h-12 w-12 text-warm-brown mx-auto mb-4" />
              <div className="text-3xl font-playfair font-bold text-warm-brown mb-2">
                40+
              </div>
              <div className="text-sm text-muted-foreground">
                Anos de Experiência Combinada
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-elegant gradient-warm">
            <CardContent className="p-0">
              <GraduationCap className="h-12 w-12 text-warm-brown mx-auto mb-4" />
              <div className="text-3xl font-playfair font-bold text-warm-brown mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Especializações e Certificações
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-elegant gradient-warm">
            <CardContent className="p-0">
              <Calendar className="h-12 w-12 text-warm-brown mx-auto mb-4" />
              <div className="text-3xl font-playfair font-bold text-warm-brown mb-2">
                24h
              </div>
              <div className="text-sm text-muted-foreground">
                Atendimento de Emergência
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;