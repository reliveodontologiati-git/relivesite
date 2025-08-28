import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Início", href: "/", type: "route" },
    { label: "Sobre", href: "about", type: "anchor" },
    { label: "Serviços", href: "services", type: "anchor" },
    { label: "Equipe", href: "team", type: "anchor" },
    { label: "Blog", href: "/blog", type: "route" },
    { label: "Contato", href: "contact", type: "anchor" },
  ];

  const handleAnchorClick = (anchor: string) => {
    // Always go to home first, then scroll to section
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d952346d-8c5f-490e-8941-e2ab32765cb0.png"
              alt="Relive Odontologia e Estética"
              className="h-24 md:h-28 w-auto"
            />
            <span className="text-lg font-semibold text-foreground">
              Odontologia e Estética
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "anchor" ? (
                <button
                  key={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-sm font-medium text-foreground hover:text-warm-brown transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-warm-brown transition-colors"
                  onClick={() => {
                    if (item.href === "/") {
                      // Scroll to top when going to home
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              (11) 9999-9999
            </Button>
            <Button variant="hero" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item) => (
                item.type === "anchor" ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAnchorClick(item.href);
                    }}
                    className="block w-full text-left text-sm font-medium text-foreground hover:text-warm-brown transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-sm font-medium text-foreground hover:text-warm-brown transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item.href === "/") {
                        // Scroll to top when going to home
                        setTimeout(() => window.scrollTo(0, 0), 100);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 9999-9999
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;