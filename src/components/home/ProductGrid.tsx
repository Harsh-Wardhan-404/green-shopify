
import React from 'react';
import Link from 'next/link';
import ProductCard, { Product } from '../ui/ProductCard';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface ProductGridProps {
  title?: string;
  description?: string;
  products: Product[];
  className?: string;
  showViewAll?: boolean;
}

const ProductGrid = ({ 
  title, 
  description, 
  products, 
  className,
  showViewAll = true
}: ProductGridProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <div className="mb-10 max-w-2xl">
            {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
            {description && <p className="mt-3 text-muted-foreground">{description}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 stagger-children">
          {products.map((product) => (
            <div key={product.id} className="slide-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link href="/products">
              <Button 
                variant="outline" 
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="hover:bg-green-600 hover:text-white hover:border-green-600"
              >
                View All Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
