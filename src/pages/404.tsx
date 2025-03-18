
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-4xl md:text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-xl md:text-2xl font-medium">Page Not Found</h2>
      <p className="mt-2 text-center text-muted-foreground max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button 
          variant="outline" 
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
