import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Award, Globe, Users, Package, Home, Baby } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products, getProductsByCategory } from '@/data/products';
import logo from '@/assets/logo.jpeg';

const coreCategories = [
  {
    icon: Leaf,
    title: 'Retail-Ready Lines',
    description: 'Clean-Label Health Capsules & Teas for Immunity, Digestion, Detox, Heart Health, and Everyday Wellness',
  },
  {
    icon: Sparkles,
    title: 'Pure Skincare',
    description: 'Face Masks, Glow Powders, Herbal Soaps, Facial Serums, Hair & Body Oils for Everyday Skincare',
  },
  {
    icon: Package,
    title: 'Gifting Editions',
    description: 'Healthcare On-The-Go, Chakra Packs, Health Kits & Organic Home Care',
  },
  {
    icon: Heart,
    title: 'Herbal Products',
    description: 'Formulated for Mind & Body Rituals - Traditional Health and Wellness',
  },
  {
    icon: Home,
    title: 'Spa & Hospitality',
    description: 'Natural & Organic Products for Hotels, Spas, Retreats & Wellness Centers',
  },
  {
    icon: Baby,
    title: 'Family Wellness',
    description: 'Gentle Products for Kids & Parents, Clean skincare for the whole family',
  },
];

const trustBadges = [
  { name: 'GMP Certified', icon: Award },
  { name: 'ISO Certified', icon: Shield },
  { name: 'HACCP Certified', icon: Shield },
  { name: 'FDA Compliant', icon: Award },
  { name: 'Lab Tested', icon: Shield },
  { name: 'Eco-Conscious', icon: Leaf },
];

const Index = () => {
  // Get featured products (first 4 from different categories)
  const featuredProducts = [
    products.find(p => p.category === 'herbal-teas'),
    products.find(p => p.category === 'single-herbs'),
    products.find(p => p.category === 'body-oils'),
    products.find(p => p.category === 'ubtans'),
  ].filter(Boolean).slice(0, 4);

  return (
    <Layout>
      <Hero />

      {/* Trust Badges - Certification Strip */}
      <section className="py-6 bg-gradient-to-r from-primary/5 via-emerald-50/50 to-accent/5 border-y border-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.name} className="flex items-center gap-2 text-muted-foreground group">
                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <badge.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                <Leaf className="h-4 w-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Earthy Concepts was born in Dubai, UAE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Created from a deep need to be responsible—to ourselves, to our communities, 
                and to the planet—Earthy Concepts stands for all things natural, intentional, 
                and conscious.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Earthy Concepts, we believe that the choices we make every day shape the 
                world we live in. Our purpose-driven approach to clean beauty, holistic wellness, 
                and conscious lifestyle essentials goes beyond products—they are tools for living 
                with awareness, integrity, and intention.
              </p>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-emerald-100/50 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 to-transparent" />
                <img 
                  src={logo} 
                  alt="Earthy Concepts" 
                  className="relative w-2/3 h-auto object-contain drop-shadow-lg"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-primary/30 rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-accent/30 rounded-br-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Categories Section - From Brochure Pages 4-5 */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Categories
            </h2>
            <p className="text-muted-foreground">
              A comprehensive range of natural wellness solutions for every aspect of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCategories.map((category, index) => {
              const colors = [
                'from-emerald-500/10 to-teal-500/5 hover:from-emerald-500/15 hover:to-teal-500/10 border-emerald-200/50',
                'from-amber-500/10 to-orange-500/5 hover:from-amber-500/15 hover:to-orange-500/10 border-amber-200/50',
                'from-rose-500/10 to-pink-500/5 hover:from-rose-500/15 hover:to-pink-500/10 border-rose-200/50',
                'from-violet-500/10 to-purple-500/5 hover:from-violet-500/15 hover:to-purple-500/10 border-violet-200/50',
                'from-cyan-500/10 to-blue-500/5 hover:from-cyan-500/15 hover:to-blue-500/10 border-cyan-200/50',
                'from-lime-500/10 to-green-500/5 hover:from-lime-500/15 hover:to-green-500/10 border-lime-200/50',
              ];
              const iconColors = [
                'bg-emerald-500/20 text-emerald-600',
                'bg-amber-500/20 text-amber-600',
                'bg-rose-500/20 text-rose-600',
                'bg-violet-500/20 text-violet-600',
                'bg-cyan-500/20 text-cyan-600',
                'bg-lime-500/20 text-lime-600',
              ];
              return (
                <Card key={category.title} className={`border bg-gradient-to-br ${colors[index]} shadow-md hover:shadow-xl transition-all duration-300 group`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${iconColors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-2 border-2">
              <Link to="/global-presence">
                <Globe className="h-4 w-4" />
                Explore Global Presence
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve - From Brochure Page 8 */}
      <section className="py-16 bg-gradient-to-r from-emerald-50/50 via-primary/5 to-teal-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg">For Individuals</h3>
              <p className="text-sm text-muted-foreground">
                Pure daily wellness, holistic skin & body health, nature-inspired essentials
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent/10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Package className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg">For Businesses</h3>
              <p className="text-sm text-muted-foreground">
                Retail, Spa, Clinic partnerships with customised formulations
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-rose-200/30">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg">For Institutions</h3>
              <p className="text-sm text-muted-foreground">
                Wellness campaigns, gifting programs, hospital & clinic kits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                <Package className="h-3.5 w-3.5" />
                Shop by Category
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Explore Our Categories
              </h2>
              <p className="text-muted-foreground">
                Discover wellness solutions crafted for your every need
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 gap-2 border-2">
              <Link to="/products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                productCount={getProductsByCategory(category.id).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-background to-amber-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-sm font-medium mb-4">
              <Heart className="h-3.5 w-3.5" />
              Bestsellers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked wellness essentials from our collection
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => product && (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25 px-8">
              <Link to="/products">
                <Leaf className="h-5 w-5" />
                Explore All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-emerald-600 to-teal-600 text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl" />
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Begin Your Wellness Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Embrace Rituals Rooted in Nature
            </h2>
            <p className="text-xl opacity-90">
              Choose a Life of Clarity, Balance, & Purpose.<br />
              <span className="font-medium">Live Consciously. Live Authentically.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="gap-2 shadow-lg px-8"
              >
                <a 
                  href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Leaf className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Index;
