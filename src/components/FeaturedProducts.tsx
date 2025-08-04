import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { useToast } from '@/hooks/use-toast';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const FeaturedProducts = () => {
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: 'rep001-compression-1',
      name: 'Elite Compression Tee',
      image: product1,
      price: 89,
      rating: 4.8,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'rep001-shorts-1',
      name: 'Performance Training Shorts',
      image: product2,
      price: 75,
      rating: 4.9,
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 'rep001-vest-1',
      name: 'Athletic Tank Top',
      image: product3,
      price: 65,
      rating: 4.7,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
  ];

  const handleAddToCart = (productId: string, size: string) => {
    toast({
      title: "Added to Cart",
      description: `Product added in size ${size}`,
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-athletic text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-wider">
            Featured Products
          </h2>
          <p className="font-premium text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our Rep001 collection - engineered for athletes who demand excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Full Collection Button */}
        <div className="text-center">
          <Button 
            variant="athletic" 
            size="lg" 
            asChild
            className="group"
          >
            <Link to="/collections/rep001">
              Go to Full Collection
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;