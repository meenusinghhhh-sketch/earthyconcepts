import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Heart, 
  Sparkles, 
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Leaf
} from 'lucide-react';

const giftCategories = [
  {
    name: 'Wellness Essentials',
    description: 'A curated selection of daily wellness must-haves for any recipient.',
    priceRange: 'AED 150 - 250',
    includes: ['Herbal Tea Selection', 'Single Herb Capsules', 'Face Mist'],
    icon: Leaf,
  },
  {
    name: 'Radiance Collection',
    description: 'Pamper someone special with our beauty and skincare favorites.',
    priceRange: 'AED 250 - 400',
    includes: ['Premium Body Oil', 'Face Mist', 'Ubtan Face Mask', 'Herbal Tea'],
    icon: Sparkles,
  },
  {
    name: 'Complete Wellness',
    description: 'Our most comprehensive gift set for the ultimate wellness experience.',
    priceRange: 'AED 500 - 800',
    includes: ['Premium Formulations', 'Body & Hair Oils', 'Ubtans', 'Herbal Tea Collection'],
    icon: Star,
  },
  {
    name: 'Custom Hamper',
    description: 'Create a personalized gift with your choice of products and packaging.',
    priceRange: 'Starting AED 200',
    includes: ['Your choice of products', 'Custom message card', 'Premium gift packaging'],
    icon: Package,
  },
];

const occasions = [
  'Corporate Events & Recognition',
  'Wedding & Anniversary Gifts',
  'Birthday Celebrations',
  'Festive Season (Diwali, Eid, Christmas)',
  'New Home & Housewarming',
  'Get Well Soon',
  'Thank You & Appreciation',
  'New Year Wellness Resolutions',
];

const giftFeatures = [
  {
    icon: Gift,
    title: 'Elegant Packaging',
    description: 'Each gift is beautifully wrapped in eco-friendly, premium packaging.',
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Add a custom message card to make your gift truly special.',
  },
  {
    icon: Package,
    title: 'Direct Delivery',
    description: 'We deliver directly to your recipient with gift-ready presentation.',
  },
];

const Gifting = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in your wellness gift options. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Gift className="h-4 w-4" />
              <span className="text-sm font-medium">Wellness Gifting</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Give the Gift of Wellness
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Celebrate special moments with thoughtful wellness gifts. Our beautifully curated 
              gift sets bring the healing power of Ayurveda to your loved ones, wrapped in 
              eco-friendly elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create Custom Gift
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Features */}
      <section className="py-12 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {giftFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 text-center md:text-left">
                <feature.icon className="h-8 w-8 text-primary shrink-0 mx-auto md:mx-0" />
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Curated Gift Sets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our thoughtfully curated gift collections or create your own custom hamper.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {giftCategories.map((category) => (
              <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <category.icon className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">{category.priceRange}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="space-y-1">
                      {category.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <a
                      href={`https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(`Hello, I'm interested in the ${category.name} gift set.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order This Gift
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Perfect for Every Occasion</h2>
            <p className="text-muted-foreground mb-8">
              Our wellness gifts are perfect for celebrating life's special moments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {occasions.map((occasion) => (
                <Badge 
                  key={occasion} 
                  variant="outline" 
                  className="py-2 px-4 text-sm"
                >
                  {occasion}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifting CTA */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Corporate Gifting Solutions</h2>
            <p className="text-muted-foreground mb-6">
              Looking for bulk gifting for your team or clients? We offer special corporate 
              packages with custom branding, volume discounts, and dedicated account support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/corporate-wellness">
                  Explore Corporate Gifting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Gifting;
