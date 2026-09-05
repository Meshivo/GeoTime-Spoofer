# GeoTime Spoofer Pro

A powerful, Manifest V3 Chromium browser extension (Chrome, Brave, Edge) designed to natively spoof your browser's Timezone, Geolocation, Locale, Language headers, and Hardware Fingerprints.

Unlike standard privacy extensions that use easily detectable JavaScript overrides, this extension utilizes the **Chrome DevTools Protocol (CDP)** to modify settings deep within the V8 engine, combined with **MAIN-world anti-fingerprinting injection** to defeat advanced anti-bot algorithms.

---

## ✨ Advanced Features

- **Native CDP Engine:** Modifies the V8 engine natively rather than overriding `Intl.DateTimeFormat` or `Date.prototype`, leaving zero detectable JavaScript footprint.
- **All-in-One Spoofing:** Automatically aligns your Timezone, HTML5 Geolocation (GPS), Browser Locale (e.g., `en-US`, `vi-VN`), and `Accept-Language` headers in a single click.
- **Dynamic Hardware Hash Randomization:** Injects real-time micro-noise into `CanvasRenderingContext2D`, `WebGLRenderingContext`, and `AudioContext` APIs. Every canvas read (`getImageData`, `toDataURL`, `readPixels`) produces a unique, non-trackable fingerprint hash.
- **Browser Vendor & Engine Masking:** Normalizes custom browser engine flags and spoofs `UNMASKED_VENDOR_WEBGL` / `UNMASKED_RENDERER_WEBGL` as standard desktop NVIDIA graphics hardware across all Chromium browsers.
- **80+ Global Locations:** Includes pre-configured profiles across 70+ countries and major global timezones (Americas, Europe, Middle East, Asia Pacific, Africa).
- **Searchable UI & Hardware Noise Switch:** Modern popup interface with a live location search bar and a dedicated toggle switch for hardware noise randomization.
- **Zero Race Conditions:** Evaluates CDP scripts on document creation (`Page.addScriptToEvaluateOnNewDocument`) to guarantee early execution at frame 0 (`document_start`).
- **True Clean-up:** Turning off the extension instantly detaches the debugger and restores tabs back to your authentic hardware state.

---

## 🚀 Why This Method?

Standard timezone spoofers modify JavaScript prototypes. Security scripts (like Cloudflare, Akamai, Pixelscan, or FingerprintJS) easily detect this by inspecting `.toString()` native code integrity or detecting inconsistencies between your Timezone, Browser Language, and Geolocation.

This extension overcomes these detections by combining:
1. **CDP Overrides:** `Emulation.setTimezoneOverride`, `Emulation.setLocaleOverride`, `Emulation.setGeolocationOverride`, and `Network.setUserAgentOverride`.
2. **MAIN World Script Injection:** Executes early in the main page environment to spoof WebGL vendor parameters and inject canvas/audio noise before anti-bot scripts can profile your browser.

---

## 🌍 Supported Regions & Global Database

Includes 80+ curated locations categorized into:
- **North America:** US (New York, Chicago, Denver, Los Angeles, Phoenix, Detroit, Miami, Anchorage, Honolulu), Canada (Toronto, Vancouver, Montreal), Mexico.
- **Central & South America:** Guatemala, Panama, Colombia, Peru, Venezuela, Chile, Argentina, Brazil (Sao Paulo, Rio de Janeiro), Uruguay.
- **Western & Central Europe:** UK, Ireland, France, Belgium, Netherlands, Germany, Switzerland, Austria, Luxembourg.
- **Southern & Eastern Europe:** Spain, Portugal, Italy, Greece, Poland, Czechia, Hungary, Romania, Bulgaria, Croatia, Serbia.
- **Nordics & Baltics:** Sweden, Norway, Denmark, Finland, Iceland, Estonia, Latvia, Lithuania.
- **Middle East & Eurasia:** UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, Jordan, Lebanon, Iran, Georgia, Armenia, Azerbaijan, Turkey, Russia.
- **Asia Pacific & South Asia:** India, Bangladesh, Sri Lanka, Pakistan, Nepal, Kazakhstan, Uzbekistan, Thailand, Indonesia, Singapore, Malaysia, Japan, South Korea, China, Hong Kong, Taiwan, Vietnam (Hanoi), Philippines, Cambodia.
- **Oceania:** Australia (Sydney, Melbourne, Brisbane, Perth), New Zealand, Fiji.
- **Africa:** Egypt, Morocco, Tunisia, Nigeria, South Africa, Kenya, Ethiopia, Ghana.

---

## 🛠️ Installation Guide

1. Click the green **Code** button at the top of this repository and select **Download ZIP** (or clone via Git).
2. Extract the ZIP file to a folder on your computer.
3. Open Google Chrome / Brave and navigate to `chrome://extensions/`.
4. Enable **Developer mode** using the toggle switch in the top right corner.
5. Click **Load unpacked** in the top left corner.
6. Select the folder containing the extension files.

---

## 💡 How to Use

1. **Connect your VPN/Proxy:** Connect your VPN to your target location (e.g., Vietnam or Germany).
2. **Open GeoTime Spoofer Pro:** Click the extension icon in your Chrome toolbar.
3. **Select Location:** Use the searchable dropdown to select your matching city/timezone (e.g., `VN - Hanoi (ICT)`).
4. **Hardware Noise Toggle:** Keep **Hardware Hash Noise** enabled to randomize Canvas, WebGL, and Audio fingerprints.
5. **Power On:** Click the circular power button. The active tab will reload with the newly spoofed environment!

---

## 🧪 How to Test & Verify

Verify your configuration on fingerprint testing portals:

- **[Pixelscan.net](https://pixelscan.net/)** - Checks Canvas Hash, WebGL Hash, AudioContext Hash, WebGL Vendor, Timezone, and Locale consistency.
- **[BrowserLeaks Timezone Test](https://browserleaks.com/timezone)** - Checks Javascript Date offset and locale formatting.
- **[BrowserLeaks Geolocation Test](https://browserleaks.com/geo)** - Verifies HTML5 GPS coordinates on an interactive map.
- **[Whoer.net](https://whoer.net/)** - Tests overall anonymity percentage against your active IP/VPN.

---

## 🛑 Privacy Note (VPN & Network Traffic)

This extension spoofs **browser-level environment headers and hardware signatures**. It does not route or encrypt network traffic. To avoid location mismatches:
- Always pair this extension with a leak-proof VPN or Proxy matching your selected target region.
- Ensure WebRTC leaks and DNS leaks are properly blocked by your network provider.

---

## ⚠️ Disclaimer

This extension is provided for privacy research, security testing, and educational purposes only. Users are responsible for complying with applicable local laws and third-party Terms of Service.
