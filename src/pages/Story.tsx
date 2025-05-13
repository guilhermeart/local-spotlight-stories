
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Story = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally fetch story data from an API
  // For now we'll use mock data
  const stories = [
    { id: '1', businessName: 'Bar do João', imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b', businessId: '101', content: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187', description: 'Noite especial de música ao vivo!' },
    { id: '2', businessName: 'Restaurante Sabor', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', businessId: '102', content: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0', description: 'Novo prato do dia: filé mignon ao molho de vinho tinto.' },
    { id: '3', businessName: 'Balada Neon', imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67', businessId: '103', content: 'https://images.unsplash.com/photo-1542628682-88321d2a4828', description: 'Sábado tem DJ internacional!' },
    { id: '4', businessName: 'Teatro Municipal', imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35', businessId: '104', content: 'https://images.unsplash.com/photo-1503095396549-807759245b35', description: 'Nova peça em cartaz: "O Fantasma da Ópera"' },
    { id: '5', businessName: 'Café Especial', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24', businessId: '105', content: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24', description: 'Experimente nosso novo café especial importado da Colômbia.' },
    { id: '6', businessName: 'Pizzaria Bella', imageUrl: 'https://images.unsplash.com/photo-1593504049359-74330189a345', businessId: '106', content: 'https://images.unsplash.com/photo-1593504049359-74330189a345', description: 'Promoção de terça: pizza grande com borda recheada por R$49,90!' },
    { id: '7', businessName: 'Hamburgueria', imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330', businessId: '107', content: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330', description: 'Novo burger da casa com blend especial e molho secreto.' },
    { id: '8', businessName: 'Casa de Shows', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', businessId: '108', content: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', description: 'Ingressos à venda para o grande show de sábado!' },
    { id: '9', businessName: 'Sorveteria', imageUrl: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35', businessId: '109', content: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35', description: 'Novos sabores de sorvete para o verão!' },
  ];
  
  const story = stories.find(story => story.id === id);
  
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Story não encontrada</h1>
          <Link to="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black text-white p-4 sticky top-0 z-20">
        <Link to="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2" size={16} /> Voltar
        </Link>
      </div>
      
      <div className="flex-1 bg-black">
        <div className="h-screen flex flex-col">
          {/* Story content */}
          <div className="flex-1 flex items-center justify-center">
            <img 
              src={story.content} 
              alt={story.businessName} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Story info */}
          <div className="bg-gradient-to-t from-black to-transparent p-6 text-white">
            <div className="flex items-center mb-4">
              <img 
                src={story.imageUrl} 
                alt={story.businessName} 
                className="h-10 w-10 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-semibold">{story.businessName}</h3>
                <p className="text-sm opacity-70">há 2 horas</p>
              </div>
              <div className="ml-auto">
                <Link to={`/business/${story.businessId}`}>
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/10">
                    Ver perfil
                  </Button>
                </Link>
              </div>
            </div>
            <p>{story.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
