
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

export interface PostProps {
  id: string;
  businessId: string;
  businessName: string;
  businessLogo: string;
  imageUrl: string;
  description: string;
  likes: number;
  comments: number;
  postedAt: string;
  category: string;
}

const Post: React.FC<PostProps> = ({
  id,
  businessId,
  businessName,
  businessLogo,
  imageUrl,
  description,
  likes,
  comments,
  postedAt,
  category
}) => {
  return (
    <Card className="mb-4 overflow-hidden border">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center space-x-3">
          <Link to={`/business/${businessId}`}>
            <Avatar className="h-10 w-10 border">
              <img
                src={businessLogo}
                alt={businessName}
                className="object-cover"
              />
            </Avatar>
          </Link>
          <div className="flex-1 min-w-0">
            <Link to={`/business/${businessId}`} className="hover:underline">
              <p className="font-medium">{businessName}</p>
            </Link>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/business/${businessId}`}>Visitar</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <Link to={`/post/${id}`}>
          <img
            src={imageUrl}
            alt={`Post de ${businessName}`}
            className="w-full aspect-square md:aspect-[4/3] lg:aspect-[16/9] object-cover"
          />
        </Link>
        <div className="p-4">
          <p className="text-sm">{description}</p>
          <p className="text-xs text-muted-foreground mt-2">{postedAt}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-0">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-0">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Share className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
