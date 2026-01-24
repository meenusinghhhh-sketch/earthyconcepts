import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-muted" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo prominently displayed */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl italic text-muted-foreground">
            "In all of nature there is something of the marvelous."
            <footer className="mt-2 text-sm not-italic">— Aristotle</footer>
          </blockquote>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Natural <span className="text-primary">&</span> Conscious
            <br />
            <span className="text-primary">Wellness</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rooted in time-honored traditions and reimagined through modern innovation. 
            We draw exclusively from the earth's natural resources to create thoughtful 
            solutions for health, skincare, and everyday living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/products">
                <Leaf className="h-5 w-5" />
                Explore Products
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/about">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              GMP Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              HACCP Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Lab Tested
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
