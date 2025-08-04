import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import UserFeedback from '@/components/UserFeedback';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <UserFeedback />
      <Footer />
    </div>
  );
};

export default Index;
