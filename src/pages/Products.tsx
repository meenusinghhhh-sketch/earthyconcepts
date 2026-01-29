import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Leaf, Heart, Sun, Moon, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products, getProductsByCategory } from '@/data/products';

// Benefits strip data (moved from homepage)
const benefits = [
  { icon: Leaf, text: 'Immunity Boost', color: 'bg-emerald-500' },
  { icon: Heart, text: 'Heart Health', color: 'bg-rose-500' },
  { icon: Sun, text: 'Natural Energy', color: 'bg-amber-500' },
  { icon: Moon, text: 'Better Sleep', color: 'bg-violet-500' },
  { icon: Zap, text: 'Mental Clarity', color: 'bg-cyan-500' },
  { icon: Shield, text: 'Stress Relief', color: 'bg-teal-500' },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const selectedCategory = searchParams.get('category') || '';

  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.benefits.some(b => b.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === selectedCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <Layout>
      {/* Benefits Strip (moved from homepage per request #7) */}
      <section className="py-8 bg-gradient-to-r from-muted/50 via-background to-muted/50 overflow-hidden border-b border-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-md border border-border/50 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className={`w-8 h-8 rounded-full ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Header - Centered per request #17 */}
      <section className="py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              {selectedCategoryData ? selectedCategoryData.name : 'All Products'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {selectedCategoryData 
                ? selectedCategoryData.description 
                : 'Discover our complete collection of natural wellness products'}
            </p>
          </div>

          {/* Search - Centered */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </h2>
                {(selectedCategory || searchQuery) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="h-auto py-1 px-2 text-xs"
                  >
                    Clear all
                    <X className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
              
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    className="cursor-pointer py-2 px-3"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span>{category.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">

            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Products;