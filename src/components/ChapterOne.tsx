import { motion } from 'motion/react';
import { BookOpen, Target, FileText } from 'lucide-react';

export function ChapterOne() {
  return (
    <section id="bab1" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">📋</span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              BAB I - PENDAHULUAN
            </h2>
          </div>

          {/* Latar Belakang */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <h3 className="text-2xl text-white">Latar Belakang Masalah</h3>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Perkembangan teknologi informasi telah membawa dampak positif sekaligus risiko baru dalam kehidupan modern. Salah satu ancaman serius yang muncul adalah kejahatan komputer, khususnya cyber sabotage, yakni tindakan perusakan, penghambatan, atau penghancuran sistem digital dengan motif dan tujuan tertentu. Kasus nyata yang dapat diangkat menunjukkan bahwa insiden sabotase terhadap sistem manufaktur, infrastruktur vital, dan organisasi kritis semakin sering terjadi dan menimbulkan kerugian yang sangat besar.
              </p>
              <p>
                Menurut penelitian dari Hafidz & Pratama (2023), serangan cyber sabotage mengalami peningkatan kompleksitas seiring dengan adopsi otomatisasi dan digitalisasi di berbagai sektor industri. Dalam studi dari Silalahi & Fitriani (2021), ditemukan bahwa organisasi Indonesia masih sangat rentan terhadap ancaman cyber sabotage karena kurangnya pemahaman mendalam tentang motif, teknik, dan metode penanggulangan yang tepat. Pentingnya memahami aspek-aspek cyber sabotage menjadi kunci menjaga keamanan sistem informasi suatu organisasi.
              </p>
            </div>
          </motion.div>

          {/* Rumusan Masalah */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl text-white">Rumusan Masalah</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Berdasarkan latar belakang di atas, rumusan masalah dalam paper ini adalah:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li>Apa yang dimaksud dengan cyber sabotage dan bagaimana manifestasinya dalam kasus nyata?</li>
              <li>Apa saja motif dan penyebab terjadinya cyber sabotage?</li>
              <li>Bagaimana upaya penanggulangan cyber sabotage yang efektif dan sesuai dengan cyberlaw?</li>
            </ol>
          </motion.div>

          {/* Tujuan Penelitian */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl text-white">Tujuan Penelitian</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Tujuan dari paper ilmiah ini adalah:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li>Memberikan pemahaman mendalam tentang cyber sabotage sebagai bentuk kejahatan komputer;</li>
              <li>Mengidentifikasi motif dan penyebab terjadinya cyber sabotage melalui studi kasus;</li>
              <li>Menawarkan solusi dan penanggulangan cyber sabotage berbasis teori cybercrime dan cyberlaw.</li>
            </ol>
          </motion.div>

          {/* Referensi */}
          <motion.div
            className="p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg text-white mb-3">Referensi Bab I:</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Hafidz, S., & Pratama, R. (2023). Cyber Sabotage: Case Study on Industrial System Attacks. Jurnal Keamanan Siber Indonesia, 12(4), 234-256.</li>
              <li>Silalahi, D. J., & Fitriani, D. (2021). Analysis on Prevention of Cyber Sabotage in Critical Infrastructure. Thesis, Universitas Indonesia.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
