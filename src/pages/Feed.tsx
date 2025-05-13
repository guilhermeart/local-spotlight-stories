
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StoryBar from '@/components/features/StoryBar';
import Post, { PostProps } from '@/components/features/Post';
import CategoryFilter from '@/components/features/CategoryFilter';
import BusinessCard from '@/components/features/BusinessCard';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts: PostProps[] = [
    {
      id: '1',
      businessId: '101',
      businessName: 'Bar do João',
      businessLogo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
      description: 'Hoje temos música ao vivo! Venha curtir com a gente as melhores do rock nacional 🎸',
      likes: 124,
      comments: 18,
      postedAt: 'há 2 horas',
      category: 'Bares'
    },
    {
      id: '2',
      businessId: '102',
      businessName: 'Restaurante Sabor',
      businessLogo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      description: 'Novidade no cardápio! Experimente nossa nova opção de filé mignon ao molho de vinho tinto. Disponível todos os dias.',
      likes: 267,
      comments: 42,
      postedAt: 'há 5 horas',
      category: 'Restaurantes'
    },
    {
      id: '3',
      businessId: '103',
      businessName: 'Balada Neon',
      businessLogo: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67',
      imageUrl: 'https://images.unsplash.com/photo-1542628682-88321d2a4828',
      description: 'Sábado tem DJ internacional! Ingressos promocionais até sexta-feira. ⚡️🎧',
      likes: 358,
      comments: 67,
      postedAt: 'há 1 dia',
      category: 'Baladas'
    },
  ];

  const featuredBusinesses = [
    {
      id: '101',
      name: 'Bar do João',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      category: 'Bar',
      rating: 4.7,
      address: 'Rua das Flores, 123',
      openingHours: '18:00 - 00:00',
      priceRange: '$$',
      features: ['Música ao vivo', 'Happy Hour', 'Petiscos']
    },
    {
      id: '102',
      name: 'Restaurante Sabor',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      category: 'Restaurante',
      rating: 4.5,
      address: 'Av. Central, 456',
      openingHours: '11:30 - 22:00',
      priceRange: '$$$',
      features: ['Alta Gastronomia', 'Vinhos', 'Sobremesas']
    },
    {
      id: '103',
      name: 'Balada Neon',
      imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67',
      category: 'Balada',
      rating: 4.3,
      address: 'Rua da Noite, 789',
      openingHours: '23:00 - 06:00',
      priceRange: '$$$',
      features: ['DJ Internacional', 'Pista VIP', 'Open bar']
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <StoryBar />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <main className="flex-1 container px-4 mx-auto md:px-6 pb-8">
        <div className="mt-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} {...business} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Feed</h2>
          <div className="max-w-2xl mx-auto">
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
