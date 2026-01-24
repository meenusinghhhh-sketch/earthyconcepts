import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Users, 
  Heart, 
  Award, 
  Package, 
  Handshake,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const corporateServices = [
  {
    icon: Users,
    title: 'Employee Wellness Programs',
    description: 'Comprehensive wellness solutions tailored to your workforce, promoting health and productivity.',
  },
  {
    icon: Package,
    title: 'Bulk & Custom Orders',
    description: 'Volume discounts on our entire product range with customized packaging options.',
  },
  {
    icon: Award,
    title: 'Branded Wellness Kits',
    description: 'Custom-branded wellness hampers featuring your company logo and messaging.',
  },
  {
    icon: Heart,
    title: 'Health Workshops',
    description: 'Educational sessions on Ayurvedic wellness for your team, led by wellness experts.',
  },
  {
    icon: Handshake,
    title: 'Partnership Programs',
    description: 'Long-term wellness partnerships with dedicated account management.',
  },
  {
    icon: Building2,
    title: 'Institutional Solutions',
    description: 'Specialized programs for hospitals, spas, hotels, and wellness centers.',
  },
];

const benefits = [
  'Improved employee health and reduced sick days',
  'Enhanced workplace morale and productivity',
  'Unique corporate gifting solutions',
  'Flexible ordering and delivery schedules',
  'Dedicated corporate account manager',
  'Volume-based pricing structures',
];

const CorporateWellness = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in your Corporate Wellness programs. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Corporate Wellness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Elevate Your Workplace Wellness
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with Earthy Concepts to bring the healing power of Ayurveda to your organization. 
              Our corporate wellness programs are designed to nurture employee health, boost productivity, 
              and create a culture of holistic well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Corporate Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Corporate Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From employee wellness kits to branded corporate gifts, we offer comprehensive solutions for businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service) => (
              <Card key={service.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Earthy Concepts for Corporate Wellness?</h2>
              <p className="text-muted-foreground mb-8">
                We understand that a healthy workforce is a productive workforce. Our corporate wellness 
                programs combine ancient Ayurvedic wisdom with modern workplace needs, delivering 
                tangible results for your organization.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workplace?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our corporate wellness team to discuss customized solutions for your organization.
              </p>
              <Button size="lg" className="w-full" asChild>
                <a
                  href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default CorporateWellness;
