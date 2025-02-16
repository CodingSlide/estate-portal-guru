
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const residentialProperties = [
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
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
    title: "Elegant Home in Baner",
    location: "Baner, Pune",
    price: "3,25,00,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    title: "Modern Villa in Wakad",
    location: "Wakad, Pune",
    price: "5,50,00,000",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    type: "For Sale" as const,
  }
];

const Residential = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Residential Properties</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProperties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Residential;
