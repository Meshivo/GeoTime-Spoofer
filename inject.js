(function () {
  'use strict';

  // Prevent double injection
  if (window.__geoTimeSpooferInjected) return;
  window.__geoTimeSpooferInjected = true;

  // 1. Hide Brave specific indicators if present
  try {
    if (navigator.brave) {
      delete Object.getPrototypeOf(navigator).brave;
    }
  } catch (e) {}

  // 2. Canvas Fingerprint Spoofing
  try {
    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    CanvasRenderingContext2D.prototype.getImageData = function (x, y, w, h, ...args) {
      const imageData = originalGetImageData.call(this, x, y, w, h, ...args);
      const data = imageData.data;
      const shift = Math.floor(Math.random() * 10) + 1;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 0) {
          data[i] = (data[i] + shift) % 256;
        }
      }
      return imageData;
    };

    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function (type, ...args) {
      const ctx = this.getContext('2d');
      if (ctx) {
        try {
          const r = Math.floor(Math.random() * 255);
          ctx.fillStyle = `rgba(${r}, 255, 255, 0.01)`;
          ctx.fillRect(0, 0, 1, 1);
        } catch (e) {}
      }
      return originalToDataURL.call(this, type, ...args);
    };
  } catch (e) {}

  // 3. WebGL Fingerprint & Vendor Spoofing
  try {
    const spoofVendor = (target) => {
      const originalGetParameter = target.prototype.getParameter;
      target.prototype.getParameter = function (parameter) {
        if (parameter === 0x9245) return 'Google Inc. (NVIDIA)';
        if (parameter === 0x9246) return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)';
        return originalGetParameter.call(this, parameter);
      };

      const originalReadPixels = target.prototype.readPixels;
      target.prototype.readPixels = function (x, y, w, h, format, type, pixels, ...args) {
        const res = originalReadPixels.call(this, x, y, w, h, format, type, pixels, ...args);
        if (pixels && pixels.length) {
          const shift = Math.floor(Math.random() * 10) + 1;
          for (let i = 0; i < pixels.length; i += 4) {
            pixels[i] = (pixels[i] + shift) % 256;
          }
        }
        return res;
      };
    };

    if (window.WebGLRenderingContext) spoofVendor(WebGLRenderingContext);
    if (window.WebGL2RenderingContext) spoofVendor(WebGL2RenderingContext);
  } catch (e) {}

  // 4. AudioContext Fingerprint Spoofing
  try {
    const spoofAudio = (target) => {
      const originalGetChannelData = target.prototype.getChannelData;
      target.prototype.getChannelData = function () {
        const results = originalGetChannelData.apply(this, arguments);
        for (let i = 0; i < results.length; i += 100) {
          results[i] = results[i] + noiseFactor;
        }
        return results;
      };
    };

    if (window.AudioBuffer) spoofAudio(AudioBuffer);

    if (window.AnalyserNode) {
      const originalGetFloatFrequencyData = AnalyserNode.prototype.getFloatFrequencyData;
      AnalyserNode.prototype.getFloatFrequencyData = function (array) {
        originalGetFloatFrequencyData.apply(this, arguments);
        for (let i = 0; i < array.length; i += 100) {
          array[i] = array[i] + noiseFactor;
        }
      };
    }
  } catch (e) {}

})();
