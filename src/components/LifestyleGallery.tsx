import { motion } from 'framer-motion';
import botanicalsHands from '@/assets/lifestyle/botanicals-hands.jpg';
import skincareRitual from '@/assets/lifestyle/skincare-ritual.jpg';
import herbalTea from '@/assets/lifestyle/herbal-tea-moment.jpg';
import naturalBeauty from '@/assets/lifestyle/natural-beauty.jpg';
import spaBotanicals from '@/assets/lifestyle/spa-botanicals.jpg';

const galleryImages = [
  { src: botanicalsHands, alt: 'Natural botanicals', label: 'Pure Botanicals' },
  { src: skincareRitual, alt: 'Skincare ritual', label: 'Daily Rituals' },
  { src: herbalTea, alt: 'Herbal tea moment', label: 'Herbal Wellness' },
  { src: naturalBeauty, alt: 'Natural beauty', label: 'Natural Beauty' },
  { src: spaBotanicals, alt: 'Spa experience', label: 'Holistic Care' },
];

export const LifestyleGallery = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#c9b99a' }}>
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#a68f5d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#8b7355]/15 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2d3a2e]">
            Embrace the <span className="text-[#3d4f3e]">Earthy Lifestyle</span>
          </h2>
          <p className="text-[#4a5a4b] text-lg">
            Experience wellness through nature's finest offerings
          </p>
        </motion.div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.label}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'} relative`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{image.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
