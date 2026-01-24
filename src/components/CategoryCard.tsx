import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image?: string;
}

export const CategoryCard = ({ id, name, description, productCount, image }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${id}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
        <div className="aspect-[4/3] overflow-hidden bg-muted relative">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-4xl font-display text-primary/30">{name.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-background">
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="text-sm text-background/80">{productCount} Products</p>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
            <span>Explore</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
