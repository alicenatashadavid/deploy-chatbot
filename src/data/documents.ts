export interface DocumentInfo {
  id: string;
  name: string;
  keywords: string[];
  url: string;
  description: string;
}

export const documents: DocumentInfo[] = [
  {
    id: 'brg-psh',
    name: 'Permohonan Jawatan Pekerja Sambilan Harian',
    keywords: ['pekerja sambilan', 'part-time', 'partime'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/awam/borang-PSH-Jabatan-Kesihatan-WP-Labuan.pdf',
    description: 'Borang permohonan jawatan pekerja sambilan harian Jabatan Kesihatan W.P. Labuan.'
  },
  {
    id: 'brg-li',
    name: 'Permohonan Menjalani Latihan Industri/ Klinikal Di Fasiliti Kesihatan JKWPL',
    keywords: ['li', 'Latihan Industri'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang-permohonan-latihan-Industri-atau-klinikal.pdf',
    description: 'Borang permohonan menjalani latihan industri / klinikal di fasiliti kesihatan Jabatan Kesihatan W.P. Labuan.'
  },
  {
    id: 'brg-plr',
    name: 'Permohonan Baru Lesen Racun Jenis ABE Permit NaOH',
    keywords: ['baru'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang%20Permohonan%20Baru%20Lesen%20Racun%20Jenis%20ABE%20Permit%20NaOH.pdf',
    description: 'Borang permohonan lesen racun jenis A / B / E /permit natrium hidroksida (NaOH).'
  },
  {
    id: 'appb-le',
    name: 'Permohonan Menjalani Posting Elektif Di Fasiliti KKM (LAMPIRAN B)',
    keywords: ['le', 'elektif', 'latihan elektif'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/awam/Appendix-B-BORANG-PERMOHON-MENJALANI-POSTING-ELEKTIF.pdf',
    description: 'Borang permohonan menjalani posting elektif di fasiliti KKM.'
  },
  {
    id: 'brg-pmmlr',
    name: ' Permohonan Memperbaharui atau Meminda Butiran bagi Lesen Racun Jenis ABE Permit NaOH',
    keywords: ['meminda butiran'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/awam/Borang%20Permohonan%20Memperbaharui%20atau%20Meminda%20Butiran%20bagi%20Lesen%20Racun%20Jenis%20ABE%20Permit%20NaOH.pdf',
    description: 'Borang permohonan memperbaharui atau meminda butiran bagi lesen racun jenis A/B/E/permit natrium hidroksida (NaOH).'
  },
  {
    id: 'brg-trlp',
    name: 'Permohonan Kelulusan Untuk Menjalankan Tugas Rasmi Di Luar Ibu Pejabat',
    keywords: ['tugas', 'luar pejabat'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/KELULUSAN%20UNTUK%20MENJALANKAN%20TUGAS%20RASMI%20DI%20LUAR%20IBU%20PEJABAT.doc',
    description: 'Borang permohonan hendaklah dipohon 3 hari sebelum memulakan perjalanan.'
  },
  {
    id: 'brg-pwmib',
    name: 'Pengisytiharan Wilayah Menetap Ibu Bapa -LAMPIRAN II',
    keywords: ['pengisytiharan', 'ibu bapa', 'menetap'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Istihar-Wilayah-ibubapa-menetap.pdf',
    description: 'Borang pengisytiharan wilayah menetap ibu bapa.'
  },
  {
    id: 'brg-aksr',
    name: 'Pemantauan Latihan JKWPL',
    keywords: ['daftar', 'latihan', 'sukan'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BORANG_AHLI_KSR_JKWPL.xlsx',
    description: 'Borang pendaftaran ahli kelab sukan & rekreasi JKWPL.'
  },
  {
    id: 'brg-tzw',
    name: 'Permohonan Kemudahan Tambang Ziarah Wilayah',
    keywords: ['tambang', 'ziarah', 'kemudahan tambang ziarah'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BorangTMWAversi22025.pdf',
    description: 'Senarai semak permohonan kemudahan tambahan ziarah wilayah (TZW) JKWPL.'
  },
  {
    id: 'brg-pnm-lo',
    name: 'Permohonan Nota Minta- LO',
    keywords: ['LO'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-01-Borang_Permohonan_Nota_Minta_LO.xlsx',
    description: 'Borang permohonan nota minta (Bekalan / Perkhidmatan) (Local purchase).'
  },
  {
    id: 'brg-pnmk',
    name: 'Permohonan Perolehan Nota Minta Kontrak',
    keywords: ['perolehan'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-02_BORANG_PERMOHONAN_PEROLEHAN_NOTA_MINTA_KONTRAK.xls',
    description: 'Borang permohonan nota minta (Kontrak Kementerian / Pusat / Jabatan / APPL).'
  },
  {
    id: 'brg-PePPT',
    name: 'Permohonan Pergerakan eP Pembelian Terus',
    keywords: ['beli terus', 'terus'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-04_Borang_pergerakan_eP_Pembelian_Terus.xls',
    description: 'Borang permohonan pergerakan pembelian terus perkhidmatan / produk.'
  },
  {
    id: 'brg-PePK',
    name: 'Permohonan Pergerakan eP Kontrak',
    keywords: ['ep kontrak'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BK-S9-03_Borang_Pergerakan_eP_Contract.xls',
    description: 'Borang permohonan pergerakan kontrak perkhidmatan / produk.'
  },
  {
    id: 'brg-ppk',
    name: 'Permohonan Pinjaman Kewangan',
    keywords: ['pinjaman', 'loan', 'pinjaman kewangan'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Borang_Pinjaman_Kewangan-semakan3%201.xls',
    description: 'Borang permohonan pinjaman kewangan.'
  },
  {
    id: 'brg-akp',
    name: 'Aduan Kerosakan dan Pemantauan',
    keywords: ['kerosakan'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BorangAduanKerosakandanPemantauan.pdf',
    description: 'Borang aduan kerosakan dan pemantauan seksyen kejuruteraan/ICT.'
  },
  {
    id: 'brg-paem',
    name: 'Pengurusan Akaun Emel- MyGovUC',
    keywords: ['pengurusan emel', 'akaun email', 'mygovuc'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/borang-pengurusan-akaun-MyGovUC_2022.pdf',
    description: 'Borang pengurusan email MyGovUC.'
  },
  {
    id: 'brg-pphssm',
    name: 'Reten Penilaian Penyajian Hidangan Sihat Semasa Mesyuarat',
    keywords: ['reten', 'sajian', 'hidangan sihat'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/Reten_PHSSM.xls',
    description: 'Borang penilaian penyajian hidangan sihat semasa mesyuarat.'
  },
  {
    id: 'brg-ahk',
    name: 'Aduan Hazard dan Keselamatan JKWPL',
    keywords: ['hazard'],
    url: 'https://jknlabuan.moh.gov.my/assets/borang/jkwpl/BORANG-ADUAN-HAZARD.pdf',
    description: 'Borang aduan hazard keselamatan dan kesihatan JKWPL.'
  },
  {
    id: 'brg-lokum',
    name: ' Permohonan Menjalankan Pekerjaan Luar (LOKUM) JKWPL',
    keywords: ['kerja luar', 'lokum'],
    url: 'https://jknlabuan.moh.gov.my/assets/garis-panduan/BorangPermohonanLokum2025v2.pdf',
    description: 'Borang permohonan menjalankan pekerjaan luar (LOKUM) JKWPL.'
  }
];
