import fs from 'fs';
import path from 'path';

// Helper to save SVG or base64 file
function saveFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80" fill="none">
  <!-- Brand Icon -->
  <g transform="translate(10, 8)">
    <circle cx="28" cy="18" r="8" fill="#F37023" />
    <circle cx="16" cy="34" r="7" fill="#005BAA" />
    <circle cx="40" cy="34" r="7" fill="#008080" />
    <path d="M28 26 C28 42, 16 48, 16 56 C24 54, 32 54, 40 56 C40 48, 28 42, 28 26 Z" fill="#003366" />
    <path d="M22 36 Q28 44 34 36" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- Leaves/Hands Motif -->
    <path d="M12 28 C6 24, 6 16, 14 16 C16 22, 14 26, 12 28 Z" fill="#78BE20" />
    <path d="M44 28 C50 24, 50 16, 42 16 C40 22, 42 26, 44 28 Z" fill="#F37023" />
  </g>
  <!-- Text -->
  <text x="75" y="32" font-family="'Outfit', 'Inter', 'Segoe UI', sans-serif" font-size="22" font-weight="800" fill="#003B73" letter-spacing="0.5">MARENGO ASIA</text>
  <text x="75" y="52" font-family="'Outfit', 'Inter', 'Segoe UI', sans-serif" font-size="15" font-weight="700" fill="#0088CC" letter-spacing="3">HOSPITALS</text>
  <line x1="75" y1="58" x2="295" y2="58" stroke="#E2E8F0" stroke-width="1" />
  <text x="75" y="69" font-family="'Inter', 'Segoe UI', sans-serif" font-size="9" font-weight="600" fill="#F37023" letter-spacing="2">PATIENT FIRST</text>
</svg>`;
saveFile('public/images/logo/marengo-logo.svg', logoSvg);
saveFile('public/images/logo/logo-white.svg', logoSvg.replace('#003B73', '#FFFFFF').replace('#0088CC', '#38BDF8').replace('#E2E8F0', '#334155').replace('#F37023', '#FB923C'));

// 2. Hospital Exterior SVGs/Images
const hospitalList = [
  { name: 'ahmedabad', title: 'Marengo CIMS Hospital', city: 'Ahmedabad, Gujarat', color1: '#0284C7', color2: '#0369A1' },
  { name: 'gurgaon', title: 'Marengo Asia Hospital', city: 'Gurugram, Haryana', color1: '#0D9488', color2: '#0F766E' },
  { name: 'faridabad', title: 'Marengo Asia Hospital', city: 'Faridabad, Delhi NCR', color1: '#2563EB', color2: '#1D4ED8' },
  { name: 'surat', title: 'Marengo Specialty Clinic', city: 'Surat, Gujarat', color1: '#D97706', color2: '#B45309' },
  { name: 'kolkata', title: 'Marengo Health Center', city: 'Kolkata, West Bengal', color1: '#0284C7', color2: '#0369A1' },
  { name: 'noida', title: 'Marengo Super Speciality', city: 'Noida, Uttar Pradesh', color1: '#059669', color2: '#047857' },
  { name: 'mumbai', title: 'Marengo Care Hub', city: 'Mumbai, Maharashtra', color1: '#4F46E5', color2: '#4338CA' },
  { name: 'delhi', title: 'Marengo Asia Apex Hospital', city: 'Delhi NCR, India', color1: '#BE123C', color2: '#9F1239' }
];

hospitalList.forEach(h => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E0F2FE"/>
        <stop offset="60%" stop-color="#BAE6FD"/>
        <stop offset="100%" stop-color="#F8FAFC"/>
      </linearGradient>
      <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0284C7" stop-opacity="0.95"/>
      </linearGradient>
      <linearGradient id="facadeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#CBD5E1"/>
      </linearGradient>
    </defs>
    <!-- Background Sky -->
    <rect width="600" height="400" fill="url(#skyGrad)"/>
    <circle cx="500" cy="80" r="45" fill="#FEF08A" opacity="0.6"/>
    <!-- Clouds -->
    <ellipse cx="150" cy="60" rx="80" ry="25" fill="#FFFFFF" opacity="0.7"/>
    <ellipse cx="200" cy="50" rx="60" ry="20" fill="#FFFFFF" opacity="0.8"/>
    <!-- Distant City Outline -->
    <rect x="40" y="160" width="70" height="180" fill="#94A3B8" opacity="0.4"/>
    <rect x="130" y="140" width="85" height="200" fill="#94A3B8" opacity="0.3"/>
    <rect x="480" y="150" width="90" height="190" fill="#94A3B8" opacity="0.35"/>
    
    <!-- Modern Main Hospital Building Structure -->
    <polygon points="120,340 120,110 380,80 480,120 480,340" fill="url(#facadeGrad)"/>
    <polygon points="120,110 380,80 380,340 120,340" fill="url(#glassGrad)"/>
    <polygon points="380,80 480,120 480,340 380,340" fill="#0369A1"/>
    
    <!-- Glass Facade Grid / Windows -->
    <g stroke="#E0F2FE" stroke-width="1.5" opacity="0.75">
      ${Array.from({ length: 8 }).map((_, i) => `<line x1="120" y1="${120 + i * 25}" x2="380" y2="${95 + i * 25}" />`).join('')}
      ${Array.from({ length: 9 }).map((_, i) => `<line x1="${145 + i * 26}" y1="${110 - i * 3}" x2="${145 + i * 26}" y2="340" />`).join('')}
    </g>

    <!-- Side Wing Windows -->
    <g fill="#38BDF8" opacity="0.85">
      ${Array.from({ length: 6 }).map((_, r) => 
        Array.from({ length: 3 }).map((_, c) => 
          `<rect x="${395 + c * 25}" y="${140 + r * 30}" width="16" height="18" rx="2" fill="#E2E8F0"/>`
        ).join('')
      ).join('')}
    </g>

    <!-- Hospital Red Cross & Sign -->
    <rect x="210" y="115" width="130" height="38" rx="6" fill="#003B73" />
    <text x="275" y="138" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">MARENGO ASIA</text>
    <!-- Emergency Canopy & Entrance -->
    <polygon points="180,340 180,290 350,290 360,340" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>
    <rect x="230" y="300" width="80" height="40" fill="#0284C7"/>
    <rect x="210" y="275" width="120" height="18" rx="3" fill="#DC2626"/>
    <text x="270" y="288" font-family="'Inter', sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">EMERGENCY / TRAUMA</text>
    <rect x="264" y="255" width="12" height="12" fill="#DC2626"/>
    <rect x="260" y="259" width="20" height="4" fill="#DC2626"/>

    <!-- Foreground Landscaping & Driveway -->
    <rect x="0" y="340" width="600" height="60" fill="#334155"/>
    <polygon points="0,340 600,340 600,355 0,355" fill="#475569"/>
    <line x1="0" y1="375" x2="600" y2="375" stroke="#F8FAFC" stroke-dasharray="25 15" stroke-width="2"/>
    
    <!-- Trees & Greenery -->
    <g fill="#16A34A">
      <circle cx="80" cy="335" r="28"/>
      <circle cx="100" cy="330" r="22"/>
      <circle cx="490" cy="335" r="32"/>
      <circle cx="525" cy="330" r="25"/>
      <circle cx="550" cy="335" r="20"/>
    </g>
    <g fill="#15803D">
      <circle cx="70" cy="340" r="18"/>
      <circle cx="505" cy="342" r="20"/>
    </g>
    
    <!-- Ambient badge -->
    <rect x="20" y="20" width="200" height="32" rx="16" fill="rgba(15, 23, 42, 0.75)" backdrop-filter="blur(4px)"/>
    <text x="35" y="41" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">${h.city}</text>
  </svg>`;
  saveFile(`public/images/hospitals/${h.name}.svg`, svg);
});

// 3. Blogs SVG Images
const blogsList = [
  { name: 'blog-cardiac', title: 'Heart Health & Early Prevention', cat: 'Cardiology', icon: 'heart', color: '#EF4444' },
  { name: 'blog-robotic', title: 'Robotic Knee & Hip Surgery Recovery', cat: 'Orthopaedics', icon: 'bone', color: '#0284C7' },
  { name: 'blog-brain', title: 'Neuroscience: Stroke & Brain Care', cat: 'Neurology', icon: 'brain', color: '#8B5CF6' }
];

blogsList.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
    <defs>
      <linearGradient id="bgGrad_${b.name}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#003B73"/>
      </linearGradient>
      <radialGradient id="glow_${b.name}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${b.color}" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="${b.color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="400" fill="url(#bgGrad_${b.name})"/>
    <circle cx="300" cy="180" r="140" fill="url(#glow_${b.name})"/>
    <!-- Medical grid lines -->
    <g stroke="rgba(255,255,255,0.08)" stroke-width="1">
      ${Array.from({ length: 8 }).map((_, i) => `<line x1="0" y1="${i * 50}" x2="600" y2="${i * 50}" />`).join('')}
      ${Array.from({ length: 12 }).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="400" />`).join('')}
    </g>
    <!-- ECG pulse line -->
    <path d="M 50 200 L 180 200 L 200 160 L 220 240 L 245 130 L 270 270 L 290 190 L 315 210 L 340 200 L 550 200" stroke="${b.color}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    
    <!-- Central Badge Motif -->
    <circle cx="300" cy="180" r="60" fill="#1E293B" stroke="${b.color}" stroke-width="3"/>
    <circle cx="300" cy="180" r="50" fill="rgba(255,255,255,0.05)"/>
    <text x="300" y="190" font-family="'Inter', sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" text-anchor="middle">CARE</text>
    
    <!-- Overlay Category Tag -->
    <rect x="40" y="320" width="130" height="34" rx="17" fill="${b.color}"/>
    <text x="105" y="342" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">${b.cat}</text>
  </svg>`;
  saveFile(`public/images/blogs/${b.name}.svg`, svg);
});

// 4. News SVG Images
const newsList = [
  { name: 'news-main', title: 'Marengo Asia Unveils Next-Gen AI Surgical Hub', date: 'May 2026' },
  { name: 'news-1', title: 'Global Medical Summit on Oncology Breakthroughs', date: 'April 2026' },
  { name: 'news-2', title: 'New Multi-Specialty Wing Inauguration at Gurugram', date: 'March 2026' },
  { name: 'news-3', title: 'Marengo Healthcare Excellence Award 2026', date: 'Feb 2026' },
  { name: 'news-4', title: 'Pioneering Pediatric Organ Transplant Milestones', date: 'Jan 2026' }
];

newsList.forEach(n => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
    <defs>
      <linearGradient id="newsGrad_${n.name}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#003B73"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#newsGrad_${n.name})"/>
    <g stroke="rgba(255,255,255,0.15)" stroke-width="2">
      <circle cx="450" cy="150" r="100" fill="none"/>
      <circle cx="450" cy="150" r="160" fill="none"/>
    </g>
    <!-- Press/Microphone/Hospital Graphic -->
    <rect x="60" y="80" width="480" height="240" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <text x="300" y="170" font-family="'Outfit', sans-serif" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">MARENGO ASIA PRESS</text>
    <text x="300" y="210" font-family="'Inter', sans-serif" font-size="14" font-weight="600" fill="#38BDF8" text-anchor="middle">HEALTHCARE NEWS & INNOVATION</text>
    <rect x="230" y="235" width="140" height="30" rx="15" fill="#F37023"/>
    <text x="300" y="255" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">${n.date}</text>
  </svg>`;
  saveFile(`public/images/news/${n.name}.svg`, svg);
});

// 5. Testimonial Patients 1 & 3 SVGs
const patientList = [
  { name: 'patient-1', nameText: 'Mrs. Sunita Verma', treatment: 'Complex Cardiac Bypass', doctor: 'Dr. A. K. Banerjee' },
  { name: 'patient-3', nameText: 'Mr. David Mutua', treatment: 'Robotic Spine Surgery', doctor: 'Dr. Vikram Shah' }
];

patientList.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <defs>
      <linearGradient id="pGrad_${p.name}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E2E8F0"/>
        <stop offset="100%" stop-color="#CBD5E1"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="url(#pGrad_${p.name})"/>
    <circle cx="250" cy="200" r="90" fill="#94A3B8"/>
    <path d="M120 450 C120 330, 380 330, 380 450 Z" fill="#64748B"/>
    <circle cx="250" cy="180" r="65" fill="#FED7AA"/>
    <!-- Joyful expression -->
    <path d="M225 170 Q235 165 240 170" stroke="#78350F" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M260 170 Q265 165 275 170" stroke="#78350F" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M235 195 Q250 215 265 195" stroke="#DC2626" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <!-- Doctor Stethoscope / Recovery Badge -->
    <rect x="50" y="410" width="400" height="60" rx="10" fill="#003B73" opacity="0.95"/>
    <text x="250" y="438" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.nameText}</text>
    <text x="250" y="458" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#38BDF8" text-anchor="middle">${p.treatment}</text>
  </svg>`;
  saveFile(`public/images/testimonials/${p.name}.svg`, svg);
});

// 6. World Map graphic with connecting arcs
const worldMapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" width="1000" height="500" fill="none">
  <defs>
    <linearGradient id="mapDotGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#003B73"/>
    </linearGradient>
    <filter id="glowEffect">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- World Continents Stylized Silhouette -->
  <!-- North America -->
  <path d="M120 80 Q180 60 220 90 Q240 140 210 180 Q170 190 140 210 Q120 180 100 130 Z" fill="#E2E8F0" opacity="0.85"/>
  <!-- South America -->
  <path d="M200 230 Q240 240 250 300 Q230 380 210 420 Q190 380 180 300 Z" fill="#E2E8F0" opacity="0.85"/>
  <!-- Europe -->
  <path d="M430 70 Q490 60 520 90 Q500 140 450 140 Q420 110 430 70 Z" fill="#E2E8F0" opacity="0.85"/>
  <!-- Africa -->
  <path d="M430 160 Q510 150 530 220 Q520 320 480 370 Q430 320 420 220 Z" fill="#E2E8F0" opacity="0.85"/>
  <!-- Asia -->
  <path d="M530 70 Q750 50 820 120 Q830 220 740 250 Q660 240 600 200 Q540 160 530 70 Z" fill="#E2E8F0" opacity="0.85"/>
  <!-- India (Highlighted) -->
  <path d="M630 170 Q670 180 680 230 Q650 280 630 260 Q615 220 630 170 Z" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.5"/>
  <!-- Australia -->
  <path d="M780 300 Q860 300 870 360 Q820 400 770 380 Q760 330 780 300 Z" fill="#E2E8F0" opacity="0.85"/>

  <!-- Flight / Patient Connecting Arcs to India (Hub at 650, 230) -->
  <g stroke="#0284C7" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.75">
    <!-- Bangladesh -->
    <path d="M650 230 Q680 200 700 215"/>
    <!-- Oman / UAE / Middle East -->
    <path d="M650 230 Q580 180 550 195"/>
    <!-- Iraq -->
    <path d="M650 230 Q560 150 520 160"/>
    <!-- Uzbekistan / Central Asia -->
    <path d="M650 230 Q620 130 600 120"/>
    <!-- Kenya / East Africa -->
    <path d="M650 230 Q560 280 500 270"/>
    <!-- Nigeria / West Africa -->
    <path d="M650 230 Q500 240 440 240"/>
    <!-- Mauritius / Indian Ocean -->
    <path d="M650 230 Q620 330 580 360"/>
    <!-- Fiji / Pacific -->
    <path d="M650 230 Q800 260 920 310"/>
  </g>

  <!-- Destination Markers & Pulses -->
  <!-- India Main Hub Marker -->
  <circle cx="650" cy="230" r="16" fill="#F37023" opacity="0.25">
    <animate attributeName="r" values="12;22;12" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="230" r="8" fill="#F37023" stroke="#FFFFFF" stroke-width="2"/>
  <text x="650" y="210" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="#003B73" text-anchor="middle">MARENGO HUB (INDIA)</text>

  <!-- International Nodes with City Labels -->
  <g fill="#0284C7" stroke="#FFFFFF" stroke-width="2">
    <circle cx="550" cy="195" r="5"/> <!-- Muscat / Dubai -->
    <circle cx="520" cy="160" r="5"/> <!-- Baghdad -->
    <circle cx="600" cy="120" r="5"/> <!-- Tashkent -->
    <circle cx="700" cy="215" r="5"/> <!-- Dhaka -->
    <circle cx="500" cy="270" r="5"/> <!-- Nairobi -->
    <circle cx="440" cy="240" r="5"/> <!-- Lagos -->
    <circle cx="580" cy="360" r="5"/> <!-- Port Louis -->
    <circle cx="920" cy="310" r="5"/> <!-- Suva -->
  </g>

  <!-- Location Label Callouts -->
  <g font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#334155">
    <text x="545" y="185" text-anchor="end">Middle East</text>
    <text x="515" y="150" text-anchor="end">Iraq</text>
    <text x="600" y="110" text-anchor="middle">Uzbekistan</text>
    <text x="710" y="210">Bangladesh</text>
    <text x="490" y="285" text-anchor="end">Kenya</text>
    <text x="430" y="255" text-anchor="end">Nigeria</text>
    <text x="590" y="375">Mauritius</text>
    <text x="920" y="325" text-anchor="middle">Fiji</text>
  </g>
</svg>`;
saveFile('public/images/common/world-map.svg', worldMapSvg);

// 7. Country Flags SVG
const countries = [
  { code: 'bd', name: 'Bangladesh', col1: '#006A4E', col2: '#F42A41', type: 'circle' },
  { code: 'om', name: 'Oman', col1: '#DB162F', col2: '#008000', type: 'stripes' },
  { code: 'iq', name: 'Iraq', col1: '#CE1126', col2: '#007A3D', type: 'stripes' },
  { code: 'uz', name: 'Uzbekistan', col1: '#0099B5', col2: '#1EB53A', type: 'stripes' },
  { code: 'ke', name: 'Kenya', col1: '#000000', col2: '#922529', type: 'stripes' },
  { code: 'fj', name: 'Fiji', col1: '#68BFE5', col2: '#CC0000', type: 'shield' },
  { code: 'ng', name: 'Nigeria', col1: '#008751', col2: '#FFFFFF', type: 'stripes' },
  { code: 'tz', name: 'Tanzania', col1: '#1EB53A', col2: '#00A3DD', type: 'stripes' },
  { code: 'mu', name: 'Mauritius', col1: '#EA2839', col2: '#1A206D', type: 'stripes' },
  { code: 'ae', name: 'UAE', col1: '#00732F', col2: '#FF0000', type: 'stripes' },
  { code: 'ye', name: 'Yemen', col1: '#CE1126', col2: '#000000', type: 'stripes' },
  { code: 'mm', name: 'Myanmar', col1: '#FECB00', col2: '#34B233', type: 'stripes' },
  { code: 'np', name: 'Nepal', col1: '#DC143C', col2: '#003893', type: 'shield' },
  { code: 'et', name: 'Ethiopia', col1: '#078930', col2: '#FCDD09', type: 'stripes' },
  { code: 'rw', name: 'Rwanda', col1: '#00A1DE', col2: '#E5BE01', type: 'stripes' },
  { code: 'cm', name: 'Cameroon', col1: '#007A5E', col2: '#CE1126', type: 'stripes' }
];

countries.forEach(c => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <defs>
      <clipPath id="circleClip_${c.code}">
        <circle cx="32" cy="32" r="30"/>
      </clipPath>
    </defs>
    <circle cx="32" cy="32" r="31" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5"/>
    <g clip-path="url(#circleClip_${c.code})">
      <rect x="0" y="0" width="64" height="32" fill="${c.col1}"/>
      <rect x="0" y="32" width="64" height="32" fill="${c.col2}"/>
      ${c.type === 'circle' ? `<circle cx="28" cy="32" r="14" fill="${c.col2}"/>` : ''}
      <line x1="0" y1="32" x2="64" y2="32" stroke="#FFFFFF" stroke-width="3"/>
    </g>
  </svg>`;
  saveFile(`public/images/countries/${c.code}.svg`, svg);
});

console.log('All image assets generated successfully!');
