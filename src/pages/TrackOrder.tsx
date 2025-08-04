import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package } from 'lucide-react';

const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="font-athletic text-4xl font-bold text-foreground mb-4">
            Track Your Order
          </h1>
          <p className="font-premium text-lg text-muted-foreground mb-8">
            Enter your order details to track your NxtRep package
          </p>
          
          <div className="max-w-md mx-auto space-y-4 mb-8">
            <input
              type="text"
              placeholder="Order Number"
              className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="athletic" className="w-full">
              Track Order
            </Button>
          </div>
          
          <Button variant="ghost" asChild>
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

export default TrackOrder;