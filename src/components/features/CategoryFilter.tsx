
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'restaurants', name: 'Restaurantes' },
    { id: 'bars', name: 'Bares' },
    { id: 'clubs', name: 'Baladas' },
    { id: 'cultural', name: 'Cultura' },
    { id: 'cafe', name: 'Cafés' },
    { id: 'bakery', name: 'Padarias' },
    { id: 'events', name: 'Eventos' },
  ];

  return (
    <div className="py-3 border-b sticky top-16 bg-white z-10">
      <div className="container px-4 mx-auto md:px-6">
        <ScrollArea orientation="horizontal" className="w-full">
          <div className="flex space-x-2 pb-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryFilter;
