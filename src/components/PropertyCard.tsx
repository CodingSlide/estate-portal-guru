
import { Heart, MapPin, Maximize2, BedDouble, Bath } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "For Sale" | "For Rent";
}

export const PropertyCard = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  sqft,
  type,
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="group overflow-hidden rounded-lg transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-white">
          {type}
        </Badge>
        <button 
          onClick={handleLikeClick}
          className={cn(
            "absolute top-4 right-4 rounded-full bg-white/80 p-2 transition-colors hover:bg-primary hover:text-white",
            isLiked && "bg-[#ea384c] text-white hover:bg-[#ea384c]/90"
          )}
        >
          <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm border-t pt-4">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="h-4 w-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">₹{price}</span>
          {likeCount > 0 && (
            <span className="text-sm text-[#ea384c]">{likeCount} likes</span>
          )}
        </div>
      </div>
    </Card>
  );
};
