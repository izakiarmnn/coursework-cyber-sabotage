import { motion } from 'motion/react';
import { Book, Shield, Brain, Scale } from 'lucide-react';

export function ChapterTwo() {
  return (
    <section id="bab2" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">📚</span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              BAB II - LANDASAN TEORI
            </h2>
          </div>

          {/* Pengertian Cybercrime */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl text-white">2.1 Pengertian Cybercrime</h3>
            </div>
            <p className="text-gray-300">
              Cybercrime adalah bentuk kejahatan yang menggunakan sistem komputer, jaringan komputer, atau internet sebagai alat dan medan aksinya. Menurut definisi dari Yar (2020), cybercrime mencakup semua aktivitas ilegal yang dilakukan dengan memanfaatkan teknologi digital, mulai dari pencurian data, fraud, hingga sabotage sistem.
            </p>
          </motion.div>

          {/* Definisi Cyber Sabotage */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl text-white">2.2 Definisi Cyber Sabotage</h3>
            </div>
            <p className="text-gray-300">
              Cyber Sabotage adalah tindakan sengaja untuk merusak, menghancurkan, atau mengganggu fungsi sistem komputer, jaringan, atau data dengan tujuan menyebabkan kerugian material atau immaterial kepada korban. Cyber sabotage berbeda dengan bentuk cybercrime lainnya karena fokus utamanya adalah pada penghancuran dan gangguan layanan, bukan pada pencurian atau pengambilan keuntungan finansial secara langsung.
            </p>
          </motion.div>

          {/* Teori Motivasi Cybercrime */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-indigo-400" />
              <h3 className="text-2xl text-white">2.3 Teori Motivasi Cybercrime</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Menurut Putra & Sari (2022), motivasi pelaku cyber sabotage dapat dikategorikan menjadi beberapa tipe:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-transparent border-l-4 border-indigo-500 rounded">
                <h4 className="text-white mb-2">Motivasi Ideologi</h4>
                <p className="text-gray-400 text-sm">
                  Pelaku bermotif untuk menyampaikan pesan atau ideologi tertentu kepada publik melalui serangan cyber.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500 rounded">
                <h4 className="text-white mb-2">Motivasi Finansial</h4>
                <p className="text-gray-400 text-sm">
                  Meskipun cyber sabotage bukan pencurian langsung, pelaku dapat bermotif untuk merusak kompetitor atau memaksa korban untuk membayar uang tebusan.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-500 rounded">
                <h4 className="text-white mb-2">Motivasi Dendam Pribadi</h4>
                <p className="text-gray-400 text-sm">
                  Mantan karyawan atau pihak yang merasa dirugikan melakukan sabotage sebagai bentuk balas dendam.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-red-500 rounded">
                <h4 className="text-white mb-2">Motivasi Teroris/Politikus</h4>
                <p className="text-gray-400 text-sm">
                  Kelompok ekstremis atau teroris siber melakukan sabotage untuk mencapai tujuan politis atau ideologis berskala besar.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cyberlaw dan Regulasi */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl text-white">2.4 Cyberlaw dan Regulasi</h3>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Cyberlaw adalah cabang hukum yang mengatur aktivitas di dunia digital dan cyber. Di Indonesia, cyberlaw diterapkan melalui Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE) beserta amandemennya. Dalam UU ITE, cyber sabotage dapat dikualifikasikan sebagai:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Perusakan data elektronik (Pasal 33);</li>
                <li>Pemindahan, pengubahan, atau penghapusan sistem elektronik (Pasal 34);</li>
                <li>Perbuatan melawan hukum lainnya terhadap sistem elektronik (Pasal 48).</li>
              </ul>
              <p>
                Menurut Pranoto & Wicaksana (2024), penegakan cyberlaw memerlukan kerja sama antar lembaga pemerintah, instansi keamanan, dan penyedia layanan digital untuk memastikan adanya deteksi dini, investigasi, dan penuntutan yang efektif.
              </p>
            </div>
          </motion.div>

          {/* Referensi */}
          <motion.div
            className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg text-white mb-3">Referensi Bab II:</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Yar, M. (2020). Theoretical Perspectives on Cybercrime. Journal of Cyber Risk, 8(2), 112-135.</li>
              <li>Putra, A., & Sari, I. (2022). Cara Efektif Penegakan Cyberlaw di Era Digital. Jurnal Cyberlaw Indonesia, 5(1), 45-78.</li>
              <li>Pranoto, E., & Wicaksana, D. (2024). Digital Forensic in Cyber Sabotage Prevention. Jurnal AI Keamanan, 9(3), 189-210.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
