import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Heart 
} from "lucide-react";

const Footer = () => {
  const services = [
    "Ortodontia",
    "Implantes",
    "Clareamento",
    "Harmonização Facial",
    "Botox",
    "Peeling"
  ];

  const quickLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Equipe", href: "#team" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <img 
                src="/lovable-uploads/d952346d-8c5f-490e-8941-e2ab32765cb0.png"
                alt="Relive Odontologia e Estética"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-xs text-gray-400 mt-2">
                Sorrir com Saúde, Realçar sua Beleza
              </p>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Há mais de uma década transformando sorrisos e vidas através da 
              excelência em odontologia e estética facial.
            </p>

            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-warm-brown">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-warm-brown">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-warm-brown">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-caramel">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-sm text-gray-300 hover:text-caramel transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-caramel">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-caramel transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-300 hover:text-caramel transition-colors"
                >
                  Políticas de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-300 hover:text-caramel transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-caramel">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-caramel mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>R. Cel. João Leme, 460 - sala 104 - 1º andar</p>
                  <p>Edifício New York</p>
                  <p>Bragança Paulista - SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-caramel mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>(11) 96829-6877</p>
                  <p>(11) 3403-3223</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-caramel mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>dr.stanleyrangel@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-caramel mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Segunda a sexta: 9:00 às 11:30 e 14:00 às 18:30</p>
                  <p>Sábado: 9:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© 2024 Clínica Relive. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>para cuidar do seu sorriso</span>
          </div>
        </div>

        {/* Professional Info */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Responsável Técnico: Dra. Ana Carolina Silva - CRO-SP 123456
            </p>
            <p className="text-xs text-gray-500">
              Este site segue as normas do Código de Ética Odontológica e CFO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;