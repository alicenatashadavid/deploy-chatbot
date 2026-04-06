import { documents, DocumentInfo } from '../data/documents';
import { manuals } from '../data/manuals';

export interface ContentResult {
  previewUrl?: string;
  linkUrl?: string;
  overrideMessage?: string;
  documentList?: DocumentInfo[];
}

export const getContentResult = (userText: string): ContentResult => {
  const lowerText = userText.toLowerCase();

  // Combine documents and manuals for search
  const allDocs = [...documents, ...manuals];

  // 0. Handle specific FAQ requests that should take precedence (Highest Priority)
  if (lowerText.includes('waktu operasi') || lowerText.includes('jam operasi') || lowerText.includes('buka pukul berapa')) {
    return {
      overrideMessage: "Waktu operasi Klinik Kesihatan (KK) & Klinik Desa (KD) di Labuan adalah:\n\n1. KK WP Labuan (Tg. Taras) & Klinik Desa:\n- Isnin - Khamis: 8:00 AM - 5:00 PM (Rehat 1PM-2PM)\n- Jumaat: 8:00 AM - 5:00 PM (Rehat 12.15PM-2.45PM)\n- Sabtu/Ahad/Cuti Am: Tutup\n\n2. KK UTC Labuan:\n- Isnin - Ahad: 8:00 AM - 9:00 PM\n\nUntuk kecemasan selepas waktu pejabat, sila terus ke Unit Kecemasan Hospital Labuan (24 jam)."
    };
  }

  // 1. Check if user is asking for a specific document from the list
  const specificDoc = allDocs.find(doc => 
    doc.keywords.some(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      // Use word boundaries for keywords to avoid partial matches (e.g., 'urus' in 'pengurusan')
      const regex = new RegExp(`\\b${lowerKeyword}\\b`, 'i');
      return regex.test(lowerText);
    }) ||
    lowerText === doc.name.toLowerCase()
  );

  if (specificDoc) {
    const isOfficeDoc = specificDoc.url.match(/\.(doc|docx|xls|xlsx)$/i);
    
    if (isOfficeDoc) {
      return {
        linkUrl: specificDoc.url,
        overrideMessage: `Berikut adalah ${specificDoc.name}. Memandangkan ini adalah dokumen Microsoft Office, sila klik pautan di bawah untuk memuat turun atau membuka fail tersebut.`
      };
    }

    return {
      previewUrl: specificDoc.url,
      linkUrl: specificDoc.url,
      overrideMessage: `Berikut adalah ${specificDoc.name}. Anda boleh melihat pratonton di bawah atau klik pautan untuk maklumat lanjut.`
    };
  }

  // 2. Handle document list requests
  const documentKeywords = ['dokumen', 'muat turun', 'download', 'manual', 'garis panduan', 'borang'];
  const isGenericRequest = documentKeywords.some(kw => lowerText.includes(kw));
  
  if (isGenericRequest) {
    // Check for specific manual/guideline list request
    if (lowerText.includes('senarai manual') || lowerText.includes('garis panduan')) {
      return {
        overrideMessage: "Berikut adalah senarai Manual dan Garis Panduan yang boleh dimuat turun. Sila pilih dokumen yang anda perlukan:",
        documentList: manuals
      };
    }

    // Check for specific document/borang list request
    if (lowerText.includes('senarai dokumen') || lowerText.includes('borang')) {
      return {
        overrideMessage: "Berikut adalah senarai dokumen yang boleh dimuat turun. Sila pilih dokumen yang anda perlukan:",
        documentList: documents
      };
    }

    // If it's a generic request for documents/manuals/borang, show the list
    // Trigger if it's just the keyword, or if it contains 'senarai'
    const isListRequest = documentKeywords.some(kw => lowerText === kw) || lowerText.includes('senarai');
    
    if (isListRequest) {
      return {
        overrideMessage: "Berikut adalah senarai dokumen yang boleh dimuat turun. Sila pilih dokumen yang anda perlukan:",
        documentList: allDocs
      };
    }
  }

  if (lowerText.includes('carta organisasi') || lowerText.includes('organisational chart') || lowerText.includes('struktur organisasi')) {
    return {
      previewUrl: "https://jknlabuan.moh.gov.my/carta-jkn.html",
      linkUrl: "https://jknlabuan.moh.gov.my/carta-jkn.html",
      overrideMessage: "Berikut adalah carta organisasi Jabatan Kesihatan W.P. Labuan. Anda boleh melihat pratonton di bawah atau klik pautan untuk maklumat lanjut."
    };
  }

  if (lowerText.includes('sebut harga') || lowerText.includes('tender') || lowerText.includes('iklan')) {
    return {
      previewUrl: "https://jknlabuan.moh.gov.my/perolehan.html",
      linkUrl: "https://jknlabuan.moh.gov.my/perolehan.html",
      overrideMessage: "Berikut adalah iklan/keputusan bagi Sebutharga/Tender di Jabatan Kesihatan W.P. Labuan. Anda boleh melihat pratonton di bawah atau klik pautan untuk maklumat lanjut."
    };
  }

  if (lowerText.includes('permohonan') || lowerText.includes('cara mohon') || lowerText.includes('tempahan')  || lowerText.includes('book') || lowerText.includes('booking')){
      if (lowerText.includes('kenderaan')) {
        return {  
          previewUrl: "http://apps.jknlabuan.moh.gov.my/ekenderaan/design_interface/",
          linkUrl: "http://apps.jknlabuan.moh.gov.my/ekenderaan/design_interface/",
          overrideMessage: "Berikut adalah Sistem Permohonan Tempahan Kenderaan JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('bilik mesyuarat') || lowerText.includes('bilik meeting')) {
        return {  
          previewUrl: "http://apps.jknlabuan.moh.gov.my/mystem/mySTEMv1/index.php",
          linkUrl: "http://apps.jknlabuan.moh.gov.my/mystem/mySTEMv1/index.php",
          overrideMessage: "Berikut adalah Sistem Tempahan Bilik Mesyuarat / Bilik Latihan ICT JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('latihan industri')) {
        return {  
          previewUrl: "https://jknlabuan.moh.gov.my/latih-industri.html",
          linkUrl: "https://jknlabuan.moh.gov.my/latih-industri.html",
          overrideMessage: "Berikut adalah Proses Permohonan Menjalani Latihan Industri/ Klinikal di Fasiliti Kesihatan JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('bilik mesyuarat') || lowerText.includes('bilik meeting')) {
        return {  
          previewUrl: "http://apps.jknlabuan.moh.gov.my/mystem/mySTEMv1/index.php",
          linkUrl: "http://apps.jknlabuan.moh.gov.my/mystem/mySTEMv1/index.php",
          overrideMessage: "Berikut adalah Sistem Tempahan Bilik Mesyuarat / Bilik Latihan ICT JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('latihan industri')) {
        return {  
          previewUrl: "https://jknlabuan.moh.gov.my/latih-industri.html",
          linkUrl: "https://jknlabuan.moh.gov.my/latih-industri.html",
          overrideMessage: "Berikut adalah Proses Permohonan Menjalani Latihan Industri/ Klinikal di Fasiliti Kesihatan JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('latihan elektif')) {
        return {  
          previewUrl: "https://jknlabuan.moh.gov.my/latih-elektif.html",
          linkUrl: "https://jknlabuan.moh.gov.my/latih-elektif.html",
          overrideMessage: "Berikut adalah Proses Permohonan Menjalani Latihan Elektif bagi pelajar perubatan di JKWPL. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      
  }

  if (lowerText.includes('laman web') || lowerText.includes('portal') || lowerText.includes('sistem')  || lowerText.includes('website') || lowerText.includes('booklet')){
      if (lowerText.includes('epsa') || lowerText.includes('e-pembelajaran') || lowerText.includes('kursus online')) {
        return {  
          previewUrl: "https://www.epsa.gov.my/course/",
          linkUrl: "https://www.epsa.gov.my/course/",
          overrideMessage: "Berikut adalah Portal E-Pembelajaran Sektor Awam. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('cpd') || lowerText.includes('continuing professional development') || lowerText.includes('professional development')) {
        return {  
          previewUrl: "https://www.mycpd2.moh.gov.my/default.aspx",
          linkUrl: "https://www.mycpd2.moh.gov.my/default.aspx",
          overrideMessage: "Berikut adalah Portal myCPD. Anda boleh klik pautan untuk maklumat lanjut."};
      }
      if (lowerText.includes('hrmis') || lowerText.includes('pengurusan sumber manusia') || lowerText.includes('hr')) {
        return {  
          previewUrl: "https://www.eghrmis.gov.my/",
          linkUrl: "https://www.eghrmis.gov.my/",
          overrideMessage: "Berikut adalah Portal E-Pembelajaran Sektor Awam. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('1data') || lowerText.includes('program 1data') || lowerText.includes('one data') || lowerText.includes('program onedata')) {
        return {  
          previewUrl: "http://apps.jknlabuan.moh.gov.my/onedata/index.php#team",
          linkUrl: "http://apps.jknlabuan.moh.gov.my/onedata/index.php#team",
          overrideMessage: "Berikut adalah Sistem 1Data JKWPL. Anda boleh klik pautan untuk maklumat lanjut."};
      }
      if (lowerText.includes('vl') || lowerText.includes('virtual library')) {
        return {  
          previewUrl: "https://vlib.ovidds.com/pages/6643/vl_portal",
          linkUrl: "https://vlib.ovidds.com/pages/6643/vl_portal",
          overrideMessage: "Berikut adalah Portal Virtual Library. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('penyata gaji') || lowerText.includes('e-penyata gaji') || lowerText.includes('gaji')) {
        return {  
          previewUrl: "https://epenyatagaji-laporan.anm.gov.my/Layouts/Login/Login.aspx",
          linkUrl: "https://epenyatagaji-laporan.anm.gov.my/Layouts/Login/Login.aspx",
          overrideMessage: "Berikut adalah Portal myCPD. Anda boleh klik pautan untuk maklumat lanjut."};
      }
      if (lowerText.includes('eperolehan') || lowerText.includes('ep')) {
        return {  
          previewUrl: "https://www.eperolehan.gov.my/web/guest/home",
          linkUrl: "https://www.eperolehan.gov.my/web/guest/home",
          overrideMessage: "Berikut adalah Portal EPerolehan Malaysia. Anda boleh klik pautan untuk maklumat lanjut." };
      }
      if (lowerText.includes('sispaa') || lowerText.includes('aduan')) {
        return {  
          previewUrl: "https://moh.spab.gov.my/eApps/sdmscasepool/SdmsCasePool/add.do",
          linkUrl: "https://moh.spab.gov.my/eApps/sdmscasepool/SdmsCasePool/add.do",
          overrideMessage: "Berikut adalah Sistem Pengurusan Aduan Awam (SisPAA) KKM. Anda boleh klik pautan untuk maklumat lanjut." };
      }
  }

  if (lowerText.includes('caj') || lowerText.includes('caj rawatan') || lowerText.includes('cas')  || lowerText.includes('harga rawatan')){
    return {  
      previewUrl: "https://jknlabuan.moh.gov.my/caj.html",
      linkUrl: "https://jknlabuan.moh.gov.my/caj.html",
      overrideMessage: "Berikut merupakan Caj Rawatan Warganegara JKWPL. Anda boleh klik pautan untuk maklumat lanjut."};
  }
  
  if (lowerText.includes('merokok') || lowerText.includes('larangan merokok') || lowerText.includes('kawasan larangan')  || lowerText.includes('harga rawatan')){
    return {  
      previewUrl: "https://jknlabuan.moh.gov.my/rokok.html",
      linkUrl: "https://jknlabuan.moh.gov.my/rokok.html",
      overrideMessage: "Berikut merupakan kawasan larangan merokok dan tindakan yang akan dikenakan. Anda boleh klik pautan untuk maklumat lanjut."};
  }

  return {};
};
