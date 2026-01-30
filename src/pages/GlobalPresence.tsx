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
  { name: 'GMP Certified' },
  { name: 'ISO Certified' },
  { name: 'HACCP Certified' },
  { name: 'FDA Compliant' },
  { name: 'Dubai Approved' },
  { name: 'Lab Tested' },
];

const GlobalPresence = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Earthy Concepts, I'm interested in partnering or distributing your products internationally. Please share more details."
  );

  return (
    <Layout>
      {/* Hero Section - Minimal */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Global Presence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Rooted in Tradition, Built for the World
            </h1>
          </div>
        </div>
      </section>

      {/* Certifications Section - Minimal */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Responsible Sourcing</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-none shadow-sm text-center">
                <CardContent className="p-4">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets - Minimal */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Markets We Serve</h2>
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

      {/* CTA Section - Minimal */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us</h2>
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