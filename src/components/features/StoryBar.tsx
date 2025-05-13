
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

interface StoryProps {
  id: string;
  businessName: string;
  imageUrl: string;
  businessId: string;
}

const StoryItem: React.FC<StoryProps> = ({ id, businessName, imageUrl, businessId }) => {
  return (
    <Link to={`/story/${id}`} className="flex flex-col items-center mr-4 w-[72px]">
      <div className="story-border">
        <div className="bg-white p-0.5 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={businessName}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="mt-1 text-xs text-center truncate w-full">
        {businessName}
      </span>
    </Link>
  );
};

const StoryBar = () => {
  const stories = [
    { id: '1', businessName: 'Bar do João', imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b', businessId: '101' },
    { id: '2', businessName: 'Restaurante Sabor', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', businessId: '102' },
    { id: '3', businessName: 'Balada Neon', imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67', businessId: '103' },
    { id: '4', businessName: 'Teatro Municipal', imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35', businessId: '104' },
    { id: '5', businessName: 'Café Especial', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24', businessId: '105' },
    { id: '6', businessName: 'Pizzaria Bella', imageUrl: 'https://images.unsplash.com/photo-1593504049359-74330189a345', businessId: '106' },
    { id: '7', businessName: 'Hamburgueria', imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330', businessId: '107' },
    { id: '8', businessName: 'Casa de Shows', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', businessId: '108' },
    { id: '9', businessName: 'Sorveteria', imageUrl: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35', businessId: '109' },
  ];

  return (
    <div className="bg-white py-4 border-b">
      <div className="container px-4 mx-auto md:px-6">
        <ScrollArea orientation="horizontal" className="w-full pb-4">
          <div className="flex">
            {stories.map((story) => (
              <StoryItem
                key={story.id}
                id={story.id}
                businessName={story.businessName}
                imageUrl={story.imageUrl}
                businessId={story.businessId}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default StoryBar;
