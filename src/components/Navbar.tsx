
import { Menu, X, Phone, Home, Building2, LandPlot, Contact } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/32c2042c-8d5e-4fa4-8574-a6b135fea1b2.png" 
              alt="Prime9 Realty" 
              className="h-10 w-auto" 
            />
            <span className="text-xl font-semibold text-secondary">Prime9 Realty</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/residential" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Residential</span>
            </Link>
            <Link to="/commercial" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <Building2 className="h-4 w-4" />
              <span>Commercial</span>
            </Link>
            <Link to="/land-plots" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <LandPlot className="h-4 w-4" />
              <span>Land/Plots</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <Contact className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Button variant="default">List Property</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/residential" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <Home className="h-4 w-4" />
              <span>Residential</span>
            </Link>
            <Link to="/commercial" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <Building2 className="h-4 w-4" />
              <span>Commercial</span>
            </Link>
            <Link to="/land-plots" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <LandPlot className="h-4 w-4" />
              <span>Land/Plots</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <Contact className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Button className="w-full">List Property</Button>
            <div className="flex items-center justify-center pt-4 border-t">
              <Phone className="h-5 w-5 text-primary mr-2" />
              <a href="tel:+919876543210" className="text-gray-700">+91 98765 43210</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
