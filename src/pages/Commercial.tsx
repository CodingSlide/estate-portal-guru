
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const commercialProperties = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    title: "Premium Office Space in Magarpatta",
    location: "Magarpatta, Pune",
    price: "1,75,00,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 2500,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    title: "Commercial Complex in Hinjewadi",
    location: "Hinjewadi, Pune",
    price: "2,85,00,000",
    bedrooms: 0,
    bathrooms: 4,
    sqft: 3500,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    title: "Retail Space in Viman Nagar",
    location: "Viman Nagar, Pune",
    price: "1,25,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1200,
    type: "For Rent" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a",
    title: "Office Space in Baner",
    location: "Baner, Pune",
    price: "95,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1000,
    type: "For Rent" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    title: "Corporate Building in Kharadi",
    location: "Kharadi, Pune",
    price: "3,50,00,000",
    bedrooms: 0,
    bathrooms: 6,
    sqft: 4500,
    type: "For Sale" as const,
  }
];

const Commercial = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
