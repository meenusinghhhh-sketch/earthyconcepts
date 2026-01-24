import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CalendarCheck, 
  Truck, 
  Percent, 
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Gift,
  Clock,
  Shield
} from 'lucide-react';

const subscriptionPlans = [
  {
    name: 'Starter',
    description: 'Perfect for trying out wellness routines',
    frequency: 'Monthly',
    discount: '10%',
    features: [
      'Choose any 2 products',
      '10% off retail price',
      'Free delivery',
      'Pause or cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Wellness',
    description: 'Our most popular subscription',
    frequency: 'Monthly',
    discount: '15%',
    features: [
      'Choose any 4 products',
      '15% off retail price',
      'Priority delivery',
      'Wellness consultation included',
      'Pause or cancel anytime',
    ],
    popular: true,
  },
  {
    name: 'Family',
    description: 'Complete wellness for the whole family',
    frequency: 'Monthly',
    discount: '20%',
    features: [
      'Choose any 8 products',
      '20% off retail price',
      'Express delivery',
      'Quarterly wellness review',
      'Exclusive early access to new products',
      'Pause or cancel anytime',
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: Percent,
    title: 'Save Up to 20%',
    description: 'Enjoy exclusive discounts on your favorite wellness products.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Your wellness essentials delivered to your door at no extra cost.',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Plans',
    description: 'Modify, pause, or cancel your subscription anytime.',
  },
  {
    icon: Gift,
    title: 'Surprise Gifts',
    description: 'Receive exclusive samples and seasonal wellness surprises.',
  },
  {
    icon: Clock,
    title: 'Never Run Out',
    description: 'Automatic replenishment ensures you always have your essentials.',
  },
  {
    icon: Shield,
    title: 'Priority Support',
    description: 'Dedicated wellness support for all subscribers.',
  },
];

const Subscription = () => {
  const getWhatsAppLink = (planName: string) => {
    const message = encodeURIComponent(
      `Hello Earthy Concepts, I'm interested in the ${planName} subscription plan. Please share more details.`
    );
    return `https://wa.me/971XXXXXXXXX?text=${message}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <CalendarCheck className="h-4 w-4" />
              <span className="text-sm font-medium">Subscribe & Save</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Wellness on Autopilot
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Never run out of your favorite Ayurvedic essentials. Subscribe to regular deliveries 
              of your wellness products and enjoy exclusive discounts, free shipping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Wellness Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the plan that fits your lifestyle. All plans include free delivery and the flexibility to modify anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.discount}</span>
                    <span className="text-muted-foreground"> off</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.frequency}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subscriber Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our wellness community and enjoy exclusive perks designed to support your health journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-none shadow-md">
                <CardContent className="p-6">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Choose Your Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Select the subscription that fits your wellness needs and budget.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Pick Your Products</h3>
                <p className="text-sm text-muted-foreground">
                  Select your favorite products from our entire wellness range.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Enjoy & Repeat</h3>
                <p className="text-sm text-muted-foreground">
                  Receive your wellness box monthly. Modify anytime as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Subscription;
