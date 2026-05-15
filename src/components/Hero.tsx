import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search, ArrowRight, Upload, SendHorizonal, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("¡Postulación enviada con éxito!");
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFileName("");
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Profesionales de servicios del hogar" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Conecta con los{" "}
            <span className="text-primary font-extrabold">
              Mejores Profesionales
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Encuentra expertos verificados en plomería, electricidad, construcción y más. 
            Todo en un solo lugar, de forma rápida y segura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="shadow-glow text-lg h-14 px-8">
              Buscar Servicio
              <Search className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-14 px-8 border-2"
              onClick={() => setOpen(true)}
            >
              Ofrecer Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+5,000</div>
              <div className="text-muted-foreground">Profesionales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+50,000</div>
              <div className="text-muted-foreground">Servicios Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
              <div className="text-muted-foreground">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">¡Postulación Enviada!</h3>
              <p className="text-sm text-muted-foreground text-center">Revisaremos tu información y te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Postula tu Servicio</DialogTitle>
                <DialogDescription>
                  Completa el formulario y adjunta tu CV para unirte a nuestra red de profesionales.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="(55) 1234-5678" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@correo.com" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="service">Servicio que ofreces</Label>
                  <Input id="service" placeholder="Ej: Plomería, Electricidad..." required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="experience">Describe tu experiencia</Label>
                  <Textarea id="experience" placeholder="Cuéntanos sobre tu experiencia profesional..." rows={3} required />
                </div>
                <div className="space-y-1.5">
                  <Label>Adjuntar CV (PDF)</Label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-primary/40 bg-muted/50 cursor-pointer hover:border-primary transition-colors">
                    <Upload className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {fileName || "Selecciona tu archivo..."}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>
                <Button type="submit" className="mt-2 shadow-glow gap-2">
                  <SendHorizonal className="w-4 h-4" />
                  Enviar Postulación
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
