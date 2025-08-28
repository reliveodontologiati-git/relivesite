import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  Youtube 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would integrate with Supabase
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      content: ["Rua das Flores, 123", "Centro - São Paulo, SP", "CEP: 01234-567"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefones",
      content: ["(11) 9999-9999", "(11) 3333-3333", "WhatsApp: (11) 9999-9999"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: ["contato@reliveodonto.com.br", "agendamento@reliveodonto.com.br"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horários",
      content: ["Segunda - Sexta: 8h às 19h", "Sábados: 8h às 14h", "Emergências: 24h"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contato
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-warm-brown mb-6">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. Entre em contato e agende 
            sua consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-warm-beige flex items-center justify-center text-warm-brown flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-warm-brown mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.content.map((item, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="border-0 shadow-elegant gradient-warm">
              <CardHeader>
                <CardTitle className="font-playfair text-warm-brown">
                  Siga-nos nas Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline-elegant" size="sm" className="flex flex-col gap-1 h-auto py-3">
                    <Instagram className="h-5 w-5" />
                    <span className="text-xs">Instagram</span>
                  </Button>
                  <Button variant="outline-elegant" size="sm" className="flex flex-col gap-1 h-auto py-3">
                    <Facebook className="h-5 w-5" />
                    <span className="text-xs">Facebook</span>
                  </Button>
                  <Button variant="outline-elegant" size="sm" className="flex flex-col gap-1 h-auto py-3">
                    <Youtube className="h-5 w-5" />
                    <span className="text-xs">YouTube</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair text-warm-brown text-2xl">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Área de Interesse</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma área" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ortodontia">Ortodontia</SelectItem>
                          <SelectItem value="implantes">Implantes</SelectItem>
                          <SelectItem value="estetica">Estética</SelectItem>
                          <SelectItem value="limpeza">Limpeza</SelectItem>
                          <SelectItem value="harmonizacao">Harmonização Facial</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Conte-nos como podemos ajudá-lo..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Responderemos em até 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-warm-beige to-caramel flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-warm-brown mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-warm-brown mb-2">
                  Nossa Localização
                </h3>
                <p className="text-muted-foreground">
                  Mapa interativo será integrado aqui
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;