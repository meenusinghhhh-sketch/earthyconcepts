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
      {/* Nature Backdrop - Full Page - Enhanced */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base nature gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-background to-amber-100/30" />
        
        {/* Large botanical leaves - top left */}
        <svg className="absolute -top-10 -left-10 w-[500px] h-[500px] text-primary/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 Q150,60 100,120 Q50,60 100,10 Z" />
          <path d="M40,50 Q90,100 40,160 Q-10,100 40,50 Z" transform="rotate(-25 40 105)" />
          <path d="M160,50 Q210,100 160,160 Q110,100 160,50 Z" transform="rotate(25 160 105)" />
        </svg>
        
        {/* Large botanical leaves - top right */}
        <svg className="absolute -top-5 -right-5 w-[450px] h-[450px] text-emerald-600/10 rotate-[30deg]" viewBox="0 0 200 200" fill="currentColor">
          <ellipse cx="100" cy="50" rx="30" ry="60" />
          <ellipse cx="50" cy="100" rx="25" ry="55" transform="rotate(-45 50 100)" />
          <ellipse cx="150" cy="100" rx="25" ry="55" transform="rotate(45 150 100)" />
        </svg>
        
        {/* Organic glowing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-gradient-to-br from-emerald-300/25 to-teal-200/15 rounded-full blur-3xl" />
        <div className="absolute top-[25%] right-[5%] w-96 h-96 bg-gradient-to-bl from-amber-300/20 to-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[10%] w-72 h-72 bg-gradient-to-tr from-green-200/20 to-emerald-100/10 rounded-full blur-3xl" />
        
        {/* Botanical branch - left side */}
        <svg className="absolute top-[40%] -left-10 w-80 h-80 text-primary/8" viewBox="0 0 200 200" fill="currentColor">
          <path d="M20,100 C50,50 80,80 100,100 C80,120 50,150 20,100 Z" />
          <path d="M30,70 C50,40 70,50 80,70 C70,90 50,100 30,70 Z" />
          <path d="M30,130 C50,160 70,150 80,130 C70,110 50,100 30,130 Z" />
          <circle cx="15" cy="100" r="8" />
        </svg>
        
        {/* Botanical branch - right side */}
        <svg className="absolute top-[60%] -right-10 w-96 h-96 text-emerald-500/8" viewBox="0 0 200 200" fill="currentColor">
          <path d="M180,100 C150,50 120,80 100,100 C120,120 150,150 180,100 Z" />
          <path d="M170,60 C150,30 130,40 120,60 C130,80 150,90 170,60 Z" />
          <path d="M170,140 C150,170 130,160 120,140 C130,120 150,110 170,140 Z" />
          <circle cx="185" cy="100" r="10" />
        </svg>
        
        {/* Scattered leaves pattern across page */}
        <svg className="absolute top-[20%] left-[30%] w-32 h-32 text-primary/6 rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 Q70,40 50,70 Q30,40 50,10 Z" />
        </svg>
        <svg className="absolute top-[35%] right-[25%] w-24 h-24 text-emerald-500/5 -rotate-30" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 Q70,40 50,70 Q30,40 50,10 Z" />
        </svg>
        <svg className="absolute top-[55%] left-[45%] w-28 h-28 text-teal-500/5 rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 Q70,40 50,70 Q30,40 50,10 Z" />
        </svg>
        <svg className="absolute top-[70%] left-[20%] w-36 h-36 text-primary/5 -rotate-20" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 Q70,40 50,70 Q30,40 50,10 Z" />
        </svg>
        <svg className="absolute top-[80%] right-[15%] w-32 h-32 text-emerald-600/6 rotate-60" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 Q70,40 50,70 Q30,40 50,10 Z" />
        </svg>
        
        {/* Bottom organic shapes */}
        <div className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-[20%] w-96 h-96 bg-gradient-to-tl from-primary/15 to-emerald-200/10 rounded-full blur-3xl" />
        
        {/* Large botanical leaves - bottom */}
        <svg className="absolute -bottom-16 left-[20%] w-[600px] h-[400px] text-primary/8 rotate-180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,20 Q160,80 100,150 Q40,80 100,20 Z" />
          <path d="M60,40 Q100,100 60,170 Q20,100 60,40 Z" transform="rotate(-15 60 105)" />
          <path d="M140,40 Q180,100 140,170 Q100,100 140,40 Z" transform="rotate(15 140 105)" />
        </svg>
        
        {/* Bottom right botanical */}
        <svg className="absolute -bottom-10 -right-10 w-[400px] h-[400px] text-emerald-500/7" viewBox="0 0 200 200" fill="currentColor">
          <ellipse cx="150" cy="150" rx="40" ry="80" transform="rotate(45 150 150)" />
          <ellipse cx="120" cy="180" rx="30" ry="60" transform="rotate(30 120 180)" />
        </svg>
        
        {/* Subtle nature watermark pattern - repeating across entire page */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2316a34a'%3E%3Cpath d='M60 5 Q75 30 60 55 Q45 30 60 5 Z'/%3E%3Cpath d='M25 40 Q35 55 25 75 Q15 55 25 40 Z' opacity='0.7'/%3E%3Cpath d='M95 40 Q105 55 95 75 Q85 55 95 40 Z' opacity='0.7'/%3E%3Cpath d='M60 70 Q70 85 60 105 Q50 85 60 70 Z' opacity='0.6'/%3E%3Ccircle cx='40' cy='95' r='3' opacity='0.5'/%3E%3Ccircle cx='80' cy='95' r='3' opacity='0.5'/%3E%3Ccircle cx='60' cy='30' r='2' opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />
        
        {/* Secondary botanical watermark layer - larger leaves */}
        <div className="absolute inset-0 opacity-[0.06]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e'%3E%3Cpath d='M100 10 Q130 50 100 100 Q70 50 100 10 Z'/%3E%3Cpath d='M50 60 Q70 90 50 130 Q30 90 50 60 Z' transform='rotate(-20 50 95)'/%3E%3Cpath d='M150 60 Q170 90 150 130 Q130 90 150 60 Z' transform='rotate(20 150 95)'/%3E%3Cpath d='M30 150 Q45 170 30 195 Q15 170 30 150 Z' opacity='0.6'/%3E%3Cpath d='M170 150 Q185 170 170 195 Q155 170 170 150 Z' opacity='0.6'/%3E%3Cellipse cx='100' cy='160' rx='15' ry='30' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        {/* Fine leaf vein texture */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2315803d'%3E%3Cpath d='M40 8 Q52 25 40 45 Q28 25 40 8 Z'/%3E%3Cpath d='M20 45 Q28 55 20 68 Q12 55 20 45 Z' opacity='0.7'/%3E%3Cpath d='M60 45 Q68 55 60 68 Q52 55 60 45 Z' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
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
