import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Shield, 
  Award,
  Building2,
  Users,
  Heart,
  CheckCircle,
  MessageCircle,
  Leaf,
  FlaskConical
} from 'lucide-react';

const certifications = [
  { name: 'GMP Certified', description: 'Good Manufacturing Practices' },
  { name: 'ISO Certified', description: 'International quality standards' },
  { name: 'HACCP Certified', description: 'Food safety management' },
  { name: 'FDA Compliant', description: 'US regulatory compliance ready' },
  { name: 'Dubai Approved', description: 'UAE authorities registered' },
  { name: 'Lab Tested', description: 'Verified efficacy & purity' },
];

const marketSegments = [
  {
    icon: Users,
    title: 'For Individuals',
    points: [
      'Pure daily wellness essentials',
      'Holistic skin & body health',
      'Nature-inspired health solutions',
    ],
  },
  {
    icon: Building2,
    title: 'For Businesses',
    subtitle: 'Retail, Spa, Clinic',
    points: [
      'Product knowledge development',
      'Minimum order flexibility for boutique stores',
      'Customised formulations',
    ],
  },
  {
    icon: Heart,
    title: 'For Institutions',
    subtitle: 'Authorities & Organizations',
    points: [
      'Product lines for wellness campaigns',
      'Gifting packs for seasonal programs',
      'Hospital & clinic wellness kits',
    ],
  },
];

const globalCapabilities = [
  'Multi-country distribution capabilities',
  'Launch-ready on global e-commerce platforms',
  'Product categories designed for worldwide appeal',
  'International market compliant formulations',
  'Eco-conscious packaging for global shipping',
  'Documentation ready for export requirements',
];

const GlobalPresence = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in partnering or distributing your products internationally. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Global Presence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Rooted in Tradition, Built for the World
            </h1>
            <p className="text-lg text-muted-foreground">
              A symphony between ancient science and modern wellness lifestyle. 
              Earthy Concepts brings Ayurvedic wisdom to global markets with 
              internationally compliant, ethically sourced wellness solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Responsible Sourcing</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our production partners enable Earthy Concepts to curate safe, ethical, 
              and premium products — ready for the world.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-none shadow-sm text-center">
                <CardContent className="p-4">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              International Market Ready
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're an individual seeking wellness, a business looking to stock 
              natural products, or an institution planning health programs—we're ready to serve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {marketSegments.map((segment) => (
              <Card key={segment.title} className="border-none shadow-md">
                <CardContent className="p-6">
                  <segment.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{segment.title}</h3>
                  {segment.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4">{segment.subtitle}</p>
                  )}
                  <ul className="space-y-3 mt-4">
                    {segment.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Capabilities */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Building a Global Presence
              </h2>
              <p className="text-muted-foreground mb-8">
                From our roots in Dubai, UAE, we are expanding to serve wellness seekers 
                across continents. Our infrastructure, certifications, and product range 
                are designed to meet international standards while preserving the authenticity 
                of traditional Ayurvedic formulations.
              </p>
              <ul className="space-y-4">
                {globalCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-10">
              <FlaskConical className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Quality Without Compromise</h3>
              <p className="text-muted-foreground mb-6">
                Every product that carries the Earthy Concepts name undergoes rigorous 
                testing for efficacy and purity. Our commitment to conscious sourcing 
                ensures that what reaches you is as nature intended—pure, potent, and purposeful.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Eco-Conscious</Badge>
                <Badge variant="secondary">Ethically Sourced</Badge>
                <Badge variant="secondary">Lab Verified</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Markets We Serve</h2>
            <p className="text-muted-foreground mb-8">
              Currently serving and expanding to wellness-conscious communities worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="py-2 px-4 text-sm">🇮🇳 India</Badge>
              <Badge variant="outline" className="py-2 px-4 text-sm">🇦🇪 UAE & GCC</Badge>
              <Badge variant="outline" className="py-2 px-4 text-sm">🇬🇧 United Kingdom</Badge>
              <Badge variant="outline" className="py-2 px-4 text-sm">🇪🇺 European Union</Badge>
              <Badge variant="outline" className="py-2 px-4 text-sm">🇺🇸 United States</Badge>
              <Badge variant="outline" className="py-2 px-4 text-sm">🇦🇺 Australia</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're a distributor, retailer, spa, or institution interested 
              in bringing Earthy Concepts to your market—we'd love to connect.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a
                href={`https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Connect on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default GlobalPresence;
