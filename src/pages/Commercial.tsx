
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const commercialProperties = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    title: "Premium Office Space in Hinjewadi",
    location: "Hinjewadi Phase 1, Pune",
    price: "2,25,00,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 2000,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    title: "Retail Space in Magarpatta",
    location: "Magarpatta, Pune",
    price: "1,45,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1500,
    type: "For Rent" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    title: "Commercial Complex in Kharadi",
    location: "Kharadi, Pune",
    price: "3,75,00,000",
    bedrooms: 0,
    bathrooms: 4,
    sqft: 3500,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7",
    title: "Office Space in Viman Nagar",
    location: "Viman Nagar, Pune",
    price: "95,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1200,
    type: "For Rent" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1582037928769-351c9e8be4e5",
    title: "Mall Space in Wakad",
    location: "Wakad, Pune",
    price: "4,50,00,000",
    bedrooms: 0,
    bathrooms: 6,
    sqft: 5000,
    type: "For Sale" as const,
  }
];

const Commercial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <Navbar />
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Commercial Properties</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProperties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Commercial;
