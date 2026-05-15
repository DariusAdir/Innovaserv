import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Busca el Servicio",
    description: "Explora nuestra amplia variedad de servicios y encuentra lo que necesitas"
  },
  {
    icon: UserCheck,
    title: "2. Elige un Profesional",
    description: "Revisa perfiles, calificaciones y elige el experto ideal para tu proyecto"
  },
  {
    icon: CheckCircle,
    title: "3. Completa el Trabajo",
    description: "El profesional realiza el trabajo y tú calificas su servicio"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo{" "}
            <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para conectar con el profesional perfecto
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative border-2 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
