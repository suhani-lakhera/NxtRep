import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  sizes: string[];
  onAddToCart: (productId: string, size: string) => void;
}

const ProductCard = ({ id, name, image, price, rating, sizes, onAddToCart }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleAddToCart = () => {
    onAddToCart(id, selectedSize);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Name and Rating */}
        <div>
          <h3 className="font-premium font-semibold text-lg text-foreground mb-1">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-2xl font-premium font-bold text-foreground">
          ${price}
        </div>

        {/* Size Selection */}
        <div>
          <label className="text-sm font-premium font-medium text-foreground mb-2 block">
            Size:
          </label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm font-premium border rounded transition-colors ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:border-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          variant="cart"
          className="w-full group"
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;