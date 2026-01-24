import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnnouncementBanner } from './AnnouncementBanner';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Nature Backdrop - Full Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-transparent to-amber-50/20" />
        
        {/* Botanical leaf patterns - top left */}
        <svg className="absolute -top-20 -left-20 w-96 h-96 text-primary/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 Q140,50 100,100 Q60,50 100,10 Z" />
          <path d="M50,60 Q90,100 50,150 Q10,100 50,60 Z" transform="rotate(-30 50 105)" />
          <path d="M150,60 Q190,100 150,150 Q110,100 150,60 Z" transform="rotate(30 150 105)" />
        </svg>
        
        {/* Botanical leaf patterns - top right */}
        <svg className="absolute -top-10 -right-10 w-80 h-80 text-emerald-600/5 rotate-45" viewBox="0 0 200 200" fill="currentColor">
          <ellipse cx="100" cy="60" rx="25" ry="50" />
          <ellipse cx="60" cy="100" rx="20" ry="45" transform="rotate(-40 60 100)" />
          <ellipse cx="140" cy="100" rx="20" ry="45" transform="rotate(40 140 100)" />
        </svg>
        
        {/* Organic flowing shapes - middle */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-3xl" />
        
        {/* Botanical pattern - middle left */}
        <svg className="absolute top-1/2 -left-16 w-64 h-64 text-primary/4 -translate-y-1/2" viewBox="0 0 200 200" fill="currentColor">
          <path d="M30,100 Q60,40 100,100 Q60,160 30,100 Z" />
          <path d="M50,100 Q80,50 120,100 Q80,150 50,100 Z" opacity="0.5" />
        </svg>
        
        {/* Botanical pattern - middle right */}
        <svg className="absolute top-2/3 -right-16 w-72 h-72 text-emerald-500/4" viewBox="0 0 200 200" fill="currentColor">
          <path d="M170,100 Q140,40 100,100 Q140,160 170,100 Z" />
          <circle cx="100" cy="100" r="30" opacity="0.3" />
        </svg>
        
        {/* Bottom organic shapes */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-teal-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
        
        {/* Botanical leaves - bottom */}
        <svg className="absolute -bottom-20 left-1/3 w-96 h-96 text-primary/5 rotate-180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,20 Q150,70 100,130 Q50,70 100,20 Z" />
          <path d="M70,50 Q100,100 70,160 Q40,100 70,50 Z" transform="rotate(-20 70 105)" />
          <path d="M130,50 Q160,100 130,160 Q100,100 130,50 Z" transform="rotate(20 130 105)" />
        </svg>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322543d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnnouncementBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
