
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="https://www.instagram.com/prime9_realty/icon" alt="Prime9 Realty" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#properties" className="text-gray-700 hover:text-primary transition-colors">Properties</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
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
            <a href="#home" className="block text-gray-700 hover:text-primary">Home</a>
            <a href="#properties" className="block text-gray-700 hover:text-primary">Properties</a>
            <a href="#about" className="block text-gray-700 hover:text-primary">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-primary">Contact</a>
            <Button className="w-full">List Property</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
