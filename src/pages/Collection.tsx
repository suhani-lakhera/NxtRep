import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Collection = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-athletic text-4xl font-bold text-foreground mb-4">
            Rep001 Collection
          </h1>
          <p className="font-premium text-lg text-muted-foreground mb-8">
            Our flagship collection - engineered for athletes who demand excellence
          </p>
          <p className="font-premium text-muted-foreground mb-8">
            Full collection coming soon with advanced performance technology
          </p>
          
          <Button variant="athletic" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Collection;