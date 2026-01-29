import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Shield, 
  Award,
  MessageCircle,
} from 'lucide-react';

const certifications = [
  { name: 'GMP Certified', description: 'Good Manufacturing Practices' },
  { name: 'ISO Certified', description: 'International quality standards' },
  { name: 'HACCP Certified', description: 'Food safety management' },
  { name: 'FDA Compliant', description: 'US regulatory compliance ready' },
  { name: 'Dubai Approved', description: 'UAE authorities registered' },
  { name: 'Lab Tested', description: 'Verified efficacy & purity' },
];

const GlobalPresence = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in partnering or distributing your products internationally. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
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
              Earthy Concepts brings Ayurvedic wisdom to global markets with 
              internationally compliant, ethically sourced wellness solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
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

      {/* Target Markets */}
      <section className="py-12">
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
      <section className="py-12 bg-muted/30">
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