
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-social-primary">CitySpot</span>
        </Link>

        <div className="hidden md:flex md:flex-1 md:mx-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar bares, restaurantes, eventos..."
              className="w-full pl-9 bg-muted"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            <Link to="/business-login">Entrar como Empresa</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/"
                  className="text-lg font-medium px-4 py-2 rounded-md hover:bg-muted"
                >
                  Home
                </Link>
                <Link 
                  to="/categories" 
                  className="text-lg font-medium px-4 py-2 rounded-md hover:bg-muted"
                >
                  Categorias
                </Link>
                <Link 
                  to="/trending" 
                  className="text-lg font-medium px-4 py-2 rounded-md hover:bg-muted"
                >
                  Em Alta
                </Link>
                <Link 
                  to="/business-login" 
                  className="text-lg font-medium px-4 py-2 rounded-md hover:bg-muted"
                >
                  Entrar como Empresa
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
