import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.jpeg';

// Sample product images for the hero showcase
const heroProducts = [
  '/products/formulations/GoldenCurcumin.png',
  '/products/body-oils/SaffronRituals-30ml.png',
  '/products/herbal-teas/SereneTea-100gm.png',
  '/products/ubtans/IllumaMask-100gm.png',
];

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50/60 to-rose-50/40" />
      
      {/* Animated decorative orbs */}
      <motion.div 
        className="absolute top-20 left-[5%] w-80 h-80 bg-gradient-to-br from-emerald-300/30 to-teal-400/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-[5%] w-96 h-96 bg-gradient-to-tl from-amber-300/30 to-orange-300/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-[20%] w-64 h-64 bg-gradient-to-br from-rose-300/25 to-pink-300/15 rounded-full blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Subtle leaf pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23228B22' fill-opacity='1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20S0 28.954 0 40s8.954 20 20 20c2.5 0 4.9-.46 7.1-1.3C18.3 54.9 12 46.2 12 36c0-15.464 12.536-28 28-28v32z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-emerald-500/10 border border-primary/20 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Handcrafted with Nature's Finest
            </motion.div>

            {/* Logo */}
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/15 to-emerald-400/20 rounded-2xl blur-xl scale-110" />
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="relative h-24 md:h-28 w-auto object-contain"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-foreground">Natural</span>
              {' '}
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">&</span>
              {' '}
              <span className="text-foreground">Conscious</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">Wellness</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Rooted in time-honored Ayurvedic traditions and reimagined for modern living. 
              Premium herbal formulations for <span className="text-primary font-medium">health</span>, 
              <span className="text-accent font-medium"> skincare</span>, and 
              <span className="text-primary font-medium"> holistic wellness</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25 px-8">
                <Link to="/products">
                  <Leaf className="h-5 w-5" />
                  Explore Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                <Link to="/learn">
                  Find Your Concept
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Trusted by thousands across UAE & beyond</span>
            </motion.div>
          </motion.div>

          {/* Right side - Product showcase */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main product grid */}
            <div className="relative">
              {/* Background decorative card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
              
              {/* Product grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {heroProducts.map((img, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-2xl overflow-hidden shadow-xl ${
                      index === 0 ? 'col-span-1 row-span-1' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className={`${index === 1 ? 'aspect-[3/4]' : 'aspect-square'} bg-gradient-to-br from-amber-50 to-emerald-50`}>
                      <img 
                        src={img} 
                        alt="Product" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-primary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">100% Natural</p>
                    <p className="text-xs text-muted-foreground">Pure Ingredients</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating certification badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl shadow-xl px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              >
                <p className="text-xs font-medium">GMP & ISO Certified</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
