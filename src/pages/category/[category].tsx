
import React from 'react';
import { useRouter } from 'next/router';
import ProductGrid from '@/components/home/ProductGrid';
import { Product } from '@/components/ui/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Sample product data - in a real app, this would be fetched based on the category
const allProducts: Record<string, Product[]> = {
  electronics: [
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
      id: "8",
      name: "Energy-Efficient LED Desk Lamp",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      ratingCount: 114,
      isEco: true
    }
  ],
  fashion: [
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
      id: "9",
      name: "Sustainable Denim Jeans",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      ratingCount: 78,
      isEco: true
    },
    {
      id: "10",
      name: "Recycled Polyester Backpack",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      ratingCount: 112,
      isEco: true,
      isSale: true
    }
  ],
  home: [
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
      id: "11",
      name: "Organic Cotton Bed Sheets",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1583177661827-69ed6c25ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkJTIwc2hlZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      ratingCount: 134,
      isEco: true,
      isSale: true
    },
    {
      id: "12",
      name: "Bamboo Cutting Board Set",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1628684895467-7682a71c4c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0dGluZyUyMGJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      ratingCount: 92,
      isEco: true
    }
  ],
  beauty: [
    {
      id: "13",
      name: "Organic Face Serum",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1570179538669-b4b1b09ce362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZSUyMHNlcnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      ratingCount: 118,
      isEco: true,
      isNew: true
    },
    {
      id: "14",
      name: "Natural Bamboo Hairbrush",
      price: 19.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1590003702931-9639567421ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMGJydXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      ratingCount: 86,
      isEco: true
    },
    {
      id: "15",
      name: "Vegan Lip Balm Set",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1594155128909-95f3c086a267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlwJTIwYmFsbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      ratingCount: 142,
      isEco: true
    }
  ],
  eco: [
    {
      id: "16",
      name: "Reusable Silicone Food Bags",
      price: 18.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1610406295541-e34858bf2c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmV1c2FibGUlMjBiYWdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      ratingCount: 96,
      isEco: true,
      isSale: true
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
      id: "6",
      name: "Biodegradable Phone Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1609447332910-1aa5b5e8e0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      ratingCount: 78,
      isEco: true
    },
    {
      id: "17",
      name: "Compostable Plant Pots",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1617121544707-8d17b6bcc48f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnQlMjBwb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      ratingCount: 108,
      isEco: true
    }
  ]
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  
  // Convert the category to lowercase for comparison with our data
  const categorySlug = typeof category === 'string' ? category.toLowerCase() : '';
  
  // Get the products for this category
  const products = categorySlug && allProducts[categorySlug] ? allProducts[categorySlug] : [];
  
  // Format the category name for display
  const categoryName = categorySlug ? capitalizeFirstLetter(categorySlug) : '';

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{categoryName}</h1>
          <p className="mt-2 text-muted-foreground">
            Explore our sustainable {categoryName.toLowerCase()} collection
          </p>
        </div>
        
        {products.length > 0 ? (
          <ProductGrid 
            products={products} 
            showViewAll={false}
          />
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
            <Link href="/" className="mt-4 inline-block">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
