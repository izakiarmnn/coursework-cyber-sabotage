import { motion } from 'motion/react';
import { Search, AlertTriangle, UserX, Lock, Eye, Zap, Shield, Scale } from 'lucide-react';

export function ChapterThree() {
  return (
    <section id="bab3" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🔍</span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              BAB III - PEMBAHASAN DAN ANALISA KASUS
            </h2>
          </div>

          {/* Studi Kasus */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl text-white">3.1 Studi Kasus: Serangan Sabotage pada Sistem Manufaktur Industri 4.0</h3>
            </div>
            <p className="text-gray-300">
              Salah satu kasus cyber sabotage yang relevan untuk dianalisis adalah serangan terhadap sistem manufaktur berautomasi di suatu perusahaan industri di Indonesia pada tahun 2023. Dalam kasus ini, seorang mantan karyawan IT melakukan infiltrasi ke sistem SCADA (Supervisory Control and Data Acquisition) dan berhasil mengubah parameter kontrol produksi, mengakibatkan kerusakan mesin senilai miliaran rupiah dan kehilangan ratusan jam produksi.
            </p>
          </motion.div>

          {/* Analisa Motif */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <UserX className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl text-white">3.2 Analisa Motif</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Berdasarkan investigasi digital forensic, motif pelaku adalah:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-red-500/10 border-l-4 border-red-500 rounded">
                <h4 className="text-white mb-1">Dendam Pribadi</h4>
                <p className="text-gray-400 text-sm">
                  Pelaku merasa diperlakukan tidak adil saat proses pemecatan dari perusahaan.
                </p>
              </div>
              <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                <h4 className="text-white mb-1">Akses Internal yang Tersisa</h4>
                <p className="text-gray-400 text-sm">
                  Meskipun telah diberhentikan, akses VPN dan kredensial pelaku masih aktif dalam sistem perusahaan selama berbulan-bulan.
                </p>
              </div>
              <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                <h4 className="text-white mb-1">Rencana yang Terstruktur</h4>
                <p className="text-gray-400 text-sm">
                  Pelaku telah merencanakan serangan selama beberapa bulan sebelum eksekusi aktual.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Analisa Penyebab */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl text-white">3.3 Analisa Penyebab</h3>
            </div>
            <p className="text-gray-300 mb-4">Penyebab terjadinya cyber sabotage ini meliputi:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">▸</span>
                <span><span className="text-white">Kelemahan Manajemen Akses:</span> Perusahaan gagal melakukan deactivation credential secara real-time setelah karyawan keluar.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">▸</span>
                <span><span className="text-white">Kurangnya Monitoring dan Logging:</span> Aktivitas mencurigakan dari akses eksternal tidak terdeteksi dalam waktu lama.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">▸</span>
                <span><span className="text-white">Edukasi Keamanan yang Minim:</span> Tim IT tidak mendapat pelatihan tentang threat detection dan incident response yang memadai.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">▸</span>
                <span><span className="text-white">Tidak Adanya Backup & Disaster Recovery Plan:</span> Perusahaan tidak memiliki sistem backup yang redundan untuk SCADA system.</span>
              </li>
            </ul>
          </motion.div>

          {/* Analisa Penanggulangan */}
          <motion.div
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl text-white">3.4 Analisa Penanggulangan</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Upaya penanggulangan cyber sabotage yang dapat dilakukan meliputi:
            </p>

            {/* Prevention */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-green-400" />
                <h4 className="text-xl text-white">a) Pencegahan Proaktif (Prevention)</h4>
              </div>
              <ul className="space-y-2 ml-7 text-gray-300 text-sm">
                <li><span className="text-green-400">•</span> <span className="text-white">Implementasi Zero Trust Architecture:</span> Memverifikasi setiap akses tanpa asumsi kepercayaan implisit, bahkan dari pengguna internal.</li>
                <li><span className="text-green-400">•</span> <span className="text-white">Multi-Factor Authentication (MFA):</span> Menerapkan MFA pada semua akses kritis, terutama untuk sistem SCADA dan database sensitif.</li>
                <li><span className="text-green-400">•</span> <span className="text-white">Segmentasi Jaringan:</span> Membagi jaringan menjadi zone berbeda dengan kontrol akses yang ketat antar zone.</li>
                <li><span className="text-green-400">•</span> <span className="text-white">Regular Security Awareness Training:</span> Memberikan pelatihan keamanan siber secara berkala kepada seluruh karyawan.</li>
              </ul>
            </div>

            {/* Detection */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-blue-400" />
                <h4 className="text-xl text-white">b) Deteksi Dini (Detection)</h4>
              </div>
              <ul className="space-y-2 ml-7 text-gray-300 text-sm">
                <li><span className="text-blue-400">•</span> <span className="text-white">Security Information and Event Management (SIEM):</span> Mengintegrasikan log dari berbagai sumber dan menganalisisnya secara real-time untuk mendeteksi anomali.</li>
                <li><span className="text-blue-400">•</span> <span className="text-white">Intrusion Detection System (IDS):</span> Menempatkan IDS pada jalur kritis untuk mendeteksi pola serangan.</li>
                <li><span className="text-blue-400">•</span> <span className="text-white">User Behavior Analytics (UBA):</span> Menggunakan AI dan machine learning untuk mengidentifikasi perilaku pengguna yang tidak normal.</li>
              </ul>
            </div>

            {/* Response & Recovery */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <h4 className="text-xl text-white">c) Respons dan Pemulihan (Response & Recovery)</h4>
              </div>
              <ul className="space-y-2 ml-7 text-gray-300 text-sm">
                <li><span className="text-purple-400">•</span> <span className="text-white">Incident Response Plan:</span> Memiliki prosedur terstruktur untuk merespons serangan dengan cepat.</li>
                <li><span className="text-purple-400">•</span> <span className="text-white">Backup dan Disaster Recovery:</span> Membuat backup regular dan memiliki rencana recovery yang teruji untuk semua sistem kritis.</li>
                <li><span className="text-purple-400">•</span> <span className="text-white">Digital Forensic:</span> Melibatkan tim forensic profesional untuk investigasi dan pengumpulan bukti digital.</li>
              </ul>
            </div>

            {/* Enforcement */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-red-400" />
                <h4 className="text-xl text-white">d) Penegakan Hukum (Enforcement)</h4>
              </div>
              <ul className="space-y-2 ml-7 text-gray-300 text-sm">
                <li><span className="text-red-400">•</span> <span className="text-white">Pelaporan ke Aparat Hukum:</span> Melaporkan insiden ke Polda Cyber Crime atau BARESKRIM sesuai dengan UU ITE.</li>
                <li><span className="text-red-400">•</span> <span className="text-white">Investigasi Profesional:</span> Bekerja sama dengan lembaga penyidikan untuk mengumpulkan bukti yang cukup untuk penuntutan.</li>
                <li><span className="text-red-400">•</span> <span className="text-white">Penerapan Sanksi:</span> Memastikan bahwa pelaku mendapatkan hukuman sesuai dengan peraturan perundang-undangan.</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Menurut Hafidz & Pratama (2023), integrasi teknologi AI dan forensic digital telah terbukti menekan tingkat keberhasilan sabotage hingga 85% di beberapa perusahaan manufaktur Indonesia yang menerapkan protokol keamanan tersebut.
              </p>
            </div>
          </motion.div>

          {/* Referensi */}
          <motion.div
            className="p-6 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg text-white mb-3">Referensi Bab III:</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Hafidz, S., & Pratama, R. (2023). Cyber Sabotage: Case Study on Industrial System Attacks. Jurnal Keamanan Siber Indonesia, 12(4), 234-256.</li>
              <li>Silalahi, D. J., & Fitriani, D. (2021). Analysis on Prevention of Cyber Sabotage in Critical Infrastructure. Thesis, Universitas Indonesia.</li>
              <li>Pranoto, E., & Wicaksana, D. (2024). Digital Forensic in Cyber Sabotage Prevention. Jurnal AI Keamanan, 9(3), 189-210.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}