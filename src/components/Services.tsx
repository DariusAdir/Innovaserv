import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Wrench, Zap, HardHat, Paintbrush, Hammer, Sparkles, 
  Leaf, Wind, Drill, Home, Car, Camera,
  Star, MapPin, Phone, MessageCircle, CheckCircle2
} from "lucide-react";

interface Provider {
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  location: string;
  experience: string;
  description: string;
  verified: boolean;
  price: string;
}

interface Service {
  icon: typeof Wrench;
  name: string;
  description: string;
  providers: Provider[];
}

const services: Service[] = [
  { 
    icon: Wrench, name: "Plomería", description: "Reparaciones e instalaciones",
    providers: [
      { name: "Carlos Méndez", avatar: "", rating: 4.9, reviews: 127, location: "Zona Centro", experience: "12 años", description: "Especialista en instalaciones sanitarias y reparación de fugas.", verified: true, price: "Desde $350/hr" },
      { name: "Roberto Díaz", avatar: "", rating: 4.7, reviews: 89, location: "Zona Norte", experience: "8 años", description: "Plomería residencial y comercial. Servicio de emergencia 24/7.", verified: true, price: "Desde $300/hr" },
      { name: "Miguel Torres", avatar: "", rating: 4.5, reviews: 64, location: "Zona Sur", experience: "5 años", description: "Instalación de calentadores, tinacos y sistemas hidráulicos.", verified: false, price: "Desde $280/hr" },
    ]
  },
  { 
    icon: Zap, name: "Electricidad", description: "Instalaciones eléctricas",
    providers: [
      { name: "Fernando López", avatar: "", rating: 4.8, reviews: 156, location: "Zona Centro", experience: "15 años", description: "Instalaciones eléctricas residenciales e industriales certificadas.", verified: true, price: "Desde $400/hr" },
      { name: "Andrés Ruiz", avatar: "", rating: 4.6, reviews: 72, location: "Zona Poniente", experience: "7 años", description: "Especialista en paneles solares y ahorro energético.", verified: true, price: "Desde $350/hr" },
    ]
  },
  { 
    icon: HardHat, name: "Construcción", description: "Obras y remodelaciones",
    providers: [
      { name: "Jorge Hernández", avatar: "", rating: 4.9, reviews: 201, location: "Toda la ciudad", experience: "20 años", description: "Remodelaciones completas, obra negra y acabados de primera.", verified: true, price: "Cotización gratis" },
      { name: "Luis Martínez", avatar: "", rating: 4.7, reviews: 98, location: "Zona Norte", experience: "10 años", description: "Construcción residencial y ampliaciones.", verified: true, price: "Cotización gratis" },
      { name: "Raúl Sánchez", avatar: "", rating: 4.4, reviews: 45, location: "Zona Sur", experience: "6 años", description: "Acabados finos y remodelación de baños y cocinas.", verified: false, price: "Cotización gratis" },
    ]
  },
  { 
    icon: Paintbrush, name: "Pintura", description: "Interior y exterior",
    providers: [
      { name: "David García", avatar: "", rating: 4.8, reviews: 134, location: "Zona Centro", experience: "14 años", description: "Pintura decorativa, impermeabilización y texturas.", verified: true, price: "Desde $250/hr" },
      { name: "Pablo Flores", avatar: "", rating: 4.6, reviews: 67, location: "Zona Oriente", experience: "9 años", description: "Pintura residencial y comercial con materiales premium.", verified: true, price: "Desde $220/hr" },
    ]
  },
  { 
    icon: Hammer, name: "Carpintería", description: "Muebles y estructuras",
    providers: [
      { name: "Arturo Vega", avatar: "", rating: 4.9, reviews: 178, location: "Zona Poniente", experience: "18 años", description: "Muebles a medida, closets, cocinas integrales y restauración.", verified: true, price: "Cotización gratis" },
      { name: "Enrique Castillo", avatar: "", rating: 4.5, reviews: 56, location: "Zona Centro", experience: "7 años", description: "Carpintería moderna y minimalista.", verified: false, price: "Cotización gratis" },
    ]
  },
  { 
    icon: Sparkles, name: "Limpieza", description: "Hogar y oficina",
    providers: [
      { name: "María González", avatar: "", rating: 4.9, reviews: 245, location: "Toda la ciudad", experience: "10 años", description: "Limpieza profunda residencial y corporativa.", verified: true, price: "Desde $200/hr" },
      { name: "Ana Rodríguez", avatar: "", rating: 4.7, reviews: 112, location: "Zona Norte", experience: "6 años", description: "Limpieza post-obra y desinfección profesional.", verified: true, price: "Desde $180/hr" },
    ]
  },
  { 
    icon: Leaf, name: "Jardinería", description: "Paisajismo y mantenimiento",
    providers: [
      { name: "Pedro Ramírez", avatar: "", rating: 4.8, reviews: 93, location: "Zona Sur", experience: "11 años", description: "Diseño de jardines, poda profesional y sistemas de riego.", verified: true, price: "Desde $300/hr" },
    ]
  },
  { 
    icon: Wind, name: "Climatización", description: "A/C y calefacción",
    providers: [
      { name: "Sergio Morales", avatar: "", rating: 4.7, reviews: 108, location: "Toda la ciudad", experience: "9 años", description: "Instalación y mantenimiento de minisplits y aires centrales.", verified: true, price: "Desde $500/visita" },
      { name: "Ricardo Peña", avatar: "", rating: 4.5, reviews: 54, location: "Zona Centro", experience: "5 años", description: "Reparación de aire acondicionado todas las marcas.", verified: false, price: "Desde $400/visita" },
    ]
  },
  { 
    icon: Drill, name: "Cerrajería", description: "Instalación y reparación",
    providers: [
      { name: "Óscar Jiménez", avatar: "", rating: 4.8, reviews: 167, location: "Toda la ciudad", experience: "13 años", description: "Cerrajería automotriz, residencial y de alta seguridad. 24/7.", verified: true, price: "Desde $250/servicio" },
    ]
  },
  { 
    icon: Home, name: "Mudanzas", description: "Transporte y embalaje",
    providers: [
      { name: "Transportes Rápido", avatar: "", rating: 4.6, reviews: 89, location: "Toda la ciudad", experience: "8 años", description: "Mudanzas locales y foráneas con seguro incluido.", verified: true, price: "Cotización gratis" },
      { name: "Mudanzas Express", avatar: "", rating: 4.4, reviews: 43, location: "Zona Metropolitana", experience: "4 años", description: "Mudanzas económicas, embalaje y guardamuebles.", verified: false, price: "Cotización gratis" },
    ]
  },
  { 
    icon: Car, name: "Mecánica", description: "Reparación de vehículos",
    providers: [
      { name: "Taller Hernández", avatar: "", rating: 4.8, reviews: 210, location: "Zona Centro", experience: "22 años", description: "Mecánica general, frenos, suspensión y diagnóstico computarizado.", verified: true, price: "Diagnóstico gratis" },
      { name: "AutoFix Pro", avatar: "", rating: 4.6, reviews: 78, location: "Zona Norte", experience: "6 años", description: "Servicio automotriz especializado en autos europeos.", verified: true, price: "Desde $500/hr" },
    ]
  },
  { 
    icon: Camera, name: "Seguridad", description: "Cámaras y alarmas",
    providers: [
      { name: "SecureTech MX", avatar: "", rating: 4.9, reviews: 143, location: "Toda la ciudad", experience: "10 años", description: "Instalación de CCTV, alarmas y control de acceso.", verified: true, price: "Cotización gratis" },
    ]
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
      />
    ))}
    <span className="text-sm font-semibold ml-1">{rating}</span>
  </div>
);

const ProviderCard = ({ provider }: { provider: Provider }) => (
  <div className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-200">
    <Avatar className="w-14 h-14 shrink-0">
      <AvatarImage src={provider.avatar} />
      <AvatarFallback className="gradient-hero text-primary-foreground font-bold text-lg">
        {provider.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
      </AvatarFallback>
    </Avatar>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <h4 className="font-semibold text-foreground">{provider.name}</h4>
        {provider.verified && (
          <Badge variant="secondary" className="gap-1 text-xs bg-accent/10 text-accent border-0">
            <CheckCircle2 className="w-3 h-3" /> Verificado
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-3 mt-1">
        <StarRating rating={provider.rating} />
        <span className="text-xs text-muted-foreground">({provider.reviews} reseñas)</span>
      </div>
      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{provider.description}</p>
      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{provider.location}</span>
        <span>{provider.experience} exp.</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-bold text-primary">{provider.price}</span>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1 text-xs">
            <Phone className="w-3 h-3" /> Llamar
          </Button>
          <Button size="sm" className="h-8 gap-1 text-xs">
            <MessageCircle className="w-3 h-3" /> Contactar
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Todos los Servicios que{" "}
            <span className="text-primary">Necesitas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conectamos con profesionales verificados en múltiples áreas
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 shadow-card"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedService(service)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-block mt-3 text-xs text-primary font-medium">
                  {service.providers.length} profesional{service.providers.length !== 1 ? "es" : ""} →
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedService.name}</DialogTitle>
                    <DialogDescription>{selectedService.description} — {selectedService.providers.length} profesionales disponibles</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                {selectedService.providers.map((provider, i) => (
                  <ProviderCard key={i} provider={provider} />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
