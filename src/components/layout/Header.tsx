
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User, 
  Heart, 
  Leaf 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "Electronics", "Fashion", "Home", "Beauty", "Eco"
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Leaf className="w-6 h-6 text-green-600 mr-2" />
            <Link 
              href="/" 
              className="text-lg md:text-xl font-semibold"
            >
              shop<span className="text-green-600">.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="text-sm text-foreground/80 hover:text-green-600 transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-green-600 transition-colors hidden md:flex">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-green-600 transition-colors hidden md:flex">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-green-600 transition-colors hidden md:flex">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-green-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 py-4 border-t border-gray-100 slide-up">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="text-sm hover:text-green-600 transition-colors"
                >
                  {category}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2">
                <button className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
                <button className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
