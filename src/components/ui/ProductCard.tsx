
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Check, Leaf } from 'lucide-react';
import Button from './Button';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  ratingCount: number;
  isEco?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    ratingCount,
    isEco = false,
    isNew = false,
    isSale = false
  } = product;
  
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;
  
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };
  
  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">New</span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">Sale</span>
          )}
          {isEco && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center">
              <Leaf className="w-3 h-3 mr-1" /> Eco
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={`absolute top-3 right-3 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md transition-colors hover:bg-green-50"
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>
        
        {/* Add to cart overlay */}
        <div 
          className={`absolute inset-0 bg-black/5 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Button
            onClick={handleAddToCart}
            icon={isAddedToCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
            variant={isAddedToCart ? "primary" : "outline"}
            className="bg-white border-white shadow-md hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
          >
            {isAddedToCart ? "Added" : "Add to Cart"}
          </Button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <h3 className="font-medium text-sm sm:text-base">{name}</h3>
        
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="ml-1 text-xs text-gray-600">{rating}</span>
          </div>
          <span className="mx-1 text-gray-300">|</span>
          <span className="text-xs text-gray-500">{ratingCount} reviews</span>
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="font-semibold">${price.toFixed(2)}</span>
          {originalPrice && (
            <>
              <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
              <span className="ml-2 text-xs font-medium text-green-600">-{discount}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
