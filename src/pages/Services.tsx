import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Building2, Gift, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'subscription',
    title: 'Monthly Rituals',
    description: 'Curated wellness boxes delivered to your doorstep every month. Experience a journey of natural wellness with our handpicked selection of products.',
    icon: Calendar,
    href: '/subscription',
    color: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
  },
  {
    id: 'corporate',
    title: 'Corporate Wellness',
    description: 'Transform your workplace with holistic wellness programs. Custom solutions for employee health, team building, and corporate gifting.',
    icon: Building2,
    href: '/corporate-wellness',
    color: 'from-blue-500 to-indigo-500',
    bg: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'gifting',
    title: 'Gifting',
    description: 'Thoughtful, natural gift boxes for every occasion. From corporate gifts to personal celebrations, share the gift of wellness.',
    icon: Gift,
    href: '/gifting',
    color: 'from-rose-500 to-pink-500',
    bg: 'from-rose-50 to-pink-50',
  },
  {
    id: 'global',
    title: 'Global Presence',
    description: 'Bringing natural wellness to the world. Discover our international reach and how we serve customers across continents.',
    icon: Globe,
    href: '/global-presence',
    color: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From personalized wellness subscriptions to corporate programs, we offer comprehensive solutions 
              to bring natural wellness into every aspect of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.href} className="block h-full">
                  <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${service.bg} border border-border/50 hover:shadow-lg transition-all duration-300 group`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              We offer tailored wellness programs for businesses of all sizes. 
              Get in touch to discuss your specific needs.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a 
                href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20discuss%20a%20custom%20wellness%20solution"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
