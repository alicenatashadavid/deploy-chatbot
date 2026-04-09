-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql108.infinityfree.com
-- Generation Time: Apr 08, 2026 at 05:54 PM
-- Server version: 11.4.10-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_41588597_jkn_labuan`
--

-- --------------------------------------------------------

--
-- Table structure for table `bahagian`
--

CREATE TABLE `bahagian` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `peranan` text DEFAULT NULL,
  `visi_objektif` text DEFAULT NULL,
  `misi_wawasan` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bahagian`
--

INSERT INTO `bahagian` (`id`, `nama`, `peranan`, `visi_objektif`, `misi_wawasan`) VALUES
(1, 'Bahagian Pengurusan', 'Peranan: Bahagian Pengurusan bertanggungjawab membantu ke arah pencapaian dasar dan objektif jabatan dengan  memastikan program-program jabatan disokong melalui sistem perkhidmatan pengurusan yang kukuh, cekap dan berkesan.', 'Objektif: Membantu ke arah pencapaian dasar dan objektif Jabatan Kesihatan W.P. Labuan dengan memastikan program-program jabatan disokong dan didukung melalui sistem perkhidmatan pengurusan yang kukuh, cekap dan berkesan dari segi pentadbiran, sumber manusia dan kewangan.', 'Misi: Membantu menyelenggara kemudahan-kemudahan fizikal dan tenaga manusia melalui sistem yang kemas dan teratur berserta kemudahan kewangan yang mencukupi.\r\n\r\nWawasan: Menyokong usaha-usaha jabatan ke arah menjadi pusat utama melalui sistem penjagaan dan pencegahan yang adil dan saksama, cekap dan tersedia dengan teknologi yang serasi pelanggan.'),
(2, 'Bahagian Kesihatan Awam', 'Peranan: Bahagian Kesihatan Awam bertanggungjawab menyediakan perkhidmatan berkualiti bagi memenuhi kehendak masyarakat dan berusaha membuat penambahbaikan secara berterusan melalui kaedah dan teknologi yang bersesuaian serta kepatuhan yang konsisten terhadap sistem kualiti untuk meningkatkan taraf kesihatan.', 'Visi: Menjadi peneraju dan penggerak utama ke arah pencegahan, perawatan, pemantauan dan promosi kesihatan yang cekap serta serasi pelanggan dan masyarakat.', 'Misi: Menyediakan perkhidmatan kesihatan yang cekap dan berkesan, professional dan berhemah, dedikasi dan bertanggungjawab serta mengutamakan kehendak pelanggan dan penglibatan masyarakat dalam melaksanakan program Kesihatan Awam.'),
(3, 'Bahagian Perkhidmatan Farmasi', 'Peranan: Bahagian Perkhidmatan Farmasi W.P. Labuan merupakan penyelaras program farmasi di Jabatan Kesihatan W.P. Labuan. Bahagian ini memainkan peranan untuk memastikan bahan-bahan farmaseutikal dan penjagaan rawatan ubat yang diberikan adalah selamat, berkesan dan berkualiti untuk orang awam.', 'Visi: Menerajui pengurusan berkualiti ke atas produk-produk farmaseutikal melalui tenaga kerja yang cekap dan profesional, sains dan teknologi yang bersesuaian dan perkongsian maklumat dengan semua pihak yang berkepentingan.\r\n\r\nObjektif: \r\ni. Memastikan bahawa pesakit-pesakit yang menerima rawatan di Kementerian Kesihatan Malaysia memperoleh perkhidmatan Farmasi berkonsepkan ‘Total Pharmaceutical Care’.\r\n\r\nii. Memastikan pendidikan orang awam terhadap penggunaan ubat-ubatan secara rasional ditingkatkan.\r\n\r\niii.Memastikan keluaran farmaseutikal dan produk-produk penjagaan kesihatan adalah berkualiti, selamat, berkesan dan mampu serta mudah diperolehi oleh orang awam termasuk nasihat penggunaan yang rasional.\r\n\r\niv. Menentukan bahawa pengilangan, pengimportan, penjualan, pengedaran, pengurusan dan kegunaan farmaseutikal, kosmetik dan produk pemelihara kesihatan dilaksanakan selaras dengan perundangan Farmasi yang berkuatkuasa dalam negara.', 'Misi: Memastikan semua warga Malaysia memperoleh produk farmaseutikal dan produk pemelihara kesihatan yang berkualiti, selamat dan berkesan termasuklah nasihat mengenai penggunaannya secara rasional.'),
(4, 'Bahagian Perubatan', '', 'Visi: Ke arah individu, keluarga dan masyarakat WP Labuan sihat sejahtera bagi menikmati kehidupan yang berkualiti.\r\n\r\nObjektif umum: Program Perubatan ini berperanan dalam merancang, menyelaras, memantau dan menilai pelaksanaan semua aktiviti program rawatan perubatan bagi memastikan perkhidmatan yang lebih cekap, berkesan dan mudah kepada pelanggan.\r\n\r\nObjektif spesifik: \r\ni. Memastikan penyampaian perkhidmatan perubatan yang cekap, berkesan, selamat dan mesra pelanggan.\r\n\r\nii. Merangka dan melaksana perancangan yang strategik bagi Program Perubatan selaras dengan dasar Kementerian Kesihatan Malaysia.\r\n\r\niii.Memantau dan menilai semua program dan aktiviti penjagaan perubatan di hospital kerajaan , hospital swasta , klinik perubatan swasta , klinik pergigian swasta dan pengamal perubatan tradisional dan komplimentari (TCM).\r\n\r\niv. Merancang, melaksana dan menyelaras aktiviti-aktiviti penyelidikan insiatif kualiti dan inovasi bagi menjamin perkhidmatan yang berkualiti hospital.\r\n\r\nv. Menggalakkan kolaborasi dan penyelarasan antara sektor dan agensi-agensi lain dalam semua aktiviti berkaitan dengan perubatan dan kesihatan.', 'Misi: Membentuk masyarakat WP Labuan sihat melalui :\r\n\r\ni.Perkhidmatan jagaan kesihatan yang berkualiti, mampu dan mudah diperolehi.\r\n\r\nii.Untuk memastikan sistem kesihatan berkualiti tinggi dengan mengutamakan pelanggan melalui: \r\n - Saksama\r\n - Tidak Membebankan \r\n - Cekap \r\n - Wajar Mengikut Teknologi\r\n - Boleh Disesuaikan Mengikut Persekitaran\r\n - Inovatif \r\n\r\niii. Menerajui dan berusaha untuk memudahkan dan membolehkan rakyat:\r\n - mencapai sepenuhnya potensi mereka dalam kesihatan \r\n - menghargai kesihatan sebagai aset paling berharga'),
(5, 'Bahagian Kesihatan Pergigian', 'Peranan: Bahagian Kesihatan Pergigian bertanggungjawab bagi aktiviti pentadbiran dan pengurusan pergigian, perkhidmatan pergigian primer dan perkhidmatan pergigian masyarakat.', 'Objektif: Untuk meningkatkan taraf kesihatan pergigian masyarakat melalui perkhidmatan pergigian penggalakan, pencegahan, rawatan dan pemulihan serta memberi perhatian khas kepada kumpulan kurang bernasib baik supaya seseorang individu itu dapat mencapai taraf kesihatan bagi membolehkannya hidup sihat serta menjalankan kehidupan ekonomi dan sosial yang produktif.', 'Pergigian masyarakat:\r\n\r\nFungsi: Fokus Kesihatan Pergigian Masyarakat adalah untuk mencegah karies gigi dan Kanser Mulut. Ini termasuk pemfluoridaan bekalan air awam, rawatan klinikal seperti rawatan sealan fisur bagi gigi geraham dan varnish fluorida, program pencegahan seperti aktiviti ceramah, latihan memberus gigi, role play dan pengesanan awal pra kanser dan kanser mulut\r\n\r\nPemfluoridaan: Pemfluoridaan bekalan air awam merupakan langkah pencegahan yang efektif yang dapat dinikmati oleh semua lapisan masyarakat sekiranya paras bekalan fluoride berada pada tahap optimum. Pemfluoridaan telah terbukti dapat mengurangkan kejadian karies gigi. Kerjasama perlu ditingkatkan dengan pihak Jabatan Bekalan Air serta Loji Swasta.\r\n\r\nSealan Fisur: Sealan Fisur merupakan satu aktiviti pencegahan yang dijalankan secara klinikal yang bertujuan bagi mencegah karies gigi. Dibawah aktiviti ini sealan fisur disapu pada liang dan fisur gigi geraham kekal dikalangan kanak-kanak yang berisiko mendapat karies gigi.\r\n\r\nKanser Mulut: Aktiviti pengesanan dan pencegahan awal prakanser dan kanser disasarkan kepada kumpulan yang berisiko. Tujuan aktiviti ini adalah untuk meningkatkan kesedaran tentang faktor-faktor yang menyebabkan kanser mulut . Aktiviti ini juga untuk mendidik individu bagi mengesan tanda-tanda awal gejala kanser mulut dan mendapatkan pemeriksaan bagi mengesan kanser awal mulut. Kanser yang dikesan pada peringkat awal berpotensi lebih baik untuk sembuh.\r\n\r\nPergigian Primer:\r\n\r\nFungsi: 1. Penjagaan Kesihatan Pergigian Primer ditujukan kepada semua penduduk Labuan di mana golongan sasaran utama adalah kanak-kanak kecil, kanak-kanak prasekolah, pelajar sekolah rendah dan menengah, ibu mengandung, kanak-kanak keperluan khas, dewasa dan wargatua. Semua aktiviti di bawah program ini telah dirangka dan dilaksanakan bagi memastikan hasil kesihatan mulut yang optimum.\r\n\r\nPerkhidmatan Pergigian Toddler: Penjagaan Awal Kesihatan Pergigian diberi kepada kanak-kanak sejak lahir lagi. \r\n\r\nObjektif utama program kesihatan pergigian awal kanak-kanak adalah untuk menggalakkan dan mengekalkan kesihatan mulut yang baik ke arah mencapai pertumbuhan dan pembangunan optimum. Kanak-kanak yang diperiksa di Klinik Kesihatan Ibu dan Anak (KKIA) dan Klinik Desa (KD) akan dirujuk ke Klinik Pergigian untuk mendapat pemeriksaan. Jururawat Pergigian akan memberi tunjukajar penjagaan kesihatan mulut kepada ibubapa/penjaga kanak-kanak ini.\r\n\r\nPerkhidmatan Pergigian Prasekolah: Di bawah aktiviti ini, kanak-kanak prasekolah akan didedahkan melalui aktiviti promosi dan pencegahan. Ini termasuklah ceramah, sesi memberus gigi, pertunjukan boneka, ‘roleplay’ dan lain-lain aktiviti yang menyeronokkan. Pemeriksaan dan rawatan pergigian akan dilaksanakan selepas aktiviti pencegahan dijalankan.\r\n\r\nPerkhidmatan Pergigian Sekolah: Perkhidmatan pergigian sekolah rendah, menengah serta pra-sekolah dilaksana melalui perkhidmatan pergigian sekolah secara incremental yang sistematik dan menyeluruh supaya matlamat kesihatan gigi kanak-kanak tercapai sepenuhnya. Murid sekolah akan diperiksa dan dirawat di sekolah masing-masing. Perkhidmatan pergigian sekolah adalah termasuk kanak-kanak keperluan khas yang terdapat di sekolah masing-masing.\r\n\r\nPerkhidmatan Pergigian Ibu Mengandung: Matlamat utama aktiviti ini adalah untuk memberi pengetahuan kesihatan pergigian. Mereka diberi pemeriksaan dan rawatan pergigian secara percuma. Selain itu, ceramah juga dijalankan kepada kumpulan ini.\r\n\r\nPerkhidmatan Pergigian Kepada Pesakit Luar: Hanya satu sahaja Klinik Pergigian yang terdapat di Labuan. Klinik ini terletak di tingkat satu bangunan Klinik Kesihatan Labuan. Perkhidmatan pergigian di Klinik Pergigian Labuan dibuka setiap hari bekerja untuk pemeriksaan pergigian, penskaleran, tampalan gigi dan juga cabutan gigi. Bagi rawatan lain seperti gigi palsu, rawatan salur akar gigi, pembedahan kecil bagi gigi geraham bongsu terimpak dan lain-lain keadnormalan dalam mulut akan dibuat secara temujanji.\r\n\r\nPerkhidmatan Pergigian Untuk Golongan Keperluan Khas: Perkhidmatan dilaksanakan di semua Pusat Dalam Komuniti dan Pusat Mesra Komuniti yang terdapat di Labuan. Semua kanak-kanak ini diberi pemeriksaan dan rawatan setiap tahun. Selain itu, ceramah dan tunjukajar memberus gigi juga diberi kepada penjaga kanak-kanak ini.'),
(6, 'Bahagian Keselamatan & Kualiti Makanan', 'Peranan: Bahagian Keselamatan dan Kualiti Makanan bertanggungjawab untuk menjaga keselamatan makanan di dalam rantaian makanan, iaitu mengikut konsep, \'farm-to-table\'. Ini adalah rangka yang digunapakai oleh unit untuk tujuan melakukan aktiviti-aktiviti untuk melindungi pengguna dan juga untuk membangunkan industri makanan supaya mempunyai daya saing yang kuat diperingkat antarabangsa. Di peringkat Pengurusan BKKM bertanggungjawab memantau kerja-kerja yang dilakukan oleh setiap seksyen. Selain daripada itu BKKM di peringkat pengurusan juga bertanggungjawab untuk menjalankan merancang aktiviti-aktiviti promsi keselamatan makanan, aktiviti eskport makanan dan juga memberikan maklumat mengenai Program Keselamatan Makanan yang diterima daripada Bahagian Keselamatan dan Kualiti Makanan kepada setiap seksyen.', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Klinik'),
(2, 'Makanan'),
(3, 'Farmasi'),
(4, 'Pergigian'),
(5, 'Umum'),
(6, 'Hospital');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `name`, `url`, `description`) VALUES
('brg-psh', 'Permohonan Jawatan Pekerja Sambilan Harian', 'https://jknlabuan.moh.gov.my/assets/borang/awam/borang-PSH-Jabatan-Kesihatan-WP-Labuan.pdf', 'Borang permohonan jawatan pekerja sambilan harian Jabatan Kesihatan W.P. Labuan.'),
('brg-li', 'Permohonan Menjalani Latihan Industri/ Klinikal Di Fasiliti Kesihatan JKWPL', 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang-permohonan-latihan-Industri-atau-klinikal.pdf', 'Borang permohonan menjalani latihan industri / klinikal di fasiliti kesihatan Jabatan Kesihatan W.P. Labuan.'),
('brg-plr', 'Permohonan Baru Lesen Racun Jenis ABE Permit NaOH', 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang%20Permohonan%20Baru%20Lesen%20Racun%20Jenis%20ABE%20Permit%20NaOH.pdf', 'Borang permohonan lesen racun jenis A / B / E /permit natrium hidroksida (NaOH).'),
('appb-le', 'Permohonan Menjalani Posting Elektif Di Fasiliti KKM (LAMPIRAN B)', 'https://jknlabuan.moh.gov.my/assets/borang/awam/Appendix-B-BORANG-PERMOHON-MENJALANI-POSTING-ELEKTIF.pdf', 'Borang permohonan menjalani posting elektif di fasiliti KKM.'),
('brg-pmmlr', 'Permohonan Memperbaharui atau Meminda Butiran bagi Lesen Racun Jenis ABE Permit NaOH', 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang%20Permohonan%20Memperbaharui%20atau%20Meminda%20Butiran%20bagi%20Lesen%20Racun%20Jenis%20ABE%20Permit%20NaOH.pdf', 'Borang permohonan memperbaharui atau meminda butiran bagi lesen racun jenis A/B/E/permit natrium hidroksida (NaOH).'),
('brg-trlp', 'Permohonan Kelulusan Untuk Menjalankan Tugas Rasmi Di Luar Ibu Pejabat', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/KELULUSAN%20UNTUK%20MENJALANKAN%20TUGAS%20RASMI%20DI%20LUAR%20IBU%20PEJABAT.doc', 'Borang permohonan hendaklah dipohon 3 hari sebelum memulakan perjalanan.'),
('brg-pwmib', 'Pengisytiharan Wilayah Menetap Ibu Bapa -LAMPIRAN II', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Istihar-Wilayah-ibubapa-menetap.pdf', 'Borang pengisytiharan wilayah menetap ibu bapa.'),
('brg-aksr', 'Pemantauan Latihan JKWPL', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BORANG_AHLI_KSR_JKWPL.xlsx', 'Borang pendaftaran ahli kelab sukan & rekreasi JKWPL.'),
('brg-tzw', 'Permohonan Kemudahan Tambang Ziarah Wilayah', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BorangTMWAversi22025.pdf', 'Senarai semak permohonan kemudahan tambahan ziarah wilayah (TZW) JKWPL.'),
('brg-pnm-lo', 'Permohonan Nota Minta- LO', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-01-Borang_Permohonan_Nota_Minta_LO.xlsx', 'Borang permohonan nota minta (Bekalan / Perkhidmatan) (Local purchase).'),
('brg-pnmk', 'Permohonan Perolehan Nota Minta Kontrak', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-02_BORANG_PERMOHONAN_PEROLEHAN_NOTA_MINTA_KONTRAK.xls', 'Borang permohonan nota minta (Kontrak Kementerian / Pusat / Jabatan / APPL)'),
('brg-PePPT', 'Permohonan Pergerakan eP Pembelian Terus', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-04_Borang_pergerakan_eP_Pembelian_Terus.xls', 'Borang permohonan pergerakan pembelian terus perkhidmatan / produk.'),
('brg-PePK', 'Permohonan Pergerakan eP Kontrak', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-03_Borang_Pergerakan_eP_Contract.xls', 'Borang permohonan pergerakan kontrak perkhidmatan / produk.'),
('brg-ppk', 'Permohonan Pinjaman Kewangan', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Borang_Pinjaman_Kewangan-semakan3%201.xls', 'Borang permohonan pinjaman kewangan.'),
('brg-akp', 'Aduan Kerosakan dan Pemantauan', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BorangAduanKerosakandanPemantauan.pdf', 'Borang aduan kerosakan dan pemantauan seksyen kejuruteraan / ICT.'),
('brg-paem', 'Pengurusan Akaun Emel- MyGovUC', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/borang-pengurusan-akaun-MyGovUC_2022.pdf', 'Borang pengurusan email MyGovUC.'),
('brg-pphssm', 'Reten Penilaian Penyajian Hidangan Sihat Semasa Mesyuarat', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Reten_PHSSM.xls', 'Borang penilaian penyajian hidangan sihat semasa mesyuarat.'),
('brg-ahk', 'Aduan Hazard dan Keselamatan JKWPL', 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BORANG-ADUAN-HAZARD.pdf', 'Borang aduan hazard keselamatan dan kesihatan JKWPL'),
('brg-lokum', 'Permohonan Menjalankan Pekerjaan Luar (LOKUM) JKWPL', 'https://jknlabuan.moh.gov.my/assets/garis-panduan/BorangPermohonanLokum2025v2.pdf', 'Borang permohonan menjalankan pekerjaan luar (LOKUM) JKWPL');

-- --------------------------------------------------------

--
-- Table structure for table `document_keywords`
--

CREATE TABLE `document_keywords` (
  `id` int(11) NOT NULL,
  `document_id` varchar(50) DEFAULT NULL,
  `keyword` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `document_keywords`
--

INSERT INTO `document_keywords` (`id`, `document_id`, `keyword`) VALUES
(1, 'brg-psh', 'pekerja sambilan'),
(2, 'brg-psh', 'partime'),
(3, 'brg-li', 'latihan industri'),
(4, 'brg-plr', 'baru lesen racun'),
(5, 'appb-le', 'latihan elektif'),
(6, 'brg-pmmlr', 'meminda butiran'),
(7, 'brg-trlp', 'tugas luar pejabat'),
(8, 'brg-pwmib', 'pengisytiharan ibu bapa'),
(9, 'brg-aksr', 'pantau latihan'),
(10, 'brg-tzw', 'kemudahan tambang ziarah'),
(11, 'brg-pnm-lo', 'LO'),
(12, 'brg-pnmk', 'nota minta kontrak'),
(13, 'brg-PePPT', 'pembelian terus'),
(14, 'brg-PePK', 'pergerakan ep'),
(15, 'brg-ppk', 'pinjaman kewangan'),
(16, 'brg-akp', 'kerosakan dan pemantauan'),
(17, 'brg-paem', 'pengurusan emel'),
(18, 'brg-pphssm', 'penyajian hidangan sihat'),
(19, 'brg-ahk', 'hazard dan keselamatan'),
(20, 'brg-lokum', 'pekerjaan luar');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `category_id`, `question`, `answer`) VALUES
(1, 1, 'Bagaimana membuat aduan kepada JKWPL?', 'Aduan boleh dibuat melalui telefon 087-596000, emel atau sistem SPAB.'),
(2, 1, 'Berapa lama masa menunggu di klinik?', 'Masa menunggu sekitar 10 hingga 120 minit bergantung kepada perkhidmatan.'),
(3, 1, 'Apa perkhidmatan di Klinik Kesihatan Labuan?', 'Saringan kesihatan, klinik diabetis dan saringan pra-perkahwinan.'),
(4, 1, 'Apakah waktu operasi Klinik Kesihatan di Labuan?', 'Waktu operasi Klinik Kesihatan (KK) & Klinik Desa (KD) di Labuan adalah:\\n\\n1. KK WP Labuan (Tg. Taras) & Klinik Desa:\\n- Isnin - Khamis: 8:00 AM - 5:00 PM (Rehat 1PM-2PM)\\n- Jumaat: 8:00 AM - 5:00 PM (Rehat 12.15PM-2.45PM)\\n- Sabtu/Ahad/Cuti Am: Tutup\\n\\n2. KK UTC Labuan:\\n- Isnin - Ahad: 8:00 AM - 9:00 PM\\n\\nUntuk kecemasan selepas waktu pejabat, sila terus ke Unit Kecemasan Hospital Labuan (24 jam).'),
(5, 2, 'Bagaimana memastikan makanan selamat?', 'Pastikan makanan dimasak sempurna, disimpan dengan betul dan elakkan pencemaran.'),
(6, 2, 'Apakah tanda keracunan makanan?', 'Muntah, cirit-birit, sakit perut dan demam.'),
(7, 2, 'Apa perlu dibuat jika keracunan makanan?', 'Dapatkan rawatan segera dan minum air secukupnya.'),
(8, 3, 'Apakah ubat berdaftar?', 'Ubat yang diluluskan KKM dan mempunyai nombor MAL.'),
(9, 3, 'Apa risiko ubat tidak berdaftar?', 'Boleh mengandungi bahan berbahaya dan tidak selamat.'),
(10, 3, 'Bagaimana simpan ubat?', 'Simpan di tempat kering, jauh dari cahaya dan kanak-kanak.'),
(11, 4, 'Apa punca karies gigi?', 'Bakteria menukar gula kepada asid yang merosakkan gigi.'),
(12, 5, 'Bagaimana cara hubungi JKWPL?', 'Anda boleh menghubungi Jabatan Kesihatan W.P. Labuan (JKWPL) melalui:\\n\\n- Telefon: 087-596000\\n- Faks: 087-423882\\n- Alamat: Peti Surat 80832, 87018 Wilayah Persekutuan Labuan.\\n\\nUntuk Hospital Labuan, sila hubungi 087-423919.'),
(13, 6, 'Di mana Hospital Labuan?', 'Hospital Labuan terletak di Jalan Hospital, 87008 Wilayah Persekutuan Labuan. Ia merupakan hospital utama di Labuan yang menyediakan perkhidmatan pakar dan kecemasan 24 jam.');

-- --------------------------------------------------------

--
-- Table structure for table `faq_keywords`
--

CREATE TABLE `faq_keywords` (
  `id` int(11) NOT NULL,
  `faq_id` int(11) DEFAULT NULL,
  `keyword` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `faq_keywords`
--

INSERT INTO `faq_keywords` (`id`, `faq_id`, `keyword`) VALUES
(1, 1, 'aduan'),
(2, 1, 'komplain'),
(3, 2, 'masa menunggu'),
(4, 3, 'perkhidmatan klinik'),
(5, 4, 'waktu operasi'),
(6, 4, 'jam buka'),
(7, 4, 'tutup'),
(8, 5, 'makanan selamat'),
(9, 6, 'tanda keracunan makanan'),
(10, 7, 'rawatan keracunan makanan'),
(11, 8, 'ubat berdaftar'),
(13, 9, 'tidak berdaftar'),
(14, 10, 'cara simpan'),
(15, 11, 'karies gigi'),
(16, 12, 'hubungi'),
(17, 12, 'telefon'),
(18, 12, 'contact'),
(19, 13, 'dimana lokasi');

-- --------------------------------------------------------

--
-- Table structure for table `keywords`
--

CREATE TABLE `keywords` (
  `id` int(11) NOT NULL,
  `bahagian_id` int(11) DEFAULT NULL,
  `keyword` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `keywords`
--

INSERT INTO `keywords` (`id`, `bahagian_id`, `keyword`) VALUES
(1, 1, 'pengurusan'),
(2, 1, 'ketua jabatan'),
(3, 2, 'kesihatan awam'),
(4, 2, 'public health'),
(5, 2, 'pemakanan'),
(6, 2, 'promosi'),
(7, 3, 'farmasi'),
(8, 3, 'cawangan'),
(9, 4, 'perubatan'),
(10, 4, 'ckaps'),
(11, 4, 'medikolegal'),
(12, 5, 'pergigian'),
(13, 5, 'fluorida'),
(14, 6, 'akta makanan'),
(15, 6, 'makanan');

-- --------------------------------------------------------

--
-- Table structure for table `manuals`
--

CREATE TABLE `manuals` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` text DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `manuals`
--

INSERT INTO `manuals` (`id`, `name`, `url`, `description`) VALUES
('mnl-epsa', 'Manual Penggunaan EPSA', 'https://www.epsa.gov.my/pluginfile.php/2110304/mod_page/content/2/Manual%20Penggunaan%20EPSA%20%281%29.pdf', 'Manual panduan penggunaan Portal E-Pembelajaran Sektor Awam (EPSA).'),
('pts-2026-2030', 'Pelan Tindakan Strategik (PTS) 2026-2030 JKWPL', 'https://simplebooklet.com/ptsjkwpl2026-2030#page=1', 'Dokumen perancangan strategik Jabatan Kesihatan W.P. Labuan bagi tahun 2026 hingga 2030.'),
('gp-eksa', 'Garis Panduan Pelaksanaan EKSA JKWPL', 'https://jknlabuan.moh.gov.my/eksa.html', 'Garis panduan pelaksanaan ekosistem kondusif sektor awam (EKSA).'),
('pls-pks', 'Polisi Keselamatan Siber Versi 1.0', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/PKSv1.pdf', 'Dokumen pelaksanaan polisi keselamatansiber versi 1.0 KKM.'),
('gp-pre', 'Garis Panduan Pengurusan Rekod Elektronik', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/Garis%20Panduan%20Pengurusan%20Rekod%20Elektronik.pdf', 'Dokumen garis panduan pengurusan rekod elektronik.'),
('prs-ktp', 'Tatacara Pelaksanaan Kelulusan Teknikal dan Pemantauan KKM', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/TatacaraPelaksanaanKelulusanTeknikaldanPemantauanKKM.pdf', 'Dokumen tatacara pelaksanaan permohonan kelulusan teknikal dan pemantauan projek ICT agensi sektor awam di KKM.'),
('snr-dkict', 'DKICT KKM - Senarai Undang ICT-Dasar ICT-Peraturan ICT', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/DKICT%20KKM%20-%20Senarai%20Undang%20ICT%20-%20Dasar%20ICT%20-%20Peraturan%20ICT.pdf', 'Lampiran 3 : Senarai undang-undang, dasar dan peraturan.'),
('gp-pkmcc', 'Garis Panduan Pengurusan Keselamatan Maklumat Melalui Pengkomputeran Awan (Cloud Computing) Dalam Perkhidmatan Awam', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/GARIS-PANDUAN-PENGURUSAN-KESELAMATAN-MAKLUMAT-MELALUI-PENGKOMPUTERAN-AWAN-CLOUD-COMPUTING-DALAM-PERKHIDMATAN-AWAM-VERSI-2.0.pdf', 'Dokumen garis panduan pengurusan keselamatan maklumat melalui cloud computing dalam perkhidmatan awam.'),
('gp-ptkrs', 'Garis Panduan Penilaian Tahap Keselamatan Rangkaian Dan Sistem ICT Sektor Awam', 'https://jknlabuan.moh.gov.my/assets/garis-panduan-ict/GARIS%20PANDUAN%20PENILAIAN%20TAHAP%20KESELAMATAN%20RANGKAIAN%20DAN%20SISTEM%20ICT%20SEKTOR%20AWAM.pdf', 'Dokumen garis panduan pelaksanaan penilaian tahap keselamatan rangkaian dan sistem ICT.'),
('gp-pkdd', 'Garis Panduan Penganjuran Kempen Derma Darah', 'https://jknlabuan.moh.gov.my/assets/garis-panduan/GARIS-PANDUAN-PENGANJURAN-KEMPEN-DERMA-DARAH%20.pdf', 'Dokumen garis panduan penganjuran kempen derma darah Jabatan Patologi & Perubatan Transfusi Hospital Labuan.'),
('gp-lmpk', 'Garis Panduan Langkah-Langkah Mengoptimumkan Perbelanjaan Kerajaan', 'https://jknlabuan.moh.gov.my/assets/garis-panduan/GarisPanduanLangkah-LangkahMengoptimumkanPerbelanjaanKerajaan%20.pdf', 'Dokumen garis panduan melaksanakan langkah-langkah mengoptimumkan perbelanjaan Kerajaan.'),
('prs-pmsw', 'Tata Etika Penggunaan Media Sosial oleh Warga KKM', 'https://jknlabuan.moh.gov.my/assets/garis-panduan/TataEtikaMediaSosial.pdf', 'Dokumen tata etika pengguna media sosial oleh warga KKM.'),
('gp-mktaf', 'Garis Panduan Mencegah dan Menangani Kekerasan Terhadap Anggota di Fasiliti Kementerian Kesihatan Malaysia', 'https://jknlabuan.moh.gov.my/assets/garis-panduan/GP_Mencegah_Kekerasan.pdf', 'Dokumen garis panduan mencegah dan menangani kekerasan terhadap anggota di fasiliti KKM.');

-- --------------------------------------------------------

--
-- Table structure for table `manuals_keywords`
--

CREATE TABLE `manuals_keywords` (
  `id` int(11) NOT NULL,
  `manuals_id` varchar(255) NOT NULL,
  `keywords` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `manuals_keywords`
--

INSERT INTO `manuals_keywords` (`id`, `manuals_id`, `keywords`) VALUES
(1, 'mnl-epsa', 'manual epsa'),
(2, 'mnl-epsa', 'garis panduan epsa'),
(3, 'gp-eksa', 'eksa'),
(4, 'pls-pks', 'keselamatan siber'),
(5, 'pls-pks', 'cybersecurity'),
(6, 'gp-pre', 'rekod elektronik'),
(7, 'prs-ktp', 'kelulusan teknikal'),
(8, 'snr-dkict', 'dasar ict'),
(9, 'snr-dkict', 'peraturan ict'),
(10, 'gp-pkmcc', 'cloud computing'),
(11, 'gp-pkmcc', 'pengkomputeran awam'),
(12, 'gp-ptkrs', 'keselamatan rangkaian'),
(13, 'gp-pkdd', 'kempen derma darah'),
(14, 'gp-lmpk', 'optimum perbelanjaan'),
(15, 'prs-pmsw', 'etika media sosial'),
(16, 'gp-mktaf', 'cegah kekerasan');

-- --------------------------------------------------------

--
-- Table structure for table `seksyen_unit`
--

CREATE TABLE `seksyen_unit` (
  `id` int(11) NOT NULL,
  `bahagian_id` int(11) DEFAULT NULL,
  `nama_seksyen` text NOT NULL,
  `fungsi_tugas` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `seksyen_unit`
--

INSERT INTO `seksyen_unit` (`id`, `bahagian_id`, `nama_seksyen`, `fungsi_tugas`) VALUES
(1, 1, 'Seksyen Khidmat Pengurusan', 'a) Unit Pentadbiran\r\nb) Unit Pemandu\r\nc) Unit Latihan\r\nd) Unit Teknologi Maklumat'),
(2, 1, 'Seksyen Kewangan', 'a) Unit Kewangan\r\nb) Unit Akaun Dan Bayaran \r\nc) Unit Pinjaman\r\nd) Unit Hasil\r\n'),
(3, 1, 'Seksyen Sumber Manusia', ''),
(4, 1, 'Seksyen Perolehan', 'a) Unit Perolehan\r\nb) Unit Aset\r\nc) Unit Stor\r\n'),
(5, 1, 'Unit Integriti Dan Komunikasi Korporat', 'a) Unit Tatatertib\r\nb) Unit Aduan\r\n'),
(6, 1, 'Unit Pembangunan', ''),
(7, 2, 'Seksyen Perkembangan Kesihatan Awam', ''),
(8, 2, 'Seksyen Pembangunan Kesihatan Keluarga', ''),
(9, 2, 'Seksyen Promosi (Pendidikan) Kesihatan', 'Peranan: Unit Promosi Kesihatan bertanggungjawab terhadap perancangan, pelaksanaan, penyelarasan dan penilaian program pendidikan kesihatan sebagai program khusus disamping memberi sokongan dalam aspek pendidikan kesihatan untuk semua program kesihatan di Jabatan Kesihatan.\r\n\r\nObjektif: Mencapai perubahan pengetahuan, sikap dan tingkahlaku untuk tujuan meningkatkan kesihatan individu, keluarga dan masyarakat menerusi daya usaha sendiri dengan:\r\n\r\n1. Menanam minat di kalangan masyarakat terhadap kepentingan kesihatan dan amalan gaya hidup sihat\r\n\r\n2. Meningkatkan kesedaran tentang langkah-langkah pencegahan penyakit dan memupuk sikap bertanggungjawab terhadap kesihatan sendiri\r\n\r\n3. Meningkatkan kesedaran tentang kemudahan-kemudahan kesihatan yang ada dan menggalakkan penggunaan kemudahan tersebut'),
(10, 2, 'Seksyen Kawalan Penyakit', ''),
(11, 2, 'Seksyen Pemakanan', 'Peranan: Menganjurkan Program Pengawasan yang bertujuan untuk memantau taraf pemakanan bagi kategori yang telah ditetapkan manakala Program pemulihan meningkatkan dan memperbaiki taraf pemakanan masyarakat yang mengalami kekurangan dan berlebihan zat makanan. Program promosi pula bertujuan meningkatkan pengetahuan tentang pemakanan agar dapat menyumbang kepada perubahan cara gaya hidup yang lebih sihat.\r\n\r\nObjektif Umum: Mencapai dan mengekalkan kesejahteraan pemakanan yang optimum di kalangan penduduk Wilayah Persekutuan Labuan.\r\n\r\n1. Menanam minat di kalangan masyarakat terhadap kepentingan kesihatan dan amalan gaya hidup sihat\r\n\r\n2. Meningkatkan kesedaran tentang langkah-langkah pencegahan penyakit dan memupuk sikap bertanggungjawab terhadap kesihatan sendiri\r\n\r\n3. Meningkatkan kesedaran tentang kemudahan-kemudahan kesihatan yang ada dan menggalakkan penggunaan kemudahan tersebut\r\n\r\nObjektif Khusus: 1. Meningkatkan amalan penyusuan susu ibu dan pemberian makanan pelengkap\r\n\r\n2. Meningkatkan amalan pengambilan makanan dan pemakanan yang baik\r\n\r\n3. Mengurangkan masalah kekurangan Protein-Tenaga\r\n\r\n4. Mengurangkan masalah mikronutrien\r\n\r\n5. Mengurangkan masalah berat badan berlebihan dan obesiti\r\n\r\n6. Pencegahan dan pengawalan penyakit tidak berjangkit berkaitan dengan pemakanan'),
(12, 2, 'Seksyen Kejuruteraan', ''),
(13, 3, 'Cawangan Pengurusan Perkhidmatan Farmasi', 'Objektif: Untuk memastikan perancangan strategik dan dasar perkhidmatan farmasi dilaksanakan mengikut sasaran yang ditetapkan, pengagihan sumber manusia mengikut keperluan, pembangunan modal insan yang relevan dan berterusan, penerapan dan pengamalan sistem pengurusan kualiti yang berterusan dalam perkhidmatan farmasi, serta memastikan urusan pentadbiran dan kewangan yang mantap dilakukan mengikut peraturan dan garis panduan yang ditetapkan.\r\n\r\nTugas-tugas utama:\r\n  1. Mengurus penyampaian maklumat dasar berkaitan perkhidmatan yang ditetapkan oleh Bahagian Perkhidmatan Farmasi, Kementerian Kesihatan Malaysia.\r\n\r\n  2. Menyelaras dan memantau perkara berkaitan kualiti/ inovasi dalam perkhidmatan farmasi.\r\n\r\n  3. Mengenalpasti, merancang dan mengkoordinasi program berkaitan latihan dan Continuous Professional Development (CPD) untuk anggota perkhidmatan farmasi negeri.\r\n\r\n  4. Mengurus keperluan sumber manusia dalam perkhidmatan farmasi termasuk penjawatan, penempatan dan pertukaran Pegawai Farmasi dan Penolong Pegawai Farmasi.\r\n\r\n  5. Mengendalikan aduan berkaitan perkhidmatan farmasi.\r\n\r\n  6. Memantau pelaksanaan dasar-dasar yang ditetapkan dan masalah-masalah yang timbul berkaitan pengurusan farmasi di fasiliti farmasi hospital dan klinik kesihatan di W.P. Labuan.'),
(14, 3, 'Cawangan Amalan & Perkembangan Farmasi', 'Objektif: Untuk memastikan keperolehan dan penggunaan ubat-ubatan yang berkualiti melalui amalan farmasi yang berkesan bagi mempertingkatkan perkhidmatan farmasi di Malaysia supaya setanding dengan kemajuan perkembangan perkhidmatan farmasi di negara-negara maju.\r\n\r\nTugas-tugas utama:\r\n  1. Merancang, membangun, mengawal dan menyelaras aktiviti-aktiviti program Farmasi di Hospital dan Klinik Kesihatan kerajaan di W.P. Labuan ke arah penambahbaikan perkhidmatan berterusan.\r\n\r\n  2. Memantau pelaksanaan aktiviti-aktiviti farmasi di Hospital dan Klinik Kesihatan kerajaan W.P. Labuan seperti Farmasi Ambulatori, Farmasi Pesakit Dalam, Farmasi Klinikal, Kaunseling (MTAC) dan sebagainya melalui pengumpulan data-data secara berkala.\r\n\r\n  3. Menyelaras Audit Dalaman Amalan Farmasi dan aktiviti-aktiviti penyeliaan ke atas fasiliti farmasi di Hospital dan Klinik Kesihatan.\r\n\r\n  4. Memperkukuhkan aspek keselamatan pengubatan pesakit melalui perkhidmatan Farmasi Klinikal Farmakokinetik, pelaporan kesan advers ubat dan kesilapan pengubatan.\r\n\r\n  5. Mempromosikan kesedaran penggunaan ubat secara berkualiti dan rasional.\r\n  \r\n  6. Memastikan bekalan ubat-ubatan berjalan lancar melalui aktiviti pengurusan stor dan kewangan yang mantap.\r\n\r\n  7. Memantau penggunaan ubat-ubatan di Hospital dan Klinik Kesihatan kerajaan di W.P. Labuan.'),
(15, 3, 'Cawangan Penguatkuasa Farmasi', 'Objektif: Memastikan semua keluaran farmaseutikal dan produk penjagaan kesihatan yang berada di pasaran adalah berkualiti, selamat, berkesan dan iklan ubat dan perkhidmatan perubatan mematuhi akta-akta dan peraturan-peraturan yang dikuatkuasakan dan juga meningkatkan kesedaran pengguna ke atas penggunaan ubat yang berdaftar.\r\n\r\nAktiviti utama:\r\n1. Perlesenan - Unit Pelesenan bertanggungjawab memproses Lesen Racun Jenis A/B/E dan Permit NaOH di bawah Akta Racun 1952.\r\n\r\n2. Pemeriksaan - Pemeriksaan premis dijalankan bagi tujuan pengeluaran lesen racun ke atas premis farmasi dan premis yang mengendalikan bahan kimia terkawal bagi tujuan kegunaan industri. Ia dijalankan bagi memastikan kepatuhan setiap pemegang lesen terhadap syarat-syarat lesen racun di bawah Akta Racun 1952. Pemeriksaan juga dijalankan ke atas premis berdaftar iaitu klinik-klinik dan hospital swasta bagi memastikan pengendalian racun dilaksanakan mengikut keperluan undang-undang dan tiada penjualan atau pembekalan racun berjadual oleh individu yang tidak berkelayakan. Selain itu, pemeriksaan premis tidak berlesen seperti kedai-kedai ubat tradisional Cina, Melayu dan India; kedai runcit, gerai-gerai, pasar malam, premis jualan langsung dan salun-salun kecantikan juga dijalankan bagi memastikan semua keluaran-keluaran kesihatan yang dijual atau dibekal adalah berdaftar dengan Kementerian Kesihatan Malaysia (KKM) bagi menjamin keselamatan pengguna.\r\n\r\n3. Pemeriksaan Di Pintu Masuk - Pemeriksaan terhadap pengimportan ubat-ubatan, kosmetik dan bahan kimia dijalankan oleh Cawangan-cawangan Penguatkuasa Farmasi W.P. Labuan di pintu masuk utama. Saringan pengimportan dijalankan bukan sahaja melalui kargo tetapi juga terhadap pengimportan sama ada di luar atau dalam Negara melalui pos atau agen kurier dan juga bagasi penumpang.\r\n\r\n4. Perlindungan Pengguna - Unit Perlindungan Pengguna bertanggungjawab untuk mendidik dan memberi kesedaran kepada masyarakat berkaitan penggunaan ubat-ubatan dan produk-produk farmaseutikal yang berkualiti dan selamat. Unit ini juga bertanggungjawab dalam meningkatkan kesedaran masyarakat akan risiko penggunaan ubat tradisional yang tidak berdaftar dan dicemarpalsu. Bagi tujuan itu, dua aktiviti utama iaitu pameran dan sesi ceramah dan dialog telah dijalankan di samping pelbagai program seperti pengedaran risalah serta kalender berinformasi kepada jabatan kerajaan, pihak swasta, badan bukan kerajaan, institusi pengajian tinggi awam dan swasta, peniaga dan pemegang lesen/permit.\r\n\r\n5. Kawalan Iklan - Selaras dengan perkembangan teknologi, masyarakat kini boleh menerima maklumat melalui pelbagai sumber media massa. Pengiklanan pelbagai produk tidak berdaftar dan mengandungi bahan racun berjadual semakin banyak didapati dalam majalah-majalah, akhbar, televisyen, radio dan internet. Cawangan Penguatkuasa Farmasi berperanan memantau pengiklanan ubat dan barangan farmaseutikal selaras dengan peruntukan dalam Akta Ubat (Iklan dan Penjualan) 1956.\r\n\r\n6. Risikan Dan Operasi - Unit ini bertanggungjawab menyiasat dan mengesahkan setiap aduan dan maklumat yang diterima daripada orang ramai. Pengesahan aduan dibuat bagi memastikan maklumat adalah tepat dan sesuai untuk operasi serbuan. Serbuan dilakukan ke atas premis perniagaan ubat tradisional, kedai ubat, kedai runcit, gerai-gerai dan salun kecantikan serta rumah kediaman yang didapati menjalankan penjualan ubat-ubatan tidak berdaftar termasuk produk kesihatan dan kecantikan.\r\n\r\n7. Siasatan Dan Pendakwaan - Penyiasatan adalah satu proses mengumpulkan maklumat-maklumat berkaitan kesalahan yang dilakukan oleh orang kena siasat (OKS) sehingga ke peringkat pendakwaan. Ia melibatkan pengumpulan maklumat yang relevan daripada agensi lain seperti Suruhanjaya Syarikat Malaysia, Jabatan Kimia Malaysia, Jabatan Pendaftaran Negara, Majlis Perubatan Malaysia, Telekom Malaysia, Jabatan Polis, Jabatan Imigresen dan lain-lain agensi yang berkaitan. Hasil daripada penyiasatan yang menyeluruh, mana-mana individu atau syarikat yang didapati melanggar undang-undang yang dikuatkuasakan akan didakwa di mahkamah mengikut kesalahan yang dilakukan. Pegawai farmasi yang dilantik menjadi pegawai pendakwa bertanggungjawab membawa kes ke mahkamah bagi membuktikan kes ke atas orang yang didakwa.'),
(16, 4, 'Unit Kualiti Perubatan', 'Fungsi: \r\n1. Merancang, melaksana dan memantau aktiviti survelan pencapaian klinikal termasuk pelaporan pencapaian data KPI (Key Performance Indicator) / CPVF (Clinical Performance Verification Form ) / HPIA (Hospital Performance Indicator for Accountability)dan aktiviti audit KPI PKN dan TPKN(P).\r\n\r\n2. Sekretariat bagi pelaporan pencapaian KPI Pengarah Kesihatan Negeri.\r\n\r\n3. Merancang dan menyelaras aktiviti QAP peringkat negeri termasuk aktiviti latihan, pengurusan konvensyen, dokumentasi dan liason di antara KKM dan JKN bagi aktiviti ini.\r\n\r\n4. Merancang, mengurus dan memantau pelaksanaan aktiviti Kawalan Infeksi di fasiliti hospital\r\n\r\n5. Penyelarasan dan pemantauan pelaporan Malaysian Patient Safety Goal (MPSG) dan aktiviti keselamatan pesakit peringkat Jabatan Kesihatan Negeri WP Labuan.\r\n\r\n6. Penyelarasan dan pemantauan program Incident Reporting (IR) hospital.\r\n\r\n7. Sekretariat negeri bagi pelaksanaan aktiviti P5VS dan Program Bebas Kesakitan (PFP).\r\n\r\n8. Merancang, menyelaras dan memantau aktiviti Keselamatan dan Kesihatan Pekerjaan (JKKP) hospital.\r\n\r\n9. Memantau program latihan atau ’echo training’ CPG di peringkat Jabatan Kesihatan Negeri WP Labuan serta membuat laporan aktiviti latihan CPG dan pengedaran garispanduan dan maklumat lain yang berkaitan.\r\n\r\n10. Pemantauan Piagam Pelanggan Teras KKM Bahagian Perubatan untuk hospital.\r\n\r\n11. Penyelarasan dan pemantauan pelaporan aktiviti Lean Healthcare di hospital.\r\n\r\n12. Penyelarasan dan pemantauan pelaksanaan aktiviti akreditasi hospital.\r\n\r\n13. Sekretariat negeri bagi pelaksanaan aktiviti program Safe Surgery Saves Lives(SSSL).\r\n\r\n14. Penyelaras klinikal bagi sistem Casemix hospital.\r\n\r\n15. Pengendalian aktiviti kualiti yang lain seperti MS ISO, EKSA peringkat bahagian Perubatan sendiri.\r\n\r\n16. Sekretariat negeri bagi Program Credentialing and Privileging (C&P) JKWP Labuan.'),
(17, 4, 'Unit Amalan dan Medikolegal', 'Fungsi CKAPS:\r\n1. Permohonan pendaftaran klinik perubatan swasta dan klinik pergigian swasta.\r\n\r\n2. Pengendalian permohonan pembaharuan lesen kemudahan dan perkhidmatan jagaan kesihatan swasta (klinik perubatan dan klinik pergigian swasta).\r\n\r\n3. Memantau aduan terhadap kemudahan dan perkhidmatan jagaan kesihatan swasta dan memastikan aduan tersebut diambil tindakan dan selesai.\r\n\r\n4. Melaksanakan aktiviti penguatkuasaan ke atas kemudahan dan perkhidmatan jagaan kesihatan swasta sebagaimana yang diperuntukkan dibawah Akta 586.\r\n\r\n5. Pemantauan dan kawal selia semua kemudahan dan perkhidmatan jagaan kesihatan swasta.\r\n\r\n6. Pemantauan permohonan lokum peringkat negeri.\r\n\r\nFungsi Medikolegal:\r\n1. Menyelaras dan mengurus maklumbalas pelanggan terhadap perkhidmatan hospital kerajaan di WP Labuan termasuk aduan awam, pertanyaan, cadangan, permohonan dan penghargaan.\r\n\r\n2. Menyelaras dan mengurus aduan serta saman Medico-Legal terhadap perkhidmatan hospital dan klinik kerajaan di WP Labuan termasuk penubuhan Jawatankuasa Penyiasatan Bebas dan Jawatankuasa Tawaran Ex-Gratia.\r\n\r\n3. Menjalankan latihan berkaitan pengurusan dan penyiasatan aduan serta etika dan perundangan perubatan.\r\n\r\n4. Memantau pelaksanaan cadangan dan langkah-langkah penambahbaikan terhadap aduan perkhidmatan hospital.'),
(18, 4, 'Unit Perkembangan Perubatan', 'Fungsi: \r\n1. Menyelaras penempatan Pegawai Perubatan baru ke fasiliti kesihatan WP Labuan.\r\n\r\n2. Menyelaras permohonan Latihan Elektif bagi Pelajar Perubatan ke Hospital Labuan.\r\n\r\n3. Menghadiri mesyuarat bersama Agensi Luar.\r\n\r\n4. Memantau pencapaian Pelan Strategik bahagian Perubatan.\r\n\r\n5. Mengendalikan mesyuarat berkaitan.\r\n\r\n6. Memantau dan menyelaras aktiviti LDP (Latihan Dalam Perkhidmatan) Perubatan.\r\n\r\n7. Menjalankan penyeliaan dan pengauditan hospital secara berkala.\r\n\r\n8. Memantau aktiviti pembangunan hospital Labuan.\r\n\r\n9. Menyelaras permohonan peralatan perubatan dan bukan perubatan bahagian Perubatan dan hospital Labuan.\r\n\r\n10. Menyelaras permohonan peralatan perubatan dan bukan perubatan bahagian Perubatan dan hospital Labuan.\r\n\r\n11. Memantau program Continuous Profession Development (CPD) bahagian dan Hospital Labuan.\r\n\r\n12. Memantau aktiviti Continous Profession Development (CPD) kakitangan Bahagian Perubatan JKWPL.'),
(19, 4, 'Unit Rekod Perubatan', 'Fungsi:\r\n1. Mengumpul dan memantau data-data statistik kesihatan\r\n\r\n2. Menyelaras pengurusan penubuhan Lembaga Perubatan\r\n\r\n3. Mengendalikan mesyuarat berkaitan Unit Rekod Perubatan\r\n\r\n4. Mengadakan latihan termasuk kursus, bengkel dan taklimat berkaitan rekod\r\n\r\n5. Mengendalikan penyediaan dan penerbitan Laporan Tahunan dan Health Facts\r\n\r\n6. Memantau pelaksanaan audit rekod mengikut garis panduannya dan ICD10 / ICD11.'),
(20, 5, 'Klinik Pergigian: \r\n  1. Klinik Pergigian WP Labuan (Klinik Kesihatan Labuan)\r\n  2. Klinik Pergigian UTC (UTC Labuan) \r\n      ', 'Fungsi: Fokus Kesihatan Pergigian Masyarakat adalah untuk mencegah karies gigi dan Kanser Mulut. Ini termasuk pemfluoridaan bekalan air awam, rawatan klinikal seperti rawatan sealan fisur bagi gigi geraham dan varnish fluorida, program pencegahan seperti aktiviti ceramah, latihan memberus gigi, role play dan pengesanan awal pra kanser dan kanser mulut\r\n\r\nPemfluoridaan: Pemfluoridaan bekalan air awam merupakan langkah pencegahan yang efektif yang dapat dinikmati oleh semua lapisan masyarakat sekiranya paras bekalan fluoride berada pada tahap optimum. Pemfluoridaan telah terbukti dapat mengurangkan kejadian karies gigi. Kerjasama perlu ditingkatkan dengan pihak Jabatan Bekalan Air serta Loji Swasta.\r\n\r\nSealan Fisur: Sealan Fisur merupakan satu aktiviti pencegahan yang dijalankan secara klinikal yang bertujuan bagi mencegah karies gigi. Dibawah aktiviti ini sealan fisur disapu pada liang dan fisur gigi geraham kekal dikalangan kanak-kanak yang berisiko mendapat karies gigi.\r\n\r\nKanser Mulut: Aktiviti pengesanan dan pencegahan awal prakanser dan kanser disasarkan kepada kumpulan yang berisiko. Tujuan aktiviti ini adalah untuk meningkatkan kesedaran tentang faktor-faktor yang menyebabkan kanser mulut . Aktiviti ini juga untuk mendidik individu bagi mengesan tanda-tanda awal gejala kanser mulut dan mendapatkan pemeriksaan bagi mengesan kanser awal mulut. Kanser yang dikesan pada peringkat awal berpotensi lebih baik untuk sembuh.'),
(21, 5, 'Klinik Kesihatan Pergigian Sekolah Rendah:\r\n  1. SK Pekan 1\r\n  2. SK Pekan 2\r\n  3. SJK (C) Chi Wen\r\n', 'Fungsi:\r\nPerkhidmatan Pergigian Toddler: Penjagaan Awal Kesihatan Pergigian diberi kepada kanak-kanak sejak lahir lagi. Objektif utama program kesihatan pergigian awal kanak-kanak adalah untuk menggalakkan dan mengekalkan kesihatan mulut yang baik ke arah mencapai pertumbuhan dan pembangunan optimum. Kanak-kanak yang diperiksa di Klinik Kesihatan Ibu dan Anak (KKIA) dan Klinik Desa (KD) akan dirujuk ke Klinik Pergigian untuk mendapat pemeriksaan. Jururawat Pergigian akan memberi tunjukajar penjagaan kesihatan mulut kepada ibubapa/penjaga kanak-kanak ini.\r\n\r\nPerkhidmatan Pergigian Prasekolah: Di bawah aktiviti ini, kanak-kanak prasekolah akan didedahkan melalui aktiviti promosi dan pencegahan. Ini termasuklah ceramah, sesi memberus gigi, pertunjukan boneka, ‘roleplay’ dan lain-lain aktiviti yang menyeronokkan. Pemeriksaan dan rawatan pergigian akan dilaksanakan selepas aktiviti pencegahan dijalankan.\r\n\r\nPerkhidmatan Pergigian Sekolah: Perkhidmatan pergigian sekolah rendah, menengah serta pra-sekolah dilaksana melalui perkhidmatan pergigian sekolah secara incremental yang sistematik dan menyeluruh supaya matlamat kesihatan gigi kanak-kanak tercapai sepenuhnya. Murid sekolah akan diperiksa dan dirawat di sekolah masing-masing. Perkhidmatan pergigian sekolah adalah termasuk kanak-kanak keperluan khas yang terdapat di sekolah masing-masing.\r\n\r\nPerkhidmatan Pergigian Ibu Mengandung: Matlamat utama aktiviti ini adalah untuk memberi pengetahuan kesihatan pergigian. Mereka diberi pemeriksaan dan rawatan pergigian secara percuma. Selain itu, ceramah juga dijalankan kepada kumpulan ini.\r\n\r\nPerkhidmatan Pergigian Kepada Pesakit Luar: Hanya satu sahaja Klinik Pergigian yang terdapat di Labuan. Klinik ini terletak di tingkat satu bangunan Klinik Kesihatan Labuan. Perkhidmatan pergigian di Klinik Pergigian Labuan dibuka setiap hari bekerja untuk pemeriksaan pergigian, penskaleran, tampalan gigi dan juga cabutan gigi. Bagi rawatan lain seperti gigi palsu, rawatan salur akar gigi, pembedahan kecil bagi gigi geraham bongsu terimpak dan lain-lain keadnormalan dalam mulut akan dibuat secara temujanji.\r\n\r\nPerkhidmatan Pergigian Untuk Golongan Keperluan Khas: Perkhidmatan dilaksanakan di semua Pusat Dalam Komuniti dan Pusat Mesra Komuniti yang terdapat di Labuan. Semua kanak-kanak ini diberi pemeriksaan dan rawatan setiap tahun. Selain itu, ceramah dan tunjukajar memberus gigi juga diberi kepada penjaga kanak-kanak ini.'),
(22, 5, 'Pasukan Pergigian Bergerak (PBB):\r\n  1. PPB Sekolah Rendah\r\n  2. PPB Sekolah Menengah\r\n  3. PPB Prasekolah', ''),
(23, 6, 'Seksyen Pematuhan Domestik', 'Memantau premis makanan dan pengambilan sampel makanan mengikut keperluan Program Keselamatan dan Kualiti Makanan Kebangsaan serta melaksanakan tindakan penguatkuasaan yang termaktub di bawah Akta Makanan 1983 dan Peraturan Makanan 1985 serta Peraturan- Peraturan Kebersihan Makanan 2009.\r\n\r\nOrganisasi: \r\n  1. Diketuai oleh Pegawai Kesihatan Persekitaran (PKP U42)\r\n  2. Penolong Pegawai Kesihatan Persekitaran (PPKPU36)\r\n  3. Penolong Pegawai Kesihatan Persekitaran (PPKPU32)\r\n  4. empat orang Penolong Pegawai Kesihatan Persekitaran (PPKPU29)\r\n  5. tiga Pembantu Kesihatan Awam ( U17).'),
(24, 6, 'Seksyen Pensijilan', 'Membantu dalam pelaksanaan program Pensijilan MeSTI ( Makanan Selamat Tanggungjawab Industri), Pelesenan Kilang Ais, Kilang Air Minuman Berbungkus (AMB) dan Pelesenan Mesin Jual Air yang wujud di Wilayah Persekutuan Labuan. Ini melibatkan juga pensijilan yang baru serta pembahruan kilang-kilang yang telah dilesenkan. Tambahan lagi pemberian khidmat nasihat mengenai proses pensijilan turut menjadi perkara yang penting.'),
(25, 6, 'Seksyen Pembangunan Industri dan Perkhidmatan Makanan', 'Membantu di dalam Pensijilan BeSS (Bersih, Selamat dan Sihat) bagi premis outlet makanan dan juga dalam pelaksanaan Kendiri bagi Sekolah dan Dapur Asrama. Aktiviti termasuk promosi dan latihan mengenai Program pensijilan BeSS dan Program Kendiri Sekolah serta pengkemaskinian rekod bagi aktiviti pensijilan ini.'),
(26, 6, 'Seksyen Import', 'Memantau, memberi maklumat, memeriksa konsainmen makanan dan mengambil sampel makanan import yang memasuki WP Labuan. Seksyen di ketuai oleh Pegawai Teknologi Makanan dan dianggotai oleh seorang orang Penolong Pegawai Kesihatan Persekitaran U29 dan seorang Pembantu Kesihatan Awam U17.\r\n\r\nOrganisasi: \r\n  1. Diketuai oleh Pegawai Teknologi Makanan\r\n  2. Penolong Pegawai Kesihatan Persekitaran U29\r\n  3. Pembantu Kesihatan Awam U17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bahagian`
--
ALTER TABLE `bahagian`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document_keywords`
--
ALTER TABLE `document_keywords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `document_id` (`document_id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `faq_keywords`
--
ALTER TABLE `faq_keywords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faq_id` (`faq_id`);

--
-- Indexes for table `keywords`
--
ALTER TABLE `keywords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bahagian_id` (`bahagian_id`);

--
-- Indexes for table `manuals`
--
ALTER TABLE `manuals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manuals_keywords`
--
ALTER TABLE `manuals_keywords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seksyen_unit`
--
ALTER TABLE `seksyen_unit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bahagian_id` (`bahagian_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bahagian`
--
ALTER TABLE `bahagian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `document_keywords`
--
ALTER TABLE `document_keywords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `faq_keywords`
--
ALTER TABLE `faq_keywords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `keywords`
--
ALTER TABLE `keywords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `manuals_keywords`
--
ALTER TABLE `manuals_keywords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `seksyen_unit`
--
ALTER TABLE `seksyen_unit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
