
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const residentialProperties = [
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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    title: "Premium Apartment in Kharadi",
    location: "Kharadi, Pune",
    price: "1,95,00,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    title: "Modern Flat in Wakad",
    location: "Wakad, Pune",
    price: "85,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "For Rent" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084",
    title: "Spacious Villa in Baner",
    location: "Baner, Pune",
    price: "4,25,00,000",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
    title: "Luxury Flat in Viman Nagar",
    location: "Viman Nagar, Pune",
    price: "1,45,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    type: "For Rent" as const,
  }
];

const Residential = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
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
