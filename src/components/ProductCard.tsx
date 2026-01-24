import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Earthy Concepts, I would like to order ${product.name}`
  );
  const whatsappUrl = `https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`;

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
      </Link>
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <Badge variant="secondary" className="text-xs font-normal">
            {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </Badge>
          <Link to={`/products/${product.id}`}>
            <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.tagline}
          </p>
        </div>
        
        <Button 
          asChild 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          size="sm"
        >
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
