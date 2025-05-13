
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BusinessCardProps {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  rating: number;
  address: string;
  openingHours: string;
  priceRange: string;
  features: string[];
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  imageUrl,
  category,
  rating,
  address,
  openingHours,
  priceRange,
  features,
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link to={`/business/${id}`} className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </Link>
      <CardContent className="pt-4 pb-0 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/business/${id}`} className="hover:underline">
            <h3 className="font-semibold text-lg truncate">{name}</h3>
          </Link>
          <div className="flex items-center bg-muted rounded px-2 py-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        
        <Badge variant="outline" className="mb-2">{category}</Badge>
        
        <div className="space-y-2 mt-3">
          <div className="flex items-start space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <span className="text-muted-foreground truncate">{address}</span>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{openingHours}</span>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{features.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full">
          <Link to={`/business/${id}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
