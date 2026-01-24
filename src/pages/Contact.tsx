import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import logo from '@/assets/logo.jpeg';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-20 w-auto object-contain mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out to us through WhatsApp for the 
              fastest response, or use any of our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp - Primary */}
              <Card className="md:col-span-2 bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-10 w-10" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h2 className="text-2xl font-bold mb-2">Order on WhatsApp</h2>
                      <p className="opacity-90 mb-4">
                        The fastest way to place an order or get your questions answered. 
                        Click below to start a conversation with us.
                      </p>
                      <Button 
                        asChild 
                        size="lg" 
                        variant="secondary"
                        className="gap-2"
                      >
                        <a 
                          href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        For detailed inquiries and business partnerships
                      </p>
                      <a 
                        href="mailto:info@earthyconcepts.com"
                        className="text-primary hover:underline font-medium"
                      >
                        info@earthyconcepts.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Speak directly with our team
                      </p>
                      <a 
                        href="tel:+971XXXXXXXXX"
                        className="text-primary hover:underline font-medium"
                      >
                        +971 XX XXX XXXX
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our headquarters
                      </p>
                      <p className="text-foreground">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        When you can reach us
                      </p>
                      <p className="text-foreground">
                        Sunday - Thursday<br />
                        9:00 AM - 6:00 PM GST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Teaser */}
            <div className="mt-16 text-center p-8 bg-muted/50 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">
                Have Questions About Our Products?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're curious about ingredients, usage instructions, or want 
                personalized recommendations, we're here to help. Simply reach out via 
                WhatsApp for quick answers!
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <a 
                  href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20have%20a%20question%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ask Us Anything
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

export default Contact;
