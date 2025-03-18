
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductGrid from '@/components/home/ProductGrid';
import { Product } from '@/components/ui/ProductCard';

// Sample product data
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Eco-friendly Smart Watch",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    ratingCount: 128,
    isEco: true,
    isNew: true
  },
  {
    id: "2",
    name: "Sustainable Bamboo Coffee Mug",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    ratingCount: 87,
    isEco: true
  },
  {
    id: "3",
    name: "Recycled Plastic Wireless Earbuds",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcmJ1ZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    ratingCount: 64,
    isEco: true,
    isSale: true
  },
  {
    id: "4",
    name: "Solar-Powered Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1593514314155-4e85cb1eed22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    ratingCount: 103,
    isEco: true,
    isNew: true
  },
  {
    id: "5",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    ratingCount: 92,
    isEco: true
  },
  {
    id: "6",
    name: "Biodegradable Phone Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1609447332910-1aa5b5e8e0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    ratingCount: 78,
    isEco: true
  },
  {
    id: "7",
    name: "Reusable Water Bottle",
    price: 34.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1602142946018-34606aa83259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    ratingCount: 156,
    isEco: true,
    isSale: true
  },
  {
    id: "8",
    name: "Energy-Efficient LED Desk Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    ratingCount: 114,
    isEco: true
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCategories />
      <ProductGrid 
        title="Featured Products" 
        description="Our selection of sustainable, eco-friendly products"
        products={featuredProducts}
      />
    </div>
  );
}
