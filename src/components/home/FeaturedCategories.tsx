
import React from 'react';
import { ArrowRight, Smartphone, ShoppingBag, Home, Sparkles, Leaf } from 'lucide-react';

const CategoryCard = ({ 
  title, 
  description, 
  icon: Icon, 
  image,
  color 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  image: string;
  color: string; 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-${color}-800/30 backdrop-blur-[2px]`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        <div>
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-${color}-600/90`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-medium">{title}</h3>
          <p className="mt-1 text-sm text-white/80">{description}</p>
        </div>
        
        <div className="pt-4">
          <a 
            href={`/category/${title.toLowerCase()}`} 
            className="inline-flex items-center text-sm font-medium"
          >
            Explore
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Electronics",
      description: "Energy-efficient devices designed for sustainability",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600",
      color: "indigo"
    },
    {
      title: "Fashion",
      description: "Eco-friendly clothing made from sustainable materials",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600",
      color: "blue"
    },
    {
      title: "Home",
      description: "Energy-saving appliances for a greener home",
      icon: Home,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600",
      color: "teal"
    },
    {
      title: "Beauty",
      description: "Natural and organic beauty products",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1624453962213-28884e9e2b01?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600",
      color: "pink"
    },
    {
      title: "Eco",
      description: "Innovative products for a sustainable lifestyle",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600",
      color: "green"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="mt-3 text-muted-foreground">Discover our curated collection of sustainable products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.title} 
              className="slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CategoryCard 
                title={category.title}
                description={category.description}
                icon={category.icon}
                image={category.image}
                color={category.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
