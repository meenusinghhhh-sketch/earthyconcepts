import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products, getProductsByCategory } from '@/data/products';
import logo from '@/assets/logo.jpeg';

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
      {/* Header with Logo */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-6 mb-6">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-28 md:h-36 w-auto object-contain"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {selectedCategoryData ? selectedCategoryData.name : 'All Products'}
              </h1>
              <p className="text-muted-foreground mt-1">
                {selectedCategoryData 
                  ? selectedCategoryData.description 
                  : 'Discover our complete collection of natural wellness products'}
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
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
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
            </div>

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
