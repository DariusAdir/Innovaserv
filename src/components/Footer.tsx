import { Mail } from "lucide-react";
import logo from "@/assets/innovaserv-logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="InnovaServ Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">InnovaServ</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Tu plataforma de confianza para conectar con profesionales del hogar
            </p>
            <a href="mailto:innovaserv@gmail.com" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <Mail className="w-4 h-4" />
              innovaserv@gmail.com
            </a>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Plomería</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electricidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Construcción</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ver Todos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabaja con Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 InnovaServ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
