
import { Search, MapPin, Building2, Home, LandPlot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
    title: "Luxury Villa in Magarpatta",
    location: "Magarpatta, Pune",
    price: "3,85,00,000",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3500,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    title: "Commercial Space in Hinjewadi",
    location: "Hinjewadi Phase 1, Pune",
    price: "2,25,00,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 2000,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    title: "Premium NA Plot in Wagholi",
    location: "Wagholi, Pune",
    price: "75,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 2400,
    type: "For Sale" as const,
  }
];

const propertyTypes = [
  {
    icon: Home,
    title: "Residential",
    description: "Luxury Villas & Premium Apartments",
    color: "bg-gradient-to-r from-[#C5A572] to-[#E2D1C3]"
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Office Spaces & Retail Shops",
    color: "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"
  },
  {
    icon: LandPlot,
    title: "Land/Plots",
    description: "NA Plots & Investment Land",
    color: "bg-gradient-to-r from-[#F1F0FB] to-[#F2FCE2]"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070")',
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down text-white">
            Find Your Dream Property in Pune
          </h1>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-up">
            Discover premium properties across prime locations in Pune. Your perfect home is just a search away.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4 animate-fade-up">
            <div className="flex-1">
              <Input placeholder="Search location..." className="border-primary/20" />
            </div>
            <div className="flex-1">
              <Input placeholder="Property type..." className="border-primary/20" />
            </div>
            <div className="flex-1">
              <Input placeholder="Price range..." className="border-primary/20" />
            </div>
            <Button className="md:w-auto bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Property Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((type) => (
              <Link 
                to={`/${type.title.toLowerCase()}`} 
                key={type.title}
                className={`rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${type.color} group`}
              >
                <type.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Link to="/residential">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View More
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our expert real estate agents for personalized assistance in Pune
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 animate-fade-up">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
