
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const landProperties = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    title: "Premium Plot in Wagholi",
    location: "Wagholi, Pune",
    price: "85,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 5000,
    type: "For Sale" as const,
  },
  // Add more land/plot properties
];

const LandPlots = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Land & Plots</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landProperties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandPlots;
