export interface LocationResult {
  mapUrl?: string;
  overrideMessage?: string;
}

export const getMapUrl = (userText: string): LocationResult => {
  const lowerText = userText.toLowerCase();

  // Check for moved clinics first
  if (lowerText.includes('kd bukit kalam') || lowerText.includes('klinik desa bukit kalam') || lowerText.includes('kd bebuloh') || lowerText.includes('klinik desa bebuloh')) {
    return { overrideMessage: "Maaf perkhidmatan klinik ini telah dipindahkan ke klinik desa yang berdekatan" };
  }

  if (lowerText.includes('lokasi') || lowerText.includes('di mana') || lowerText.includes('where is') || lowerText.includes('map') || lowerText.includes('mana') || lowerText.includes('peta')){
      if (lowerText.includes('hospital labuan')) {
        return { mapUrl: "https://www.google.com/maps?q=Hospital+Labuan&output=embed" };
      } 
      
      if (lowerText.includes('jabatan kesihatan labuan') || lowerText.includes('jkwpl')){
        return { mapUrl: "https://www.google.com/maps?q=Jabatan+Kesihatan+WP+Labuan&output=embed" };
      } 
      
      if (lowerText.includes('klinik kesihatan')) {
          if (lowerText.includes('utc')) {
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Kesihatan+UTC+Labuan&output=embed" };
          } 
          if (lowerText.includes('tg taras') || lowerText.includes('tanjung taras')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Kesihatan+WP+Labuan&output=embed" };
          } 
        return { mapUrl: "https://www.google.com/maps?q=Klinik+Kesihatan+Labuan&output=embed" };
      } 

      if (lowerText.includes('klinik komuniti')) {
        return { mapUrl: "https://www.google.com/maps?q=Klinik+Komuniti+Taman+Mutiara+Labuan&output=embed" };
      }

      if (lowerText.includes('klinik desa') || lowerText.includes('kd')){
          if (lowerText.includes('lajau')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Lajau&output=embed" };
          } 
          if (lowerText.includes('lubok temiang')|| lowerText.includes('lubuk')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Lubok+Temiang&output=embed" };
          } 
          if (lowerText.includes('layang-layangan') || lowerText.includes('layangan')){
            return { mapUrl: "https://www.google.com/maps?q=KLINIK+DESA+LAYANG-LAYANGAN&output=embed" };
          } 
          if (lowerText.includes('batu manikar')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Batu+Manikar&output=embed" };
          } 
          if (lowerText.includes('sungai lada') || lowerText.includes('sg. lada')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Sungai+Lada&output=embed" };
          }
           if (lowerText.includes('sungai keling') || lowerText.includes('sg. keling')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Sungai+Keling&output=embed" };
          } 
          if (lowerText.includes('rancha') || lowerText.includes('rancha-rancha')){
            return { mapUrl: "https://www.google.com/maps?q=Kampung+Rancha-Rancha+Rural+Clinic&output=embed" };
          } 
          if (lowerText.includes('tanjung aru') || lowerText.includes('tanjong aru') || lowerText.includes('tg. aru')){
            return { mapUrl: "https://www.google.com/maps?q=Klinik+Desa+Tanjong+Aru&output=embed" };
          } 
        return {};
      }
    }

  return {};
};