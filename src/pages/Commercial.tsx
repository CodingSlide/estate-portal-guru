
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
  // Add more commercial properties
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
