import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  ArrowRight,
  BookOpen,
  Heart,
  Smile,
  Sparkles
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Como Manter uma Higiene Bucal Perfeita",
      excerpt: "Descubra as melhores práticas para manter seus dentes e gengivas saudáveis no dia a dia.",
      content: "A higiene bucal adequada é fundamental para prevenir cáries, gengivite e outras doenças. Escove os dentes pelo menos duas vezes ao dia, use fio dental diariamente e não esqueça de limpar a língua...",
      author: "Dra. Ana Carolina Silva",
      date: "2024-01-15",
      category: "Odontologia",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["higiene", "prevenção", "cuidados diários"]
    },
    {
      id: 2,
      title: "Harmonização Facial: O que Você Precisa Saber",
      excerpt: "Entenda como os procedimentos de harmonização facial podem realçar sua beleza natural.",
      content: "A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que visa equilibrar as proporções do rosto. Através de técnicas como botox, preenchimento e bioestimuladores...",
      author: "Dra. Juliana Costa",
      date: "2024-01-12",
      category: "Estética",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["harmonização", "estética", "botox"]
    },
    {
      id: 3,
      title: "Ortodontia Moderna: Aparelhos Invisíveis",
      excerpt: "Conheça as vantagens dos alinhadores transparentes para correção ortodôntica.",
      content: "Os alinhadores transparentes revolucionaram a ortodontia moderna. Oferecendo discrição, conforto e eficácia, estes dispositivos são removíveis e quase imperceptíveis...",
      author: "Dr. Rafael Mendes",
      date: "2024-01-10",
      category: "Ortodontia",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1626736985932-d0c2e6059dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ortodontia", "aparelho", "invisalign"]
    },
    {
      id: 4,
      title: "Implantes Dentários: Sua Segunda Chance de Sorrir",
      excerpt: "Saiba como os implantes podem devolver função e estética ao seu sorriso.",
      content: "Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. Feitos de titânio biocompatível, integram-se ao osso proporcionando estabilidade...",
      author: "Dr. Carlos Oliveira",
      date: "2024-01-08",
      category: "Implantodontia",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["implantes", "reabilitação", "titânio"]
    },
    {
      id: 5,
      title: "Clareamento Dental: Mitos e Verdades",
      excerpt: "Esclareça suas dúvidas sobre clareamento dental e obtenha um sorriso mais branco.",
      content: "O clareamento dental é um dos procedimentos estéticos mais procurados. Existem diversas técnicas disponíveis, desde o clareamento caseiro supervisionado até o clareamento a laser...",
      author: "Dra. Ana Carolina Silva",
      date: "2024-01-05",
      category: "Odontologia",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["clareamento", "estética dental", "branqueamento"]
    },
    {
      id: 6,
      title: "Skincare e Tratamentos Estéticos: Combinação Perfeita",
      excerpt: "Como combinar cuidados diários com tratamentos profissionais para uma pele radiante.",
      content: "A combinação de uma rotina de skincare adequada com tratamentos estéticos profissionais potencializa os resultados. Peelings, microagulhamento e outros procedimentos...",
      author: "Dra. Juliana Costa",
      date: "2024-01-03",
      category: "Estética",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["skincare", "peeling", "tratamentos"]
    }
  ];

  const categories = ["Todos", "Odontologia", "Estética", "Ortodontia", "Implantodontia"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Odontologia": return <Smile className="h-4 w-4" />;
      case "Estética": return <Sparkles className="h-4 w-4" />;
      case "Ortodontia": return <BookOpen className="h-4 w-4" />;
      case "Implantodontia": return <Heart className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Blog Relive
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-warm-brown mb-6">
              Saúde e Beleza em Foco
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Informações confiáveis sobre odontologia e estética para cuidar 
              da sua saúde bucal e realçar sua beleza natural.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      <span className="flex items-center gap-1">
                        {getCategoryIcon(post.category)}
                        {post.category}
                      </span>
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <CardTitle className="text-xl font-playfair text-warm-brown group-hover:text-warm-brown/80 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <User className="h-4 w-4 text-warm-brown" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full group/btn">
                      Ler Artigo Completo
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-semibold text-muted-foreground mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-muted-foreground">
                Tente ajustar seus filtros de busca
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-elegant">
            <CardContent className="p-8">
              <BookOpen className="h-12 w-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold text-warm-brown mb-4">
                Fique por Dentro das Novidades
              </h3>
              <p className="text-muted-foreground mb-6">
                Receba dicas exclusivas sobre saúde bucal e estética diretamente no seu e-mail.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input placeholder="Seu melhor e-mail" className="flex-1" />
                <Button variant="hero">
                  Inscrever
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;