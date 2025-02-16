
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c0ad78fb-9eb1-43a4-af0f-ad7d7cde5d04.png" 
              alt="Prime9 Realty" 
              className="h-12 w-auto" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/residential" className="text-gray-700 hover:text-primary transition-colors">Residential</Link>
            <Link to="/commercial" className="text-gray-700 hover:text-primary transition-colors">Commercial</Link>
            <Link to="/land-plots" className="text-gray-700 hover:text-primary transition-colors">Land/Plots</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
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
            <Link to="/residential" className="block text-gray-700 hover:text-primary">Residential</Link>
            <Link to="/commercial" className="block text-gray-700 hover:text-primary">Commercial</Link>
            <Link to="/land-plots" className="block text-gray-700 hover:text-primary">Land/Plots</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary">Contact</Link>
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
