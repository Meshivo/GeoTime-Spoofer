document.addEventListener('DOMContentLoaded', () => {
  const powerBtn = document.getElementById('powerBtn');
  const statusText = document.getElementById('statusText');
  const statusBadge = document.getElementById('statusBadge');
  
  // Custom Dropdown Elements
  const dropdown = document.getElementById('locationDropdown');
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownLabel = document.getElementById('dropdownLabel');
  const dropdownList = document.getElementById('dropdownList');
  const dropdownSearch = document.getElementById('dropdownSearch');

  let isSpoofingActive = false;
  let currentSelection = "America/New_York";

  // Massive Database of Locations (Prioritizing Top VPN Nodes)
  const locations = [
    // --- NORTH AMERICA ---
    { id: "America/New_York", label: "US - New York (EST)" },
    { id: "America/Chicago", label: "US - Chicago (CST)" },
    { id: "America/Denver", label: "US - Denver (MST)" },
    { id: "America/Los_Angeles", label: "US - Los Angeles (PST)" },
    { id: "America/Phoenix", label: "US - Phoenix (MST)" },
    { id: "America/Detroit", label: "US - Detroit (EST)" },
    { id: "America/Miami", label: "US - Miami (EST)" },
    { id: "America/Anchorage", label: "US - Anchorage (AKST)" },
    { id: "Pacific/Honolulu", label: "US - Honolulu (HST)" },
    { id: "America/Toronto", label: "CA - Toronto (EST)" },
    { id: "America/Vancouver", label: "CA - Vancouver (PST)" },
    { id: "America/Montreal", label: "CA - Montreal (EST)" },
    { id: "America/Mexico_City", label: "MX - Mexico City (CST)" },

    // --- CENTRAL & SOUTH AMERICA ---
    { id: "America/Guatemala", label: "GT - Guatemala City (CST)" },
    { id: "America/Panama", label: "PA - Panama City (EST)" },
    { id: "America/Bogota", label: "CO - Bogota (COT)" },
    { id: "America/Lima", label: "PE - Lima (PET)" },
    { id: "America/Caracas", label: "VE - Caracas (VET)" },
    { id: "America/Santiago", label: "CL - Santiago (CLT)" },
    { id: "America/Buenos_Aires", label: "AR - Buenos Aires (ART)" },
    { id: "America/Sao_Paulo", label: "BR - Sao Paulo (BRT)" },
    { id: "America/Rio_de_Janeiro", label: "BR - Rio de Janeiro (BRT)" },
    { id: "America/Montevideo", label: "UY - Montevideo (UYT)" },

    // --- WESTERN & CENTRAL EUROPE ---
    { id: "Europe/London", label: "UK - London (GMT)" },
    { id: "Europe/Dublin", label: "IE - Dublin (IST)" },
    { id: "Europe/Paris", label: "FR - Paris (CET)" },
    { id: "Europe/Brussels", label: "BE - Brussels (CET)" },
    { id: "Europe/Amsterdam", label: "NL - Amsterdam (CET)" },
    { id: "Europe/Berlin", label: "DE - Frankfurt/Berlin (CET)" },
    { id: "Europe/Zurich", label: "CH - Zurich (CET)" },
    { id: "Europe/Vienna", label: "AT - Vienna (CET)" },
    { id: "Europe/Luxembourg", label: "LU - Luxembourg (CET)" },

    // --- SOUTHERN & EASTERN EUROPE ---
    { id: "Europe/Madrid", label: "ES - Madrid (CET)" },
    { id: "Europe/Lisbon", label: "PT - Lisbon (WET)" },
    { id: "Europe/Rome", label: "IT - Rome (CET)" },
    { id: "Europe/Athens", label: "GR - Athens (EET)" },
    { id: "Europe/Warsaw", label: "PL - Warsaw (CET)" },
    { id: "Europe/Prague", label: "CZ - Prague (CET)" },
    { id: "Europe/Budapest", label: "HU - Budapest (CET)" },
    { id: "Europe/Bucharest", label: "RO - Bucharest (EET)" },
    { id: "Europe/Sofia", label: "BG - Sofia (EET)" },
    { id: "Europe/Zagreb", label: "HR - Zagreb (CET)" },
    { id: "Europe/Belgrade", label: "RS - Belgrade (CET)" },

    // --- NORDIC & BALTIC COUNTRIES ---
    { id: "Europe/Stockholm", label: "SE - Stockholm (CET)" },
    { id: "Europe/Oslo", label: "NO - Oslo (CET)" },
    { id: "Europe/Copenhagen", label: "DK - Copenhagen (CET)" },
    { id: "Europe/Helsinki", label: "FI - Helsinki (EET)" },
    { id: "Europe/Reykjavik", label: "IS - Reykjavik (GMT)" },
    { id: "Europe/Tallinn", label: "EE - Tallinn (EET)" },
    { id: "Europe/Riga", label: "LV - Riga (EET)" },
    { id: "Europe/Vilnius", label: "LT - Vilnius (EET)" },

    // --- EASTERN EUROPE & EURASIA ---
    { id: "Europe/Moscow", label: "RU - Moscow (MSK)" },
    { id: "Europe/Istanbul", label: "TR - Istanbul (TRT)" },
    { id: "Europe/Kyiv", label: "UA - Kyiv (EET)" },
    { id: "Asia/Tbilisi", label: "GE - Tbilisi (GET)" },
    { id: "Asia/Yerevan", label: "AM - Yerevan (AMT)" },
    { id: "Asia/Baku", label: "AZ - Baku (AZT)" },

    // --- MIDDLE EAST ---
    { id: "Asia/Dubai", label: "AE - Dubai (GST)" },
    { id: "Asia/Riyadh", label: "SA - Riyadh (AST)" },
    { id: "Asia/Doha", label: "QA - Doha (AST)" },
    { id: "Asia/Muscat", label: "OM - Muscat (GST)" },
    { id: "Asia/Kuwait", label: "KW - Kuwait City (AST)" },
    { id: "Asia/Bahrain", label: "BH - Manama (AST)" },
    { id: "Asia/Amman", label: "JO - Amman (EET)" },
    { id: "Asia/Beirut", label: "LB - Beirut (EET)" },
    { id: "Asia/Tehran", label: "IR - Tehran (IRST)" },

    // --- ASIA PACIFIC & SOUTH ASIA ---
    { id: "Asia/Mumbai", label: "IN - Mumbai (IST)" },
    { id: "Asia/New_Delhi", label: "IN - New Delhi (IST)" },
    { id: "Asia/Dhaka", label: "BD - Dhaka (BST)" },
    { id: "Asia/Colombo", label: "LK - Colombo (IST)" },
    { id: "Asia/Karachi", label: "PK - Karachi (PKT)" },
    { id: "Asia/Kathmandu", label: "NP - Kathmandu (NPT)" },
    { id: "Asia/Almaty", label: "KZ - Almaty (ALMT)" },
    { id: "Asia/Tashkent", label: "UZ - Tashkent (UZT)" },

    // --- EAST & SOUTHEAST ASIA ---
    { id: "Asia/Bangkok", label: "TH - Bangkok (ICT)" },
    { id: "Asia/Jakarta", label: "ID - Jakarta (WIB)" },
    { id: "Asia/Singapore", label: "SG - Singapore (SGT)" },
    { id: "Asia/Kuala_Lumpur", label: "MY - Kuala Lumpur (MYT)" },
    { id: "Asia/Tokyo", label: "JP - Tokyo (JST)" },
    { id: "Asia/Osaka", label: "JP - Osaka (JST)" },
    { id: "Asia/Seoul", label: "KR - Seoul (KST)" },
    { id: "Asia/Shanghai", label: "CN - Shanghai (CST)" },
    { id: "Asia/Beijing", label: "CN - Beijing (CST)" },
    { id: "Asia/Hong_Kong", label: "HK - Hong Kong (HKT)" },
    { id: "Asia/Taipei", label: "TW - Taipei (CST)" },
    { id: "Asia/Ho_Chi_Minh", label: "VN - Hanoi (ICT)" },
    { id: "Asia/Manila", label: "PH - Manila (PST)" },
    { id: "Asia/Phnom_Penh", label: "KH - Phnom Penh (ICT)" },

    // --- AUSTRALIA & OCEANIA ---
    { id: "Australia/Sydney", label: "AU - Sydney (AEST)" },
    { id: "Australia/Melbourne", label: "AU - Melbourne (AEST)" },
    { id: "Australia/Brisbane", label: "AU - Brisbane (AEST)" },
    { id: "Australia/Perth", label: "AU - Perth (AWST)" },
    { id: "Pacific/Auckland", label: "NZ - Auckland (NZST)" },
    { id: "Pacific/Fiji", label: "FJ - Suva (FJT)" },

    // --- AFRICA ---
    { id: "Africa/Cairo", label: "EG - Cairo (EET)" },
    { id: "Africa/Casablanca", label: "MA - Casablanca (WET)" },
    { id: "Africa/Tunis", label: "TN - Tunis (CET)" },
    { id: "Africa/Lagos", label: "NG - Lagos (WAT)" },
    { id: "Africa/Johannesburg", label: "ZA - Johannesburg (SAST)" },
    { id: "Africa/Nairobi", label: "KE - Nairobi (EAT)" },
    { id: "Africa/Addis_Ababa", label: "ET - Addis Ababa (EAT)" },
    { id: "Africa/Accra", label: "GH - Accra (GMT)" }
  ];

  // Helper to Update Main UI State
  function updateUIState(active, timezoneId) {
    isSpoofingActive = active;
    
    const selectedLoc = locations.find(loc => loc.id === timezoneId);
    if (selectedLoc) {
      dropdownLabel.textContent = selectedLoc.label;
      currentSelection = timezoneId;
    }

    document.querySelectorAll('.custom-dropdown-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.value === timezoneId);
    });

    if (active) {
      powerBtn.classList.add('active');
      statusBadge.classList.add('active');
      statusBadge.textContent = 'ON';
      statusText.textContent = selectedLoc ? selectedLoc.label.split('-')[1].trim().split(' ')[0] : 'Active';
    } else {
      powerBtn.classList.remove('active');
      statusBadge.classList.remove('active');
      statusBadge.textContent = 'OFF';
      statusText.textContent = 'Disconnected';
    }
  }

  // Populate Custom Dropdown
  function populateDropdown(filter = "") {
    dropdownList.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    locations.forEach(loc => {
      if (loc.label.toLowerCase().includes(lowerFilter)) {
        const item = document.createElement('div');
        item.className = 'custom-dropdown-item';
        item.dataset.value = loc.id;
        item.textContent = loc.label;
        if (loc.id === currentSelection) item.classList.add('selected');
        
        // Handle Item Click (Applies instantly if power is ON)
        item.addEventListener('click', async () => {
          dropdown.classList.remove('open');
          
          if (currentSelection !== loc.id) {
            currentSelection = loc.id;
            await chrome.storage.local.set({ targetTimezone: currentSelection });
            
            if (isSpoofingActive) {
              statusText.textContent = 'Applying...';
              chrome.runtime.sendMessage({ action: "update_profile", timezone: currentSelection }, () => {
                updateUIState(true, currentSelection);
              });
            } else {
               updateUIState(false, currentSelection);
            }
          }
        });
        dropdownList.appendChild(item);
      }
    });
  }

  const hashSpoofToggle = document.getElementById('hashSpoofToggle');

  // Initialize
  populateDropdown();
  chrome.storage.local.get(['targetTimezone', 'isActive', 'enableHashSpoof'], (data) => {
    const tz = data.targetTimezone || "America/New_York";
    hashSpoofToggle.checked = data.enableHashSpoof !== false;
    updateUIState(Boolean(data.isActive), tz);
  });

  hashSpoofToggle.addEventListener('change', async () => {
    await chrome.storage.local.set({ enableHashSpoof: hashSpoofToggle.checked });
  });

  // Dropdown UI Interactions
  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) {
      dropdownSearch.value = "";
      populateDropdown();
      dropdownSearch.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  dropdownSearch.addEventListener('input', (e) => {
    populateDropdown(e.target.value);
  });

  // Handle Main Power Button Click
  powerBtn.addEventListener('click', async () => {
    if (!isSpoofingActive) {
      statusText.textContent = 'Connecting...';
      await chrome.storage.local.set({ targetTimezone: currentSelection, isActive: true });
      chrome.runtime.sendMessage({ action: "update_profile", timezone: currentSelection }, () => {
        updateUIState(true, currentSelection);
      });
    } else {
      statusText.textContent = 'Disconnecting...';
      await chrome.storage.local.set({ isActive: false });
      chrome.runtime.sendMessage({ action: "disable_profile" }, () => {
        updateUIState(false, currentSelection);
      });
    }
  });
});