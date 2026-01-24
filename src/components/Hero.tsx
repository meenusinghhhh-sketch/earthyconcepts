import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.jpeg';
import heroWellness from '@/assets/lifestyle/hero-wellness.jpg';
import skincareRitual from '@/assets/lifestyle/skincare-ritual.jpg';
import herbalTea from '@/assets/lifestyle/herbal-tea-moment.jpg';
import spaBotanicals from '@/assets/lifestyle/spa-botanicals.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWellness} 
          alt="Wellness lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>
      
      {/* Animated decorative orbs */}
      <motion.div 
        className="absolute top-20 left-[5%] w-64 h-64 bg-gradient-to-br from-primary/30 to-emerald-400/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-[30%] w-48 h-48 bg-gradient-to-tl from-amber-300/30 to-orange-300/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Handcrafted with Nature's Finest
            </motion.div>

            {/* Logo - Prominent Display */}
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/30 to-emerald-400/40 rounded-[2rem] blur-3xl scale-150" />
              <div className="absolute inset-0 bg-white/60 rounded-3xl blur-xl scale-110" />
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="relative h-44 md:h-56 lg:h-64 w-auto object-contain drop-shadow-2xl"
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
              <Button asChild size="lg" variant="outline" className="gap-2 border-2 bg-white/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-white/70">
                <Link to="/learn">
                  Find Your Concept
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

          </motion.div>

          {/* Right side - Lifestyle image showcase */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Lifestyle images grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Large image */}
                <motion.div
                  className="col-span-2 rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[16/9] relative">
                    <img 
                      src={spaBotanicals} 
                      alt="Spa botanicals" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.div>

                {/* Smaller images */}
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="aspect-square relative">
                    <img 
                      src={herbalTea} 
                      alt="Herbal tea moment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="aspect-square relative">
                    <img 
                      src={skincareRitual} 
                      alt="Skincare ritual" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-primary/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg">
                    <Leaf className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-foreground">100% Natural</p>
                    <p className="text-sm text-muted-foreground">Pure Ingredients</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating certification badge */}
              <motion.div 
                className="absolute -top-2 right-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl shadow-2xl px-5 py-3"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm font-semibold">GMP & ISO Certified</p>
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
