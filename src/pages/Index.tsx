
import { Search, MapPin, Building2, Home, LandPlot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070",
    title: "Luxury Villa in Koregaon Park",
    location: "Koregaon Park, Pune",
    price: "4,50,00,000",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    title: "Modern Apartment in Kharadi",
    location: "Kharadi, Pune",
    price: "2,75,00,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    title: "Premium Flat in Magarpatta",
    location: "Magarpatta, Pune",
    price: "95,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "For Rent" as const,
  },
];

const propertyTypes = [
  {
    icon: Home,
    title: "Residential",
    description: "Find your dream home",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Premium office spaces",
  },
  {
    icon: LandPlot,
    title: "Land/Plots",
    description: "Investment opportunities",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
            Find Your Dream Property in Pune
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
            Discover premium properties across prime locations in Pune. Your perfect home is just a search away.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4 animate-fade-up">
            <div className="flex-1">
              <Input placeholder="Search location..." />
            </div>
            <div className="flex-1">
              <Input placeholder="Property type..." />
            </div>
            <div className="flex-1">
              <Input placeholder="Price range..." />
            </div>
            <Button className="md:w-auto">
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
              <div key={type.title} className="bg-accent rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <type.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our expert real estate agents for personalized assistance in Pune
          </p>
          <Button size="lg" className="animate-fade-up">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
