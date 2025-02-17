
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

const landProperties = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    title: "Premium NA Plot in Wagholi",
    location: "Wagholi, Pune",
    price: "75,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 2400,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Commercial Plot in Hinjewadi",
    location: "Hinjewadi Phase 2, Pune",
    price: "1,25,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 4000,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965",
    title: "Agricultural Land in Khed",
    location: "Khed, Pune",
    price: "45,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 10000,
    type: "For Sale" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1",
    title: "NA Plot in Chakan",
    location: "Chakan, Pune",
    price: "85,00,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 3000,
    type: "For Sale" as const,
  }
];

const LandPlots = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
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
