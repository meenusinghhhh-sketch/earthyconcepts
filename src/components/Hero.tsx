import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50/40 to-orange-50" />
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-[10%] w-72 h-72 bg-gradient-to-br from-primary/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-[15%] w-48 h-48 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-[20%] w-64 h-64 bg-gradient-to-tr from-teal-200/20 to-cyan-200/15 rounded-full blur-2xl" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23228B22' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative px-4 md:px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Sparkle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Handcrafted with Nature's Finest
          </div>
          
          {/* Logo prominently displayed */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl scale-110" />
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="relative h-28 md:h-36 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Quote with styled design */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -left-4 -top-2 text-4xl text-primary/20 font-serif">"</div>
            <blockquote className="text-lg md:text-xl italic text-muted-foreground px-6">
              In all of nature there is something of the marvelous.
              <footer className="mt-3 text-sm not-italic font-medium text-primary/70">— Aristotle</footer>
            </blockquote>
            <div className="absolute -right-4 bottom-4 text-4xl text-primary/20 font-serif">"</div>
          </div>

          {/* Main headline with gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">Natural</span>
            {' '}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">&</span>
            {' '}
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">Conscious</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">Wellness</span>
          </h1>

          {/* Description with enhanced styling */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rooted in time-honored traditions and reimagined through modern innovation. 
            We draw exclusively from the earth's natural resources to create thoughtful 
            solutions for <span className="text-primary font-medium">health</span>, 
            <span className="text-accent font-medium"> skincare</span>, and 
            <span className="text-primary font-medium"> everyday living</span>.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25 px-8">
              <Link to="/products">
                <Leaf className="h-5 w-5" />
                Explore Products
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5">
              <Link to="/about">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust badges with enhanced design */}
          <div className="pt-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['GMP Certified', 'ISO Certified', 'HACCP Certified', 'Lab Tested'].map((badge) => (
                <div 
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary/10 text-sm text-muted-foreground shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
