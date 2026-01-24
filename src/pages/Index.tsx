import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Sparkles } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { categories, products, getProductsByCategory } from '@/data/products';
import logo from '@/assets/logo.jpeg';

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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Earthy Concepts" 
                  className="w-2/3 h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">62+</p>
                <p className="text-sm opacity-90">Natural Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rooted in Tradition, Built for the World
            </h2>
            <p className="text-muted-foreground">
              Our production partners enable Earthy Concepts to curate safe, ethical, 
              and premium products — ready for the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified Quality</h3>
              <p className="text-sm text-muted-foreground">
                GMP, ISO, HACCP-Certified Facilities with FDA-Compliant Manufacturing
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Conscious Selection</h3>
              <p className="text-sm text-muted-foreground">
                Formulations crafted for efficacy & purity, lab-tested for your safety
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Eco-Conscious</h3>
              <p className="text-sm text-muted-foreground">
                Sustainable packaging and responsible sourcing for a better planet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Explore Our Categories
              </h2>
              <p className="text-muted-foreground">
                Discover wellness solutions crafted for your every need
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 gap-2">
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
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/products">
                <Leaf className="h-5 w-5" />
                Explore All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Embrace Rituals Rooted in Nature
            </h2>
            <p className="text-lg opacity-90">
              Choose a Life of Clarity, Balance, & Purpose.<br />
              Live Consciously. Live Authentically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                  <Leaf className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
