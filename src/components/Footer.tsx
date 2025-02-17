
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/32c2042c-8d5e-4fa4-8574-a6b135fea1b2.png" 
                alt="Prime9 Realty" 
                className="h-16 w-auto mr-2" 
              />
              <h3 className="text-xl font-bold">Prime9 Realty</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Pune Property Experts🎖️<br />
              NA Plots | 🏡<br />
              Residential & Commercial properties🗼<br />
              ✨ Dream it, Own it, Rent it.💫
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/residential" className="text-gray-300 hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <p className="text-gray-300">
                  Downtown, City Vista, Fountain Road, Rakshak Nagar, Kharadi, Pune, Maharashtra 411014
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+917666248250" className="text-gray-300 hover:text-primary transition-colors">+91 7666 248250</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:info@prime9realty.com" className="text-gray-300 hover:text-primary transition-colors">info@prime9realty.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/prime9_realty" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-gray-300">
              <p>Instagram: @prime9_realty</p>
              <p>41 posts • 8,977 followers • 33 following</p>
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
