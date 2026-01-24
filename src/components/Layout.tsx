import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnnouncementBanner } from './AnnouncementBanner';
import { NewsletterBanner } from './NewsletterBanner';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Nature Backdrop - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5" />
        
        {/* Subtle organic glowing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-gradient-to-br from-primary/10 to-emerald-200/5 rounded-full blur-3xl" />
        <div className="absolute top-[25%] right-[5%] w-96 h-96 bg-gradient-to-bl from-accent/10 to-amber-200/5 rounded-full blur-3xl" />
        <div className="absolute top-[60%] left-[10%] w-72 h-72 bg-gradient-to-tr from-emerald-200/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-gradient-to-tl from-primary/8 to-transparent rounded-full blur-3xl" />
        
        {/* Very subtle leaf pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2316a34a'%3E%3Cpath d='M60 5 Q75 30 60 55 Q45 30 60 5 Z'/%3E%3Cpath d='M25 40 Q35 55 25 75 Q15 55 25 40 Z' opacity='0.7'/%3E%3Cpath d='M95 40 Q105 55 95 75 Q85 55 95 40 Z' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
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
        <NewsletterBanner />
        <Footer />
      </div>
    </div>
  );
};
