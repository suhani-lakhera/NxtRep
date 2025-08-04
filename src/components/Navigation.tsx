import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Search, User, ShoppingCart, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const productCategories = [
    { name: 'T-Shirts', path: '/products/tshirts' },
    { name: 'Compressions', path: '/products/compressions' },
    { name: 'Vests', path: '/products/vests' },
    { name: 'Bottoms', path: '/products/bottoms' },
    { name: 'Accessories', path: '/products/accessories' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side - Products Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 font-premium"
            >
              <Menu className="h-4 w-4" />
              Products
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-premium z-50 animate-scale-in">
                <div className="py-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-premium hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center - Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="NxtRep" className="h-8 w-8" />
            <span className="font-athletic text-2xl font-bold tracking-wider">NxtRep</span>
          </Link>

          {/* Right Side - Icons */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-4 w-4" />
              </Button>
              
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-premium z-50 animate-slide-in-right">
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        autoFocus
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Account */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;