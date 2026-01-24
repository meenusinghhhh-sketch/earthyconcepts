import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Leaf, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-background/70 leading-relaxed">
              Natural & Conscious Wellness. Rooted in tradition, crafted for modern living.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-background/70 hover:text-background transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/products?category=formulations" className="text-sm text-background/70 hover:text-background transition-colors">
                Formulations
              </Link>
              <Link to="/products?category=single-herbs" className="text-sm text-background/70 hover:text-background transition-colors">
                Single Herb Capsules
              </Link>
              <Link to="/products?category=herbal-teas" className="text-sm text-background/70 hover:text-background transition-colors">
                Herbal Teas
              </Link>
              <Link to="/products?category=body-oils" className="text-sm text-background/70 hover:text-background transition-colors">
                Body Oils
              </Link>
              <Link to="/products?category=hair-oils" className="text-sm text-background/70 hover:text-background transition-colors">
                Hair Oils
              </Link>
              <Link to="/products?category=ubtans" className="text-sm text-background/70 hover:text-background transition-colors">
                Ubtans
              </Link>
              <Link to="/products?category=face-mists" className="text-sm text-background/70 hover:text-background transition-colors">
                Face Mists
              </Link>
              <Link to="/products?category=body-cleanse" className="text-sm text-background/70 hover:text-background transition-colors">
                Body Cleanse
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:connect@earthyconcepts.com" 
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                connect@earthyconcepts.com
              </a>
              <a 
                href="tel:+971XXXXXXXXX" 
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                +971 XX XXX XXXX
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Earthy Concepts. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              GMP, ISO, HACCP-Certified • FDA-Compliant Manufacturing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
