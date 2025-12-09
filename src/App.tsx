import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ChapterOne } from './components/ChapterOne';
import { ChapterTwo } from './components/ChapterTwo';
import { ChapterThree } from './components/ChapterThree';
import { ChapterFour } from './components/ChapterFour';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('header');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ['header', 'bab1', 'bab2', 'bab3', 'bab4'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040406] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'linear-gradient(45deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
              'linear-gradient(90deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)',
              'linear-gradient(135deg, #312e81 0%, #0f172a 50%, #1e1b4b 100%)',
              'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
              'linear-gradient(45deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #6366f1 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Header scrollToSection={scrollToSection} />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
