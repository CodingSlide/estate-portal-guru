
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://www.instagram.com/prime9_realty/icon" 
                alt="Prime9 Realty" 
                className="h-12 w-auto mr-2" 
              />
              <h3 className="text-xl font-bold">Prime9 Realty</h3>
            </div>
            <p className="text-gray-300 text-sm">
              At Prime9 realty, we specialize in providing expert real estate services in Pune. Whether you're buying, selling, or investing, our team is dedicated to delivering personalized solutions tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-gray-300 hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Downtown, City Vista, Fountain Road, Rakshak Nagar, Kharadi, Pune, Maharashtra 411014
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@prime9realty.com" className="text-gray-300 hover:text-primary transition-colors">info@prime9realty.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/prime9_realty" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prime9 Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
