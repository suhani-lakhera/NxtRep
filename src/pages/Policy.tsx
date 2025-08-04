import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Policy = () => {
  const { policy } = useParams<{ policy: string }>();
  
  const policyTypes: Record<string, string> = {
    return: 'Return & Exchange Policy',
    refund: 'Refund Policy',
    shipping: 'Shipping Policy',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  };

  const displayName = policyTypes[policy || ''] || 'Policy';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-athletic text-4xl font-bold text-foreground mb-4">
            {displayName}
          </h1>
          <p className="font-premium text-lg text-muted-foreground mb-8">
            Our commitment to transparency and customer satisfaction
          </p>
          <p className="font-premium text-muted-foreground mb-8">
            Detailed policy information coming soon
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

export default Policy;