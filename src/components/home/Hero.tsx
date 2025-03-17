
import React, { useEffect, useState } from 'react';
import { ArrowRight, ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-12 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-green-50"></div>
        <div className="absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-green-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`space-y-6 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-1.5">
              <span className="text-xs font-medium text-green-600">Green Technology</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-green-600"></div>
              <span className="text-xs text-green-600">Sustainable Shopping</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Discover Eco-Friendly Shopping with <span className="text-green-600">AI</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Experience the future of sustainable e-commerce with personalized AI recommendations that match your values.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                variant="primary"
                icon={<ShoppingCart className="w-4 h-4" />}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm text-muted-foreground">Carbon-neutral</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="text-sm text-muted-foreground">30-day returns</div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="text-sm text-muted-foreground">Free shipping on $50+</div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Smart eco-friendly product with sustainable packaging" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Product details card */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium truncate">Eco Smart Watch</h3>
                    <p className="text-sm text-green-600">Sustainable materials</p>
                  </div>
                  <div className="text-base font-semibold">$129.99</div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 animate-float">
              <div className="glass rounded-full px-4 py-2 flex items-center shadow-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse mr-2"></div>
                <span className="text-xs font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
