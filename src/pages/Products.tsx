import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Products = () => {
  const { type } = useParams<{ type: string }>();
  
  const productTypes: Record<string, string> = {
    tshirts: 'T-Shirts',
    compressions: 'Compression Wear',
    vests: 'Athletic Vests',
    bottoms: 'Training Bottoms',
    accessories: 'Accessories',
  };

  const displayName = productTypes[type || ''] || 'Products';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-athletic text-4xl font-bold text-foreground mb-4">
            {displayName}
          </h1>
          <p className="font-premium text-lg text-muted-foreground mb-8">
            Explore our premium collection of {displayName.toLowerCase()}
          </p>
          <p className="font-premium text-muted-foreground mb-8">
            Coming soon - Premium athletic wear designed for peak performance
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

export default Products;