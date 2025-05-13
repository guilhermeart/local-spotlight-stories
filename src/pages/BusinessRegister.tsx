
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BusinessRegister = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log('Registration submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-10 px-4">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Cadastre sua empresa</CardTitle>
              <CardDescription>
                Complete o formulário abaixo para criar sua página no CitySpot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Informações básicas</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Nome da empresa</Label>
                      <Input id="businessName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurante</SelectItem>
                          <SelectItem value="bar">Bar</SelectItem>
                          <SelectItem value="club">Balada/Casa noturna</SelectItem>
                          <SelectItem value="cafe">Café</SelectItem>
                          <SelectItem value="cultural">Espaço cultural</SelectItem>
                          <SelectItem value="event">Organizador de eventos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email comercial</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Localização</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Endereço completo</Label>
                      <Input id="address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipcode">CEP</Label>
                      <Input id="zipcode" required />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Sobre o estabelecimento</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Conte um pouco sobre seu estabelecimento..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="workingHours">Horário de funcionamento</Label>
                    <Textarea 
                      id="workingHours" 
                      placeholder="Ex: Segunda a Sexta: 10h às 22h, Sábado: 11h às 23h..." 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Dados de acesso</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input id="password" type="password" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar senha</Label>
                      <Input id="confirmPassword" type="password" required />
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full">Cadastrar empresa</Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
              <div className="text-sm text-center text-muted-foreground">
                Já tem uma conta?
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link to="/business-login">Faça login</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessRegister;
