import { motion } from 'motion/react';
import { FileText, Calendar, User } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Paper Ilmiah: Cyber Sabotage
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Penulis: izaki, fajar</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Tahun: 2025</span>
            </div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mb-6">
            <p className="text-sm text-gray-400">
              Referensi dari jurnal, skripsi, dan thesis tahun 2020-2025
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>&copy; 2025 Cyber Sabotage Research Paper. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
