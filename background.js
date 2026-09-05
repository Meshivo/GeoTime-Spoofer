// PRESET PROFILES: Huge database of global locations mapping Timezone to GPS and Locale
const PROFILES = {
  // --- NORTH AMERICA ---
  "America/New_York": { timezone: "America/New_York", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 40.7128, lon: -74.0060 },
  "America/Chicago": { timezone: "America/Chicago", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 41.8781, lon: -87.6298 },
  "America/Denver": { timezone: "America/Denver", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 39.7392, lon: -104.9903 },
  "America/Los_Angeles": { timezone: "America/Los_Angeles", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 34.0522, lon: -118.2437 },
  "America/Phoenix": { timezone: "America/Phoenix", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 33.4484, lon: -112.0740 },
  "America/Detroit": { timezone: "America/Detroit", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 42.3314, lon: -83.0458 },
  "America/Miami": { timezone: "America/New_York", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 25.7617, lon: -80.1918 },
  "America/Anchorage": { timezone: "America/Anchorage", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 61.2181, lon: -149.9003 },
  "Pacific/Honolulu": { timezone: "Pacific/Honolulu", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 21.3069, lon: -157.8583 },
  "America/Toronto": { timezone: "America/Toronto", locale: "en-CA", acceptLanguage: "en-CA,en;q=0.9", lat: 43.6510, lon: -79.3470 },
  "America/Vancouver": { timezone: "America/Vancouver", locale: "en-CA", acceptLanguage: "en-CA,en;q=0.9", lat: 49.2827, lon: -123.1207 },
  "America/Montreal": { timezone: "America/Montreal", locale: "fr-CA", acceptLanguage: "fr-CA,fr;q=0.9,en;q=0.8", lat: 45.5017, lon: -73.5673 },
  "America/Mexico_City": { timezone: "America/Mexico_City", locale: "es-MX", acceptLanguage: "es-MX,es;q=0.9,en;q=0.8", lat: 19.4326, lon: -99.1332 },

  // --- CENTRAL & SOUTH AMERICA ---
  "America/Guatemala": { timezone: "America/Guatemala", locale: "es-GT", acceptLanguage: "es-GT,es;q=0.9,en;q=0.8", lat: 14.6349, lon: -90.5069 },
  "America/Panama": { timezone: "America/Panama", locale: "es-PA", acceptLanguage: "es-PA,es;q=0.9,en;q=0.8", lat: 8.9824, lon: -79.5199 },
  "America/Bogota": { timezone: "America/Bogota", locale: "es-CO", acceptLanguage: "es-CO,es;q=0.9,en;q=0.8", lat: 4.7110, lon: -74.0721 },
  "America/Lima": { timezone: "America/Lima", locale: "es-PE", acceptLanguage: "es-PE,es;q=0.9,en;q=0.8", lat: -12.0464, lon: -77.0428 },
  "America/Caracas": { timezone: "America/Caracas", locale: "es-VE", acceptLanguage: "es-VE,es;q=0.9,en;q=0.8", lat: 10.4806, lon: -66.9036 },
  "America/Santiago": { timezone: "America/Santiago", locale: "es-CL", acceptLanguage: "es-CL,es;q=0.9,en;q=0.8", lat: -33.4489, lon: -70.6693 },
  "America/Buenos_Aires": { timezone: "America/Buenos_Aires", locale: "es-AR", acceptLanguage: "es-AR,es;q=0.9,en;q=0.8", lat: -34.6037, lon: -58.3816 },
  "America/Sao_Paulo": { timezone: "America/Sao_Paulo", locale: "pt-BR", acceptLanguage: "pt-BR,pt;q=0.9,en;q=0.8", lat: -23.5505, lon: -46.6333 },
  "America/Rio_de_Janeiro": { timezone: "America/Sao_Paulo", locale: "pt-BR", acceptLanguage: "pt-BR,pt;q=0.9,en;q=0.8", lat: -22.9068, lon: -43.1729 },
  "America/Montevideo": { timezone: "America/Montevideo", locale: "es-UY", acceptLanguage: "es-UY,es;q=0.9,en;q=0.8", lat: -34.9011, lon: -56.1645 },

  // --- WESTERN & CENTRAL EUROPE ---
  "Europe/London": { timezone: "Europe/London", locale: "en-GB", acceptLanguage: "en-GB,en;q=0.9", lat: 51.5074, lon: -0.1278 },
  "Europe/Dublin": { timezone: "Europe/Dublin", locale: "en-IE", acceptLanguage: "en-IE,en;q=0.9", lat: 53.3498, lon: -6.2603 },
  "Europe/Paris": { timezone: "Europe/Paris", locale: "fr-FR", acceptLanguage: "fr-FR,fr;q=0.9,en;q=0.8", lat: 48.8566, lon: 2.3522 },
  "Europe/Brussels": { timezone: "Europe/Brussels", locale: "nl-BE", acceptLanguage: "nl-BE,nl;q=0.9,fr;q=0.8,en;q=0.7", lat: 50.8503, lon: 4.3517 },
  "Europe/Amsterdam": { timezone: "Europe/Amsterdam", locale: "nl-NL", acceptLanguage: "nl-NL,nl;q=0.9,en;q=0.8", lat: 52.3676, lon: 4.9041 },
  "Europe/Berlin": { timezone: "Europe/Berlin", locale: "de-DE", acceptLanguage: "de-DE,de;q=0.9,en;q=0.8", lat: 52.5200, lon: 13.4050 },
  "Europe/Zurich": { timezone: "Europe/Zurich", locale: "de-CH", acceptLanguage: "de-CH,de;q=0.9,en;q=0.8", lat: 47.3769, lon: 8.5417 },
  "Europe/Vienna": { timezone: "Europe/Vienna", locale: "de-AT", acceptLanguage: "de-AT,de;q=0.9,en;q=0.8", lat: 48.2082, lon: 16.3738 },
  "Europe/Luxembourg": { timezone: "Europe/Luxembourg", locale: "fr-LU", acceptLanguage: "fr-LU,fr;q=0.9,de;q=0.8,en;q=0.7", lat: 49.6116, lon: 6.1319 },

  // --- SOUTHERN & EASTERN EUROPE ---
  "Europe/Madrid": { timezone: "Europe/Madrid", locale: "es-ES", acceptLanguage: "es-ES,es;q=0.9,en;q=0.8", lat: 40.4168, lon: -3.7038 },
  "Europe/Lisbon": { timezone: "Europe/Lisbon", locale: "pt-PT", acceptLanguage: "pt-PT,pt;q=0.9,en;q=0.8", lat: 38.7223, lon: -9.1393 },
  "Europe/Rome": { timezone: "Europe/Rome", locale: "it-IT", acceptLanguage: "it-IT,it;q=0.9,en;q=0.8", lat: 41.9028, lon: 12.4964 },
  "Europe/Athens": { timezone: "Europe/Athens", locale: "el-GR", acceptLanguage: "el-GR,el;q=0.9,en;q=0.8", lat: 37.9838, lon: 23.7275 },
  "Europe/Warsaw": { timezone: "Europe/Warsaw", locale: "pl-PL", acceptLanguage: "pl-PL,pl;q=0.9,en;q=0.8", lat: 52.2297, lon: 21.0122 },
  "Europe/Prague": { timezone: "Europe/Prague", locale: "cs-CZ", acceptLanguage: "cs-CZ,cs;q=0.9,en;q=0.8", lat: 50.0755, lon: 14.4378 },
  "Europe/Budapest": { timezone: "Europe/Budapest", locale: "hu-HU", acceptLanguage: "hu-HU,hu;q=0.9,en;q=0.8", lat: 47.4979, lon: 19.0402 },
  "Europe/Bucharest": { timezone: "Europe/Bucharest", locale: "ro-RO", acceptLanguage: "ro-RO,ro;q=0.9,en;q=0.8", lat: 44.4323, lon: 26.1063 },
  "Europe/Sofia": { timezone: "Europe/Sofia", locale: "bg-BG", acceptLanguage: "bg-BG,bg;q=0.9,en;q=0.8", lat: 42.6977, lon: 23.3219 },
  "Europe/Zagreb": { timezone: "Europe/Zagreb", locale: "hr-HR", acceptLanguage: "hr-HR,hr;q=0.9,en;q=0.8", lat: 45.8150, lon: 15.9819 },
  "Europe/Belgrade": { timezone: "Europe/Belgrade", locale: "sr-RS", acceptLanguage: "sr-RS,sr;q=0.9,en;q=0.8", lat: 44.7866, lon: 20.4489 },

  // --- NORDIC & BALTIC COUNTRIES ---
  "Europe/Stockholm": { timezone: "Europe/Stockholm", locale: "sv-SE", acceptLanguage: "sv-SE,sv;q=0.9,en;q=0.8", lat: 59.3293, lon: 18.0686 },
  "Europe/Oslo": { timezone: "Europe/Oslo", locale: "nb-NO", acceptLanguage: "nb-NO,no;q=0.9,en;q=0.8", lat: 59.9139, lon: 10.7522 },
  "Europe/Copenhagen": { timezone: "Europe/Copenhagen", locale: "da-DK", acceptLanguage: "da-DK,da;q=0.9,en;q=0.8", lat: 55.6761, lon: 12.5683 },
  "Europe/Helsinki": { timezone: "Europe/Helsinki", locale: "fi-FI", acceptLanguage: "fi-FI,fi;q=0.9,en;q=0.8", lat: 60.1699, lon: 24.9384 },
  "Europe/Reykjavik": { timezone: "Atlantic/Reykjavik", locale: "is-IS", acceptLanguage: "is-IS,is;q=0.9,en;q=0.8", lat: 64.1466, lon: -21.9426 },
  "Europe/Tallinn": { timezone: "Europe/Tallinn", locale: "et-EE", acceptLanguage: "et-EE,et;q=0.9,en;q=0.8", lat: 59.4370, lon: 24.7535 },
  "Europe/Riga": { timezone: "Europe/Riga", locale: "lv-LV", acceptLanguage: "lv-LV,lv;q=0.9,en;q=0.8", lat: 56.9496, lon: 24.1052 },
  "Europe/Vilnius": { timezone: "Europe/Vilnius", locale: "lt-LT", acceptLanguage: "lt-LT,lt;q=0.9,en;q=0.8", lat: 54.6872, lon: 25.2797 },

  // --- EASTERN EUROPE & EURASIA ---
  "Europe/Moscow": { timezone: "Europe/Moscow", locale: "ru-RU", acceptLanguage: "ru-RU,ru;q=0.9,en;q=0.8", lat: 55.7558, lon: 37.6173 },
  "Europe/Istanbul": { timezone: "Europe/Istanbul", locale: "tr-TR", acceptLanguage: "tr-TR,tr;q=0.9,en;q=0.8", lat: 41.0082, lon: 28.9784 },
  "Europe/Kyiv": { timezone: "Europe/Kyiv", locale: "uk-UA", acceptLanguage: "uk-UA,uk;q=0.9,en;q=0.8", lat: 50.4501, lon: 30.5234 },
  "Asia/Tbilisi": { timezone: "Asia/Tbilisi", locale: "ka-GE", acceptLanguage: "ka-GE,ka;q=0.9,en;q=0.8", lat: 41.7151, lon: 44.8271 },
  "Asia/Yerevan": { timezone: "Asia/Yerevan", locale: "hy-AM", acceptLanguage: "hy-AM,hy;q=0.9,en;q=0.8", lat: 40.1792, lon: 44.4991 },
  "Asia/Baku": { timezone: "Asia/Baku", locale: "az-AZ", acceptLanguage: "az-AZ,az;q=0.9,en;q=0.8", lat: 40.4093, lon: 49.8671 },

  // --- MIDDLE EAST ---
  "Asia/Dubai": { timezone: "Asia/Dubai", locale: "ar-AE", acceptLanguage: "ar-AE,ar;q=0.9,en;q=0.8", lat: 25.2048, lon: 55.2708 },
  "Asia/Riyadh": { timezone: "Asia/Riyadh", locale: "ar-SA", acceptLanguage: "ar-SA,ar;q=0.9,en;q=0.8", lat: 24.7136, lon: 46.6753 },
  "Asia/Doha": { timezone: "Asia/Qatar", locale: "ar-QA", acceptLanguage: "ar-QA,ar;q=0.9,en;q=0.8", lat: 25.2854, lon: 51.5310 },
  "Asia/Muscat": { timezone: "Asia/Muscat", locale: "ar-OM", acceptLanguage: "ar-OM,ar;q=0.9,en;q=0.8", lat: 23.5880, lon: 58.3829 },
  "Asia/Kuwait": { timezone: "Asia/Kuwait", locale: "ar-KW", acceptLanguage: "ar-KW,ar;q=0.9,en;q=0.8", lat: 29.3759, lon: 47.9774 },
  "Asia/Bahrain": { timezone: "Asia/Bahrain", locale: "ar-BH", acceptLanguage: "ar-BH,ar;q=0.9,en;q=0.8", lat: 26.2285, lon: 50.5860 },
  "Asia/Amman": { timezone: "Asia/Amman", locale: "ar-JO", acceptLanguage: "ar-JO,ar;q=0.9,en;q=0.8", lat: 31.9454, lon: 35.9284 },
  "Asia/Beirut": { timezone: "Asia/Beirut", locale: "ar-LB", acceptLanguage: "ar-LB,ar;q=0.9,en;q=0.8", lat: 33.8938, lon: 35.5018 },
  "Asia/Tehran": { timezone: "Asia/Tehran", locale: "fa-IR", acceptLanguage: "fa-IR,fa;q=0.9,en;q=0.8", lat: 35.6892, lon: 51.3890 },

  // --- ASIA PACIFIC & SOUTH ASIA ---
  "Asia/Mumbai": { timezone: "Asia/Kolkata", locale: "hi-IN", acceptLanguage: "hi-IN,hi;q=0.9,en-US;q=0.8,en;q=0.7", lat: 19.0760, lon: 72.8777 },
  "Asia/New_Delhi": { timezone: "Asia/Kolkata", locale: "hi-IN", acceptLanguage: "hi-IN,hi;q=0.9,en-US;q=0.8,en;q=0.7", lat: 28.6139, lon: 77.2090 },
  "Asia/Dhaka": { timezone: "Asia/Dhaka", locale: "bn-BD", acceptLanguage: "bn-BD,bn;q=0.9,en;q=0.8", lat: 23.8103, lon: 90.4125 },
  "Asia/Colombo": { timezone: "Asia/Colombo", locale: "si-LK", acceptLanguage: "si-LK,si;q=0.9,en;q=0.8", lat: 6.9271, lon: 79.8612 },
  "Asia/Karachi": { timezone: "Asia/Karachi", locale: "ur-PK", acceptLanguage: "ur-PK,ur;q=0.9,en;q=0.8", lat: 24.8607, lon: 67.0011 },
  "Asia/Kathmandu": { timezone: "Asia/Kathmandu", locale: "ne-NP", acceptLanguage: "ne-NP,ne;q=0.9,en;q=0.8", lat: 27.7172, lon: 85.3240 },
  "Asia/Almaty": { timezone: "Asia/Almaty", locale: "kk-KZ", acceptLanguage: "kk-KZ,kk;q=0.9,ru;q=0.8,en;q=0.7", lat: 43.2220, lon: 76.8512 },
  "Asia/Tashkent": { timezone: "Asia/Tashkent", locale: "uz-UZ", acceptLanguage: "uz-UZ,uz;q=0.9,ru;q=0.8,en;q=0.7", lat: 41.2995, lon: 69.2401 },

  // --- EAST & SOUTHEAST ASIA ---
  "Asia/Bangkok": { timezone: "Asia/Bangkok", locale: "th-TH", acceptLanguage: "th-TH,th;q=0.9,en;q=0.8", lat: 13.7563, lon: 100.5018 },
  "Asia/Jakarta": { timezone: "Asia/Jakarta", locale: "id-ID", acceptLanguage: "id-ID,id;q=0.9,en;q=0.8", lat: -6.2088, lon: 106.8456 },
  "Asia/Singapore": { timezone: "Asia/Singapore", locale: "en-SG", acceptLanguage: "en-SG,en;q=0.9", lat: 1.3521, lon: 103.8198 },
  "Asia/Kuala_Lumpur": { timezone: "Asia/Kuala_Lumpur", locale: "ms-MY", acceptLanguage: "ms-MY,ms;q=0.9,en;q=0.8", lat: 3.1390, lon: 101.6869 },
  "Asia/Tokyo": { timezone: "Asia/Tokyo", locale: "ja-JP", acceptLanguage: "ja-JP,ja;q=0.9,en;q=0.8", lat: 35.6762, lon: 139.6503 },
  "Asia/Osaka": { timezone: "Asia/Tokyo", locale: "ja-JP", acceptLanguage: "ja-JP,ja;q=0.9,en;q=0.8", lat: 34.6937, lon: 135.5023 },
  "Asia/Seoul": { timezone: "Asia/Seoul", locale: "ko-KR", acceptLanguage: "ko-KR,ko;q=0.9,en;q=0.8", lat: 37.5665, lon: 126.9780 },
  "Asia/Shanghai": { timezone: "Asia/Shanghai", locale: "zh-CN", acceptLanguage: "zh-CN,zh;q=0.9,en;q=0.8", lat: 31.2304, lon: 121.4737 },
  "Asia/Beijing": { timezone: "Asia/Shanghai", locale: "zh-CN", acceptLanguage: "zh-CN,zh;q=0.9,en;q=0.8", lat: 39.9042, lon: 116.4074 },
  "Asia/Hong_Kong": { timezone: "Asia/Hong_Kong", locale: "zh-HK", acceptLanguage: "zh-HK,zh;q=0.9,en;q=0.8", lat: 22.3193, lon: 114.1694 },
  "Asia/Taipei": { timezone: "Asia/Taipei", locale: "zh-TW", acceptLanguage: "zh-TW,zh;q=0.9,en;q=0.8", lat: 25.0330, lon: 121.5654 },
  "Asia/Ho_Chi_Minh": { timezone: "Asia/Ho_Chi_Minh", locale: "vi-VN", acceptLanguage: "vi-VN,vi;q=0.9,en;q=0.8", lat: 21.0285, lon: 105.8542 },
  "Asia/Manila": { timezone: "Asia/Manila", locale: "en-PH", acceptLanguage: "en-PH,en;q=0.9", lat: 14.5995, lon: 120.9842 },
  "Asia/Phnom_Penh": { timezone: "Asia/Phnom_Penh", locale: "km-KH", acceptLanguage: "km-KH,km;q=0.9,en;q=0.8", lat: 11.5564, lon: 104.9282 },

  // --- AUSTRALIA & OCEANIA ---
  "Australia/Sydney": { timezone: "Australia/Sydney", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -33.8688, lon: 151.2093 },
  "Australia/Melbourne": { timezone: "Australia/Melbourne", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -37.8136, lon: 144.9631 },
  "Australia/Brisbane": { timezone: "Australia/Brisbane", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -27.4705, lon: 153.0260 },
  "Australia/Perth": { timezone: "Australia/Perth", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -31.9505, lon: 115.8605 },
  "Pacific/Auckland": { timezone: "Pacific/Auckland", locale: "en-NZ", acceptLanguage: "en-NZ,en;q=0.9", lat: -36.8485, lon: 174.7633 },
  "Pacific/Fiji": { timezone: "Pacific/Fiji", locale: "en-FJ", acceptLanguage: "en-FJ,en;q=0.9", lat: -18.1416, lon: 178.4419 },

  // --- AFRICA ---
  "Africa/Cairo": { timezone: "Africa/Cairo", locale: "ar-EG", acceptLanguage: "ar-EG,ar;q=0.9,en;q=0.8", lat: 30.0444, lon: 31.2357 },
  "Africa/Casablanca": { timezone: "Africa/Casablanca", locale: "ar-MA", acceptLanguage: "ar-MA,fr-MA;q=0.9,en;q=0.8", lat: 33.5731, lon: -7.5898 },
  "Africa/Tunis": { timezone: "Africa/Tunis", locale: "ar-TN", acceptLanguage: "ar-TN,fr-TN;q=0.9,en;q=0.8", lat: 36.8065, lon: 10.1815 },
  "Africa/Lagos": { timezone: "Africa/Lagos", locale: "en-NG", acceptLanguage: "en-NG,en;q=0.9", lat: 6.5244, lon: 3.3792 },
  "Africa/Johannesburg": { timezone: "Africa/Johannesburg", locale: "en-ZA", acceptLanguage: "en-ZA,en;q=0.9", lat: -26.2041, lon: 28.0473 },
  "Africa/Nairobi": { timezone: "Africa/Nairobi", locale: "sw-KE", acceptLanguage: "sw-KE,sw;q=0.9,en;q=0.8", lat: -1.2921, lon: 36.8219 },
  "Africa/Addis_Ababa": { timezone: "Africa/Addis_Ababa", locale: "am-ET", acceptLanguage: "am-ET,am;q=0.9,en;q=0.8", lat: 9.0300, lon: 38.7400 },
  "Africa/Accra": { timezone: "Africa/Accra", locale: "en-GH", acceptLanguage: "en-GH,en;q=0.9", lat: 5.6037, lon: -0.1870 }
};

// Main function to apply all overrides safely via Chrome DevTools Protocol
function applyProfileToTab(tabId, timezoneKey, completionCallback) {
  if (!timezoneKey || !tabId || tabId < 0) {
    if (completionCallback) completionCallback();
    return;
  }
  
  const profile = PROFILES[timezoneKey];
  if (!profile) {
    if (completionCallback) completionCallback();
    return;
  }

  const targetDebuggee = { tabId: tabId };

  chrome.debugger.detach(targetDebuggee, () => {
    chrome.runtime.lastError; 

    chrome.debugger.attach(targetDebuggee, "1.3", () => {
      if (chrome.runtime.lastError) {
        if (completionCallback) completionCallback();
        return; 
      }

      chrome.debugger.sendCommand(targetDebuggee, "Emulation.setTimezoneOverride", {
        timezoneId: profile.timezone 
      }, () => {
        chrome.runtime.lastError;
        
        chrome.debugger.sendCommand(targetDebuggee, "Emulation.setLocaleOverride", {
          locale: profile.locale 
        }, () => {
          chrome.runtime.lastError;

          chrome.debugger.sendCommand(targetDebuggee, "Emulation.setGeolocationOverride", {
            latitude: profile.lat,
            longitude: profile.lon,
            accuracy: 10
          }, () => {
            chrome.runtime.lastError;

            chrome.debugger.sendCommand(targetDebuggee, "Network.setUserAgentOverride", {
              userAgent: navigator.userAgent,
              acceptLanguage: profile.acceptLanguage 
            }, () => {
              chrome.runtime.lastError;

              chrome.storage.local.get(['enableHashSpoof'], (data) => {
                if (data.enableHashSpoof === false) {
                  if (completionCallback) completionCallback();
                  return;
                }

                // Inject anti-fingerprinting script via CDP into MAIN world before any script executes
                const injectionCode = `
                  (function() {
                    try {
                      if (navigator.brave) {
                        delete Object.getPrototypeOf(navigator).brave;
                      }
                    } catch(e) {}

                    try {
                      const spoofVendor = (target) => {
                        const originalGetParameter = target.prototype.getParameter;
                        target.prototype.getParameter = function(parameter) {
                          if (parameter === 0x9245) return 'Google Inc. (NVIDIA)';
                          if (parameter === 0x9246) return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)';
                          return originalGetParameter.call(this, parameter);
                        };

                        const originalReadPixels = target.prototype.readPixels;
                        target.prototype.readPixels = function(x, y, w, h, format, type, pixels, ...args) {
                          const res = originalReadPixels.call(this, x, y, w, h, format, type, pixels, ...args);
                          if (pixels && pixels.length) {
                            const shift = Math.floor(Math.random() * 200) + 1;
                            for (let i = 0; i < pixels.length; i += 4) {
                              pixels[i] = (pixels[i] + shift) % 256;
                            }
                          }
                          return res;
                        };
                      };
                      if (window.WebGLRenderingContext) spoofVendor(WebGLRenderingContext);
                      if (window.WebGL2RenderingContext) spoofVendor(WebGL2RenderingContext);
                    } catch(e) {}

                    try {
                      const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
                      CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h, ...args) {
                        const imageData = originalGetImageData.call(this, x, y, w, h, ...args);
                        const shift = Math.floor(Math.random() * 200) + 1;
                        for (let i = 0; i < imageData.data.length; i += 4) {
                          imageData.data[i] = (imageData.data[i] + shift) % 256;
                        }
                        return imageData;
                      };

                      const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
                      HTMLCanvasElement.prototype.toDataURL = function(type, ...args) {
                        const ctx = this.getContext('2d');
                        if (ctx) {
                          try {
                            const randColor = Math.floor(Math.random() * 255);
                            ctx.fillStyle = 'rgba(' + randColor + ', 255, 255, 0.01)';
                            ctx.fillRect(0, 0, 1, 1);
                          } catch(e) {}
                        }
                        return originalToDataURL.call(this, type, ...args);
                      };
                    } catch(e) {}

                    try {
                      if (window.AudioBuffer) {
                        const orig = AudioBuffer.prototype.getChannelData;
                        AudioBuffer.prototype.getChannelData = function() {
                          const res = orig.apply(this, arguments);
                          for (let i = 0; i < res.length; i += 10) {
                            res[i] = res[i] + ((Math.random() * 0.001) - 0.0005);
                          }
                          return res;
                        };
                      }
                    } catch(e) {}
                  })();
                `;

                chrome.debugger.sendCommand(targetDebuggee, "Page.addScriptToEvaluateOnNewDocument", {
                  source: injectionCode
                }, () => {
                  chrome.runtime.lastError;
                  if (completionCallback) completionCallback();
                });
              });
            });
          });
        });
      });
    });
  });
}

// 1. AUTO-APPLY WHEN NAVIGATING OR OPENING NEW TABS
chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    chrome.storage.local.get(['targetTimezone', 'isActive'], (data) => {
      if (data.isActive && data.targetTimezone) {
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          files: ['inject.js'],
          injectImmediately: true
        }).catch(() => {});
        applyProfileToTab(details.tabId, data.targetTimezone);
      }
    });
  }
});

// 2. LISTEN FOR POPUP UI COMMANDS
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "update_profile") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        applyProfileToTab(tabs[0].id, message.timezone, () => {
          chrome.tabs.reload(tabs[0].id);
        });
      }
    });
    sendResponse({ success: true });
  } 
  else if (message.action === "disable_profile") {
    // Find ALL tabs that have the debugger attached and detach them cleanly
    chrome.debugger.getTargets((targets) => {
      let activeTabDetached = false;
      
      for (let target of targets) {
        if (target.attached && target.type === "page") {
          chrome.debugger.detach({ targetId: target.id }, () => {
            chrome.runtime.lastError;
            // Reload the tab so the Warning Bar disappears and the real timezone restores
            if (target.tabId) {
              chrome.tabs.reload(target.tabId);
            }
          });
        }
      }
    });
    sendResponse({ success: true });
  }
  return true;
});

// Clean up links when tabs are manually closed
chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.debugger.detach({ tabId: tabId }, () => { chrome.runtime.lastError; });
});