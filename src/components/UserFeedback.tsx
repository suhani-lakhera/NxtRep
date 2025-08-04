import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserFeedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const existingReviews = [
    {
      name: 'Marcus K.',
      rating: 5,
      comment: 'Incredible quality! These compression shirts feel like a second skin. Perfect for intense workouts.',
    },
    {
      name: 'Sarah T.',
      rating: 5,
      comment: 'Finally found athletic wear that combines style and performance. The fabric is amazing!',
    },
    {
      name: 'Jake M.',
      rating: 4,
      comment: 'Great products overall. The fit is perfect and the material holds up well during training.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.comment.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback Submitted",
      description: "Thank you for your review!",
    });

    setFormData({ name: '', rating: 5, comment: '' });
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? 'text-yellow-400 fill-current'
                : 'text-muted-foreground'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={interactive && onStarClick ? () => onStarClick(i + 1) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-athletic text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-wider">
            What Athletes Say About NxtRep
          </h2>
          <p className="font-premium text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real athletes who trust NxtRep for their performance needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Existing Reviews */}
          <div>
            <h3 className="font-premium font-bold text-xl text-foreground mb-6">
              Customer Reviews
            </h3>
            <div className="space-y-6">
              {existingReviews.map((review, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-card animate-fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-premium font-semibold text-foreground">
                      {review.name}
                    </span>
                    {renderStars(review.rating)}
                  </div>
                  <p className="font-premium text-muted-foreground leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <h3 className="font-premium font-bold text-xl text-foreground mb-6">
              Share Your Experience
            </h3>
            <form onSubmit={handleSubmit} className="bg-background p-6 rounded-lg shadow-card space-y-4">
              {/* Name Input */}
              <div>
                <label className="block font-premium font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Star Rating */}
              <div>
                <label className="block font-premium font-medium text-foreground mb-2">
                  Rating
                </label>
                {renderStars(formData.rating, true, (rating) => 
                  setFormData(prev => ({ ...prev, rating }))
                )}
              </div>

              {/* Comment Textarea */}
              <div>
                <label className="block font-premium font-medium text-foreground mb-2">
                  Your Review
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  placeholder="Share your experience with NxtRep..."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="shop" className="w-full">
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
