
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, Menu, Share, Heart, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Post, { PostProps } from '@/components/features/Post';

const BusinessProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('about');

  // Mock data - in a real app, this would come from an API call using the id param
  const businessData = {
    id: '101',
    name: 'Bar do João',
    coverImage: 'https://images.unsplash.com/photo-1538488881038-e252a119ace7',
    logo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    category: 'Bar',
    rating: 4.7,
    address: 'Rua das Flores, 123 - Centro',
    phone: '(11) 99999-9999',
    openingHours: [
      'Segunda a Quinta: 18:00 - 00:00',
      'Sexta e Sábado: 18:00 - 02:00',
      'Domingo: 16:00 - 22:00'
    ],
    description: 'Bar tradicional com mais de 15 anos de história. Ambiente descontraído com música ao vivo todas as noites e os melhores petiscos da cidade.',
    features: ['Música ao vivo', 'Happy Hour', 'Petiscos', 'Cervejas artesanais', 'Coquetéis especiais'],
    menu: [
      { category: 'Petiscos', items: [
        { name: 'Tábua de frios', price: 'R$ 65,00', description: 'Queijos variados, presunto e salame' },
        { name: 'Batata frita com cheddar', price: 'R$ 32,00', description: 'Porção grande com molho especial' },
        { name: 'Bolinho de bacalhau', price: 'R$ 45,00', description: '10 unidades' },
      ]},
      { category: 'Bebidas', items: [
        { name: 'Chope Pilsen', price: 'R$ 12,00', description: '350ml' },
        { name: 'Caipirinha', price: 'R$ 18,00', description: 'Limão, morango ou maracujá' },
        { name: 'Whisky', price: 'R$ 25,00', description: 'Dose de 50ml' },
      ]},
    ],
    upcomingEvents: [
      { 
        id: 'e1', 
        title: 'Noite de Blues', 
        date: '25/05/2023', 
        time: '20:00', 
        description: 'Show com a banda Blue Note' 
      },
      { 
        id: 'e2', 
        title: 'Happy Hour Especial', 
        date: '02/06/2023', 
        time: '18:00 - 21:00', 
        description: 'Chopp em dobro e petiscos com 30% de desconto' 
      },
    ],
    entranceFee: {
      weekdays: 'Entrada gratuita',
      weekends: 'R$ 20,00 (consumação mínima)'
    }
  };

  // Mock posts from this business
  const businessPosts: PostProps[] = [
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
      id: '4',
      businessId: '101',
      businessName: 'Bar do João',
      businessLogo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      imageUrl: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7',
      description: 'Nova cerveja artesanal disponível! IPA com notas cítricas e amargor equilibrado.',
      likes: 98,
      comments: 12,
      postedAt: 'há 3 dias',
      category: 'Bares'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative h-64 md:h-80">
        <img
          src={businessData.coverImage}
          alt={`${businessData.name} cover`}
          className="w-full h-full object-cover"
        />
        <Link to="/" className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Link>
      </div>
      
      <div className="container px-4 mx-auto md:px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <img
                src={businessData.logo}
                alt={businessData.name}
                className="object-cover"
              />
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div>
                  <h1 className="text-2xl font-bold">{businessData.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge>{businessData.category}</Badge>
                    <span className="text-sm text-muted-foreground">⭐ {businessData.rating}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-2 md:mt-0">
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-5">
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="menu">Cardápio</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Sobre o estabelecimento</h3>
                  <p className="text-muted-foreground">{businessData.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Localização</h4>
                        <p className="text-sm text-muted-foreground">{businessData.address}</p>
                        <Button variant="link" className="p-0 h-auto text-sm mt-1">Ver no mapa</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Contato</h4>
                        <p className="text-sm text-muted-foreground">{businessData.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Horário de funcionamento</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                          {businessData.openingHours.map((hours, index) => (
                            <li key={index}>{hours}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      {businessData.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="menu" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Cardápio</h3>
                  
                  {businessData.menu.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h4 className="text-md font-semibold mb-3 pb-2 border-b">
                        {section.category}
                      </h4>
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between">
                            <div>
                              <h5 className="font-medium">{item.name}</h5>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <span className="font-medium">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    * Cardápio sujeito a alterações. Consulte o estabelecimento para mais informações.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="posts" className="mt-4">
              <div className="max-w-2xl mx-auto">
                {businessPosts.map((post) => (
                  <Post key={post.id} {...post} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Próximos eventos</h3>
                  
                  {businessData.upcomingEvents.length > 0 ? (
                    <div className="space-y-4">
                      {businessData.upcomingEvents.map((event) => (
                        <div key={event.id} className="border rounded-md p-4">
                          <div className="flex items-start">
                            <div className="bg-muted rounded-md p-2 mr-4">
                              <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{event.title}</h4>
                              <p className="text-sm">{event.date} às {event.time}</p>
                              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Nenhum evento programado no momento.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="info" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Informações adicionais</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Valor de entrada</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Dias de semana: {businessData.entranceFee.weekdays}</li>
                        <li>Final de semana: {businessData.entranceFee.weekends}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Formas de pagamento</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Dinheiro, cartões de crédito/débito e PIX
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Acessibilidade</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Estabelecimento com entrada acessível para cadeirantes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BusinessProfile;
