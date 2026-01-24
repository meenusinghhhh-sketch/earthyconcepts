import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Award, Globe, Users, Package, Home, Baby, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products, getProductsByCategory } from '@/data/products';
import logo from '@/assets/logo.jpeg';
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';
import skincareRitual from '@/assets/lifestyle/skincare-ritual.jpg';
import herbalTea from '@/assets/lifestyle/herbal-tea-moment.jpg';
import naturalBeauty from '@/assets/lifestyle/natural-beauty.jpg';

const coreCategories = [
  {
    icon: Leaf,
    title: 'Retail-Ready Lines',
    description: 'Clean-Label Health Capsules & Teas for Immunity, Digestion, Detox, Heart Health, and Everyday Wellness',
    color: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    icon: Sparkles,
    title: 'Pure Skincare',
    description: 'Face Masks, Glow Powders, Herbal Soaps, Facial Serums, Hair & Body Oils for Everyday Skincare',
    color: 'from-amber-500 to-orange-500',
    bg: 'from-amber-500/10 to-orange-500/5',
  },
  {
    icon: Package,
    title: 'Gifting Editions',
    description: 'Healthcare On-The-Go, Chakra Packs, Health Kits & Organic Home Care',
    color: 'from-rose-500 to-pink-500',
    bg: 'from-rose-500/10 to-pink-500/5',
  },
  {
    icon: Heart,
    title: 'Herbal Products',
    description: 'Formulated for Mind & Body Rituals - Traditional Health and Wellness',
    color: 'from-violet-500 to-purple-500',
    bg: 'from-violet-500/10 to-purple-500/5',
  },
  {
    icon: Home,
    title: 'Spa & Hospitality',
    description: 'Natural & Organic Products for Hotels, Spas, Retreats & Wellness Centers',
    color: 'from-cyan-500 to-blue-500',
    bg: 'from-cyan-500/10 to-blue-500/5',
  },
  {
    icon: Baby,
    title: 'Family Wellness',
    description: 'Gentle Products for Kids & Parents, Clean skincare for the whole family',
    color: 'from-lime-500 to-green-500',
    bg: 'from-lime-500/10 to-green-500/5',
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

const highlights = [
  "100% Natural Ingredients",
  "No Synthetic Additives",
  "Ayurvedic Formulations",
  "Sustainable Sourcing",
];

const Index = () => {
  // Get featured products (first 4 from different categories)
  const featuredProducts = [
    products.find(p => p.category === 'formulations'),
    products.find(p => p.category === 'herbal-teas'),
    products.find(p => p.category === 'body-oils'),
    products.find(p => p.category === 'ubtans'),
  ].filter(Boolean).slice(0, 4);

  return (
    <Layout>
      <Hero />

      {/* Trust Badges - Certification Strip */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-y border-primary/10">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div 
                key={badge.name} 
                className="flex items-center gap-2 text-muted-foreground group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-emerald-500/10 group-hover:from-primary/20 group-hover:to-emerald-500/20 transition-colors">
                  <badge.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Core Categories Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-500/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive range of natural wellness solutions for every aspect of life
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`group border-0 bg-gradient-to-br ${category.bg} hover:shadow-xl transition-all duration-500 h-full overflow-hidden relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                  <CardContent className="p-6 relative">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="gap-2 border-2 px-8">
              <Link to="/global-presence">
                <Globe className="h-4 w-4" />
                Explore Global Presence
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-r from-emerald-50/80 via-white to-amber-50/80 relative">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Who We <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Serve</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'For Individuals', desc: 'Pure daily wellness, holistic skin & body health, nature-inspired essentials', color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50' },
              { icon: Package, title: 'For Businesses', desc: 'Retail, Spa, Clinic partnerships with customised formulations', color: 'from-amber-500 to-orange-500', bg: 'from-amber-50 to-orange-50' },
              { icon: Heart, title: 'For Institutions', desc: 'Wellness campaigns, gifting programs, hospital & clinic kits', color: 'from-rose-500 to-pink-500', bg: 'from-rose-50 to-pink-50' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.bg} border border-white/50 shadow-lg text-center group`}
              >
                <div className="absolute inset-0 rounded-3xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <motion.div 
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Package className="h-4 w-4" />
                Shop by Category
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                Explore Our <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">Collections</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover wellness solutions crafted for your every need
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="outline" className="mt-6 md:mt-0 gap-2 border-2 px-6">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category, index) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                productCount={getProductsByCategory(category.id).length}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-amber-50/50 via-white to-rose-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-600 text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Bestsellers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked wellness essentials from our collection
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => product && (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-xl shadow-primary/25 px-10">
              <Link to="/products">
                <Leaf className="h-5 w-5" />
                Explore All Products
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary via-emerald-600 to-teal-600 text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container px-4 md:px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Begin Your Wellness Journey
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Embrace Rituals
              <br />
              <span className="text-white/90">Rooted in Nature</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose a Life of Clarity, Balance, & Purpose.
              <br />
              <span className="font-semibold">Live Consciously. Live Authentically.</span>
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 gap-2 shadow-xl px-10"
              >
                <a 
                  href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Index;
