
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductGrid from '../components/home/ProductGrid';
import Cart from '../components/ui/Cart';
import { CartProvider } from '../hooks/useCart';
import { Product } from '../components/ui/ProductCard';

// Sample product data
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Eco Smart Watch",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    ratingCount: 128,
    isEco: true,
    isNew: true
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    price: 89.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyYnVkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    ratingCount: 86,
    isEco: false
  },
  {
    id: "3",
    name: "Recycled Laptop Sleeve",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1603816507233-253859eb86d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwc2xlZXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    ratingCount: 42,
    isEco: true
  },
  {
    id: "4",
    name: "Sustainable Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1573551091534-998e749d5f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    ratingCount: 156,
    isEco: true,
    isSale: true
  },
  {
    id: "5",
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG9vdGhicnVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    ratingCount: 74,
    isEco: true
  },
  {
    id: "6",
    name: "Organic Cotton T-shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    ratingCount: 98,
    isEco: true
  },
  {
    id: "7",
    name: "Biodegradable Phone Case",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1592813699966-c0616cce2e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    ratingCount: 56,
    isEco: true,
    isSale: true
  },
  {
    id: "8",
    name: "Solar Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609592299271-4c3aae4264a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    ratingCount: 112,
    isEco: true,
    isNew: true
  }
];

const newArrivals: Product[] = [
  {
    id: "9",
    name: "Smart Plant Monitor",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnQlMjBtb25pdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    ratingCount: 32,
    isEco: true,
    isNew: true
  },
  {
    id: "10",
    name: "Recycled Paper Notebook",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    ratingCount: 45,
    isEco: true,
    isNew: true
  },
  {
    id: "11",
    name: "Bamboo Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    ratingCount: 28,
    isEco: true,
    isNew: true
  },
  {
    id: "12",
    name: "Compostable Phone Stand",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBzdGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    ratingCount: 18,
    isEco: true,
    isNew: true
  }
];

const Index = () => {
  // Change document title
  useEffect(() => {
    document.title = "shop.ai | Sustainable E-commerce";
  }, []);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="bg-gradient-to-b from-white to-green-50">
            <FeaturedCategories />
          
            <ProductGrid 
              title="Featured Products" 
              description="Discover our selection of sustainable and eco-friendly products"
              products={featuredProducts}
            />
            
            <ProductGrid 
              title="New Arrivals" 
              description="The latest additions to our sustainable collection"
              products={newArrivals}
              className="pt-0"
            />
          </div>
          
          {/* Sustainability Banner */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="glass bg-green-600/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                    Green Software Development
                  </h2>
                  <p className="text-green-700 mb-6">
                    Our e-commerce platform is built with sustainability in mind. We optimize for energy efficiency, minimize carbon emissions, and leverage AI to provide personalized recommendations while reducing computational waste.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Carbon-optimized code</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Energy-efficient AI</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Sustainable hosting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
