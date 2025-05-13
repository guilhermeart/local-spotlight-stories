
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-6 mt-10">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium mb-4">CitySpot</h3>
            <p className="text-sm text-muted-foreground">
              Descubra os melhores lugares da sua cidade
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/restaurants" className="text-sm text-muted-foreground hover:text-foreground">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/category/bars" className="text-sm text-muted-foreground hover:text-foreground">
                  Bares
                </Link>
              </li>
              <li>
                <Link to="/category/clubs" className="text-sm text-muted-foreground hover:text-foreground">
                  Baladas
                </Link>
              </li>
              <li>
                <Link to="/category/events" className="text-sm text-muted-foreground hover:text-foreground">
                  Eventos Culturais
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/business-register" className="text-sm text-muted-foreground hover:text-foreground">
                  Cadastre sua Empresa
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} CitySpot. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
