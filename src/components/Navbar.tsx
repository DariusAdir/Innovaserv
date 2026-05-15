import { Button } from "@/components/ui/button";
import logo from "@/assets/innovaserv-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="InnovaServ Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-foreground">InnovaServ</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Cómo Funciona
          </a>
          <a href="#contacto" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="shadow-glow">
            Registrarse
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
