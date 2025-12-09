import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export function Header({ scrollToSection }: HeaderProps) {
  return (
    <section id="header" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 5, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <span className="text-6xl md:text-8xl">🔒</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            CYBER SABOTAGE
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Paper Ilmiah tentang Kejahatan Komputer dan Penanggulangan Cyber Sabotage
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { emoji: '📋', text: 'BAB I - Pendahuluan' },
              { emoji: '📚', text: 'BAB II - Teori' },
              { emoji: '🔍', text: 'BAB III - Analisa' },
              { emoji: '✅', text: 'BAB IV - Penutup' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{item.emoji}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('bab1')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Mulai Membaca
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
