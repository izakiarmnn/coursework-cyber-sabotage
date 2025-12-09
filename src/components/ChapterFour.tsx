import { motion } from 'motion/react';
import { CheckCircle, Lightbulb, Building, Globe, GraduationCap } from 'lucide-react';

export function ChapterFour() {
  return (
    <section id="bab4" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">✅</span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              BAB IV - PENUTUP
            </h2>
          </div>

          {/* Kesimpulan */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl text-white">Kesimpulan</h3>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Cyber sabotage adalah ancaman nyata dan serius bagi sistem dan data di era digital modern. Melalui analisis teori cybercrime, cyberlaw, dan studi kasus yang telah dijabarkan dalam paper ini, dapat disimpulkan bahwa:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  Cyber sabotage merupakan bentuk kejahatan komputer yang kompleks dengan motif yang beragam, mulai dari dendam pribadi, persaingan bisnis, hingga tujuan ideologis dan terorisme siber.
                </li>
                <li>
                  Penyebab utama keberhasilan cyber sabotage adalah kelemahan dalam manajemen akses, kurangnya monitoring, edukasi keamanan yang minim, dan tidak adanya rencana disaster recovery yang memadai.
                </li>
                <li>
                  Penanggulangan cyber sabotage memerlukan pendekatan holistik yang mencakup pencegahan proaktif, deteksi dini, respons cepat, dan penegakan hukum berbasis cyberlaw yang kuat.
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Saran dan Rekomendasi */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl text-white">Saran dan Rekomendasi</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Berdasarkan analisis dalam paper ini, beberapa saran dan rekomendasi yang dapat diberikan adalah:
            </p>

            {/* Bagi Organisasi */}
            <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-5 h-5 text-blue-400" />
                <h4 className="text-xl text-white">Bagi Organisasi/Perusahaan:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">►</span>
                  <span>Menerapkan framework keamanan siber yang komprehensif dan terstruktur (seperti NIST Cybersecurity Framework).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">►</span>
                  <span>Melakukan audit keamanan dan penetration testing secara berkala untuk mengidentifikasi kerentanan sistem.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">►</span>
                  <span>Membangun incident response team yang terlatih dan siap merespons serangan dengan cepat.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">►</span>
                  <span>Meningkatkan awareness dan edukasi keamanan siber di semua level organisasi.</span>
                </li>
              </ul>
            </div>

            {/* Bagi Pemerintah */}
            <div className="mb-6 p-6 bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <h4 className="text-xl text-white">Bagi Pemerintah dan Regulator:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">►</span>
                  <span>Memperkuat UU ITE dan regulasi cyberlaw lainnya untuk mencakup skenario serangan yang lebih kompleks.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">►</span>
                  <span>Meningkatkan kapasitas aparat penyidik dalam hal digital forensic dan investigasi cyber crime.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">►</span>
                  <span>Membangun pusat cybersecurity nasional yang dapat memberikan guidance dan support kepada organisasi.</span>
                </li>
              </ul>
            </div>

            {/* Bagi Akademisi */}
            <div className="mb-6 p-6 bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-pink-400" />
                <h4 className="text-xl text-white">Bagi Akademisi dan Peneliti:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">►</span>
                  <span>Melanjutkan penelitian tentang tren cyber sabotage terbaru dan teknik penanggulangan yang inovatif.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">►</span>
                  <span>Mengembangkan kurikulum pendidikan cybersecurity yang relevan dengan kebutuhan industri.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Penutup */}
          <motion.div
            className="mb-12 p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl text-white mb-4">Penutup</h3>
            <p className="text-gray-300">
              Cyber sabotage merupakan tantangan serius yang membutuhkan perhatian dan tindakan nyata dari semua pihak. Setiap organisasi, baik di sektor publik maupun swasta, wajib meningkatkan literasi keamanan dan berkomitmen untuk memperkuat pertahanan sistem informasi mereka. Melalui kolaborasi yang kuat antara organisasi, pemerintah, akademisi, dan masyarakat luas, diharapkan dapat terbangun ekosistem digital yang lebih aman dan resilient terhadap ancaman cyber sabotage di masa depan.
            </p>
          </motion.div>

          {/* Referensi */}
          <motion.div
            className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg text-white mb-3">Referensi Bab IV:</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Hafidz, S., & Pratama, R. (2023). Cyber Sabotage: Case Study on Industrial System Attacks. Jurnal Keamanan Siber Indonesia, 12(4), 234-256.</li>
              <li>Silalahi, D. J., & Fitriani, D. (2021). Analysis on Prevention of Cyber Sabotage in Critical Infrastructure. Thesis, Universitas Indonesia.</li>
              <li>Putra, A., & Sari, I. (2022). Cara Efektif Penegakan Cyberlaw di Era Digital. Jurnal Cyberlaw Indonesia, 5(1), 45-78.</li>
              <li>Pranoto, E., & Wicaksana, D. (2024). Digital Forensic in Cyber Sabotage Prevention. Jurnal AI Keamanan, 9(3), 189-210.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
