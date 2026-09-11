import { IMAGES } from './images';

export const SITE_CONFIG = {
  name: 'Marengo Asia Hospitals',
  tagline: 'Patient First | Trusted Care, Every Step',
  emergencyNumber: '1800 309 9999',
  tollFree: '1800 309 9999',
  internationalHelp: '+91 9999 888 777',
  email: 'care@marengoasiahospitals.com',
  intlEmail: 'international@marengoasiahospitals.com',
  address: 'Marengo Asia Healthcare, Sector 56, Gurugram, Haryana - 122011, India',
};

// Main Desktop Header Navigation Items
export const HEADER_NAV_ITEMS = [
  { label: 'Our Hospital', href: '#hospitals', dropdownType: 'hospitals', hasDropdown: true },
  { label: 'Specialities', href: '#specialties', dropdownType: 'specialties', hasDropdown: true },
  { label: 'Find Doctor', href: '#doctors', dropdownType: null, hasDropdown: false },
  { label: 'Blogs', href: '#blogs', dropdownType: null, hasDropdown: false },
  { label: 'Health Check-Up', href: '#packages', dropdownType: null, hasDropdown: false },
];

// Mega Menu for Our Hospital (Image 1)
export const HOSPITAL_MEGA_MENU = {
  column1: [
    {
      name: 'Ahmedabad',
      href: '#hospitals',
    },
    {
      name: 'Surat',
      href: '#hospitals',
    },
  ],
  column2: [
    {
      name: 'Gurugram',
      href: '#hospitals',
    },
    {
      name: 'Vadodara',
      href: '#hospitals',
    },
  ],
  column3: [
    {
      name: 'Faridabad',
      href: '#hospitals',
    },
    {
      name: 'Saudi Arabia',
      href: '#hospitals',
    },
  ],
  ctaColumn: {
    appointment: {
      title: 'BOOK AN APPOINTMENT',
      description: "Marengo Asia Hospitals is always looking to make things easier for you. Please click on 'Book Now' and fill in the details, we will get back to you.",
      buttonText: 'Book Now',
    },
    findDoctor: {
      title: 'FIND A DOCTOR',
      description: 'Medicines cure diseases but only doctors can cure patients, Click Find Now for the best cure.',
      buttonText: 'Find Now',
      href: '#doctors',
    },
  },
};

// Mega Menu for Specialities (Image 2)
export const SPECIALITIES_MEGA_MENU = {
  centersOfExcellence: {
    title: 'CENTRE OF EXCELLENCE',
    viewAllHref: '#specialties',
    items: [
      {
        name: 'Cancer Care / Oncology',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 2 6 5 6 9c0 4 6 13 6 13s6-9 6-13c0-4-2-7-6-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Cardiac Sciences',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.78" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Gastroenterology',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v4m0 4v8m-4-6a4 4 0 0 0 8 0V8a4 4 0 0 0-8 0v4z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Liver Transplant and Biliary Sciences',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m8 17 4 4 4-4" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Orthopaedics & Joint Replacement',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Renal Sciences',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a5 5 0 0 0-5 5c0 5 5 10 5 15 0-5 5-10 5-15a5 5 0 0 0-5-5z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Neurosciences',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
          </svg>
        ),
        href: '#specialties'
      },
    ],
  },
  keySpecialities: {
    title: 'KEY SPECIALITIES',
    viewAllHref: '#specialties',
    items: [
      {
        name: 'Bone Marrow Transplant',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 16 1.5-1.5M14.5 9.5 16 8M2 15l3 3M19 6l3 3M10 2a8 8 0 0 0-8 8v1a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-1a8 8 0 0 0-8-8Z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Bariatric Surgery',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Clinical Psychology',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Rheumatology',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24" />
            <path d="m14.83 9.17 4.24-4.24" />
            <path d="m14.83 14.83 4.24 4.24" />
            <path d="m9.17 14.83-4.24 4.24" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Diabetic Foot',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14a4 4 0 0 0 4 4h4a6 6 0 0 0 6-6V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H8a4 4 0 0 0-4 4z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Dental',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6 2 9.5.5 3 2 4.5 4 4.5s3.5-1.5 4-4.5c.5-3.5 2-6.5 2-9.5 0-3.5-2.5-6-6-6z" />
          </svg>
        ),
        href: '#specialties'
      },
      {
        name: 'Dermatology',
        icon: (
          <svg className="w-4 h-4 text-[#005BAA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 2 4 4-14 14H4v-4L18 2z" />
            <path d="m14.5 5.5 4 4" />
          </svg>
        ),
        href: '#specialties'
      },
    ],
  },
  procedures: {
    title: 'PROCEDURES',
    viewAllHref: '#specialties',
    items: [
      { name: 'Medical Oncology', href: '#specialties' },
      { name: 'Surgical Oncology', href: '#specialties' },
      { name: 'Hematology Oncology', href: '#specialties' },
      { name: 'Gynecologic Oncology', href: '#specialties' },
      { name: 'Pediatric Oncology', href: '#specialties' },
    ],
  },
};

export const NAV_LINKS = [
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Specialties', href: '#specialties', hasDropdown: true },
  { label: 'Hospitals', href: '#hospitals', hasDropdown: true },
  { label: 'International Patients', href: '#international', hasDropdown: false },
  { label: 'Doctors', href: '#doctors', hasDropdown: false },
  { label: 'Academics & Research', href: '#research', hasDropdown: true },
];

export const QUICK_ACTIONS = [
  {
    id: 'doctor',
    title: 'Find a Doctor',
    subtitle: 'Book consult with top specialists',
    icon: 'UserCheck',
    color: 'bg-[#F37023] hover:bg-[#E05D10]',
    textColor: 'text-white',
    href: '#doctors',
  },
  {
    id: 'specialties',
    title: 'Our Specialties',
    subtitle: '30+ Super-speciality departments',
    icon: 'Stethoscope',
    color: 'bg-[#003B73] hover:bg-[#002D59]',
    textColor: 'text-white',
    href: '#specialties',
  },
  {
    id: 'health-checkup',
    title: 'Book Your Health Checkup',
    subtitle: 'Preventive full-body packages',
    icon: 'ClipboardCheck',
    color: 'bg-[#5B7B12] hover:bg-[#4E6A0F]',
    textColor: 'text-white',
    href: '#packages',
  },
  {
    id: 'hospitals',
    title: 'Our Hospitals',
    subtitle: 'State-of-the-art medical centers',
    icon: 'Building2',
    color: 'bg-[#64748B] hover:bg-[#475569]',
    textColor: 'text-white',
    href: '#hospitals',
  },
];

export const CENTERS_OF_EXCELLENCE = [
  {
    id: 'cardiac',
    title: 'Cardiac Sciences',
    subtitle: 'Heart Failure & Angioplasty',
    stat: '5,50,000+',
    statLabel: 'Patients treated',
    icon: 'Cardiac',
    description: 'Advanced cath labs, minimally invasive cardiac surgery (MICS), TAVI, and heart transplant unit.',
    color: '#003B73',
  },
  {
    id: 'neuro',
    title: 'Neuro Sciences',
    subtitle: 'Brain, Spine & Nerve Care',
    stat: '2,20,000+',
    statLabel: 'Patients treated',
    icon: 'Neuro',
    description: 'Comprehensive neurological care, robotic spinal surgeries, stroke unit & neuro-rehab.',
    color: '#0284C7',
  },
  {
    id: 'cancer',
    title: 'Cancer Care',
    subtitle: 'Precision Radiotherapy & Surgery',
    stat: '2,20,000+',
    statLabel: 'Patients treated',
    icon: 'Cancer',
    description: 'Multidisciplinary tumor board, CyberKnife radiosurgery, immunotherapy & bone marrow transplant.',
    color: '#E11D48',
  },
  {
    id: 'ortho',
    title: 'Orthopedics',
    subtitle: 'Robotic Knee & Hip Replacement',
    stat: '2,000+',
    statLabel: 'Patients treated',
    icon: 'Ortho',
    description: 'AI-assisted robotic joint replacement, sports injury arthroscopy, and complex trauma management.',
    color: '#D97706',
  },
];

export const SPECIALTY_SEARCH_DATA = {
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  doctors: [
    { name: 'Dr Anil K V Minz', specialty: 'Dermatology', department: 'Dermatology & Cosmetology', hospital: 'Marengo Asia Hospital, Gurugram' },
    { name: 'Dr. Vikas Sharma', specialty: 'Oncology', department: 'Medical Oncology & Hematology', hospital: 'Marengo CIMS Hospital, Ahmedabad' },
    { name: 'Dr. Rajesh Patel', specialty: 'Orthopaedics', department: 'Joint Replacement & Arthroscopy', hospital: 'Marengo Asia Hospital, Faridabad' },
    { name: 'Dr. Neha Malhotra', specialty: 'Radiation Oncology', department: 'CyberKnife & Precision Radiotherapy', hospital: 'Marengo Asia Hospital, Gurugram' },
    { name: 'Dr. A. K. Banerjee', specialty: 'Cardiology', department: 'Chief Cardio-Thoracic Surgery', hospital: 'Marengo CIMS Hospital, Ahmedabad' },
    { name: 'Dr. Vivek Malhotra', specialty: 'Neurology', department: 'Neuro-Interventional Surgery', hospital: 'Marengo Asia Hospital, Faridabad' },
    { name: 'Dr. Anya Sharma', specialty: 'Cardiology', department: 'Chief Interventional Cardiology', hospital: 'Marengo Asia Apex, Delhi NCR' },
    { name: 'Dr. Vikram Shah', specialty: 'Orthopaedics', department: 'Robotic Joint Replacement', hospital: 'Marengo CIMS Hospital, Ahmedabad' },
    { name: 'Dr. Sunita Kapoor', specialty: 'Gastroenterology', department: 'Digestive & Liver Sciences', hospital: 'Marengo Super Speciality, Noida' },
    { name: 'Dr. K. S. Rathore', specialty: 'Nephrology', department: 'Kidney Transplant & Renal Sciences', hospital: 'Marengo Asia Hospital, Gurugram' },
    { name: 'Dr. Meenakshi Sundaram', specialty: 'Pediatrics', department: 'Pediatric Intensive Care & Neonatology', hospital: 'Sunshine Global Hospital, Surat' },
    { name: 'Dr. Alok Verma', specialty: 'Pulmonology', department: 'Chest Medicine & Sleep Disorders', hospital: 'Marengo Health Apex, Kolkata' },
    { name: 'Dr. Rohit Gupta', specialty: 'Urology', department: 'Laser Urology & Andrology', hospital: 'Marengo Asia Apex, Delhi NCR' },
    { name: 'Dr. Priya Sengupta', specialty: 'Gynaecology', department: 'Obstetrics, High-Risk Pregnancy & IVF', hospital: 'Marengo Health Apex, Kolkata' },
    { name: 'Dr. Kamal Kishore', specialty: 'ENT', department: 'ENT & Head Neck Surgery', hospital: 'Marengo Asia Hospital, Faridabad' },
    { name: 'Dr. Kiran Bedi Sharma', specialty: 'Endocrinology', department: 'Diabetes, Thyroid & Metabolism', hospital: 'Marengo Asia Hospital, Gurugram' },
    { name: 'Dr. Kaushik Mukherjee', specialty: 'Cardiology', department: 'Cardiac Electrophysiology & Pacemaker', hospital: 'Marengo CIMS Hospital, Ahmedabad' },
    { name: 'Dr. Deepak Joshi', specialty: 'Spine Surgery', department: 'Minimally Invasive Spine & Scoliosis', hospital: 'Marengo Asia Hospital, Gurugram' },
    { name: 'Dr. Sanjay Goel', specialty: 'General Surgery', department: 'Advanced Laparoscopic & GI Surgery', hospital: 'Marengo Asia Hospital, Faridabad' },
    { name: 'Dr. Bhavna Trivedi', specialty: 'Rheumatology', department: 'Arthritis & Autoimmune Diseases', hospital: 'Marengo CIMS Hospital, Ahmedabad' },
    { name: 'Dr. Harish Mehta', specialty: 'Vascular Surgery', department: 'Endovascular & Varicose Veins Laser', hospital: 'Marengo Care Hub, Mumbai' },
  ],
  popular: [
    { label: 'Cardiology', icon: 'Heart', count: '48 Doctors' },
    { label: 'Neurology', icon: 'Brain', count: '32 Doctors' },
    { label: 'Orthopaedics', icon: 'Bone', count: '40 Doctors' },
    { label: 'Oncology', icon: 'ShieldPlus', count: '35 Doctors' },
    { label: 'Gastroenterology', icon: 'Activity', count: '28 Doctors' },
    { label: 'Pediatrics', icon: 'Baby', count: '24 Doctors' },
    { label: 'Nephrology', icon: 'Crosshair', count: '20 Doctors' },
  ],
  dictionary: {
    A: ['Asthma & Allergy', 'Arthritis Care', 'Arrhythmia Management', 'Anaesthesia & Pain Medicine', 'Aneurysm Repair', 'Angioplasty (PTCA)'],
    B: ['Bone Marrow Transplant', 'Brain Tumor Surgery', 'Bariatric & Weight Loss Surgery', 'Bowel Diseases', 'Bi-Plane Angiography'],
    C: ['Cardiology & Angioplasty', 'Cancer Immunotherapy', 'CyberKnife Radiosurgery', 'Cataract & Eye Care', 'Critical Care Medicine', 'Chemotherapy'],
    D: ['Dermatology & Cosmetology', 'Diabetes & Endocrinology', 'Dialysis Care', 'Deep Brain Stimulation', 'Da Vinci Robotic Surgery'],
    E: ['Emergency & Trauma', 'Endocrinology', 'ENT (Ear Nose Throat)', 'Endoscopic Spine Surgery', 'Echocardiography'],
    F: ['Fetal Medicine', 'Fracture & Trauma Clinic', 'Foot & Ankle Surgery', 'Fertility Support', 'Fibroid Embolization'],
    G: ['Gastroenterology', 'General Surgery', 'Gynaec Oncology', 'Genetics & Genomics', 'Gallbladder Stone Surgery'],
    H: ['Heart Transplant', 'Hematology', 'Hepatology (Liver Care)', 'Hernia Repair', 'Hypertension Clinic'],
    I: ['Interventional Cardiology', 'Infectious Diseases', 'IVF & Fertility', 'Intensive Care Unit (ICU)', 'Immunotherapy'],
    J: ['Joint Replacement (Robotic)', 'Juvenile Arthritis', 'Jaw & Maxillofacial Care', 'Jaundice Evaluation'],
    K: ['Kidney Transplant', 'Knee Arthroscopy', 'Keyhole Surgery', 'Kidney Stone Laser', 'Knee Replacement (Robotic)'],
    L: ['Liver Transplant', 'Laparoscopic Surgery', 'Lung Cancer Care', 'Laser Urology', 'Lipoma Excision'],
    M: ['Mother & Child Care', 'Medical Oncology', 'Minimally Invasive Spine', 'Mammography', 'MRI 3T Scanning'],
    N: ['Neurology', 'Neurosurgery', 'Nephrology', 'Neonatology (NICU)', 'Nuclear Medicine', 'Nerve Decompression'],
    O: ['Oncology (Cancer)', 'Orthopaedics', 'Ophthalmology', 'Organ Transplant', 'Oral Surgery', 'Osteoarthritis Care'],
    P: ['Pulmonology', 'Pediatrics', 'Plastic & Reconstructive', 'Psychiatry & Mental Wellness', 'PET-CT Scan', 'Pacemaker Implantation'],
    Q: ['Quality Clinical Audits', 'Quaternary Care Referrals'],
    R: ['Robotic Surgery', 'Radiation Oncology', 'Rheumatology', 'Radiology & Imaging', 'Renal Sciences', 'Rotator Cuff Repair'],
    S: ['Spine Surgery', 'Surgical Oncology', 'Stroke Emergency Unit', 'Sports Medicine', 'Sinus Endoscopy'],
    T: ['TAVI (Aortic Valve)', 'Thoracic Surgery', 'Thyroid Care', 'Trauma Resuscitation', 'Total Knee Replacement'],
    U: ['Urology & Andrology', 'Ultrasound & 4D Scan', 'Uro-Oncology', 'Uterine Fibroids Laser'],
    V: ['Vascular Surgery', 'Varicose Veins Laser', 'Vaccination Clinic', 'VATS Lung Surgery'],
    W: ['Women Health Wellness', 'Wound Care & Hyperbaric Oxygen', 'Weight Management'],
    X: ['X-Ray & Digital Fluoroscopy', 'Xerostomia Treatment'],
    Y: ['Youth & Adolescent Wellness', 'Yellow Fever & Travel Vaccination'],
    Z: ['Zoonotic Disease Care', 'Zenker Diverticulum Surgery'],
    '#': ['24/7 Emergency Care', '3T MRI & High-Speed CT', '128-Slice Cardiac CT'],
  },
};

export const TECHNOLOGIES = [
  {
    id: 'biosensor',
    title: 'Biosensor Technology',
    subtitle: 'Continuous Monitoring',
    description: 'Biosensors help in the continuous monitoring ..',
    image: IMAGES.technologies.biosensor,
    tag: 'Vital Monitoring',
    link: '#',
  },
  {
    id: 'laparoscopic-surgical',
    title: 'Laparoscopic surgical robot',
    subtitle: 'Precision Molecular Imaging',
    description: 'The Laparoscopic Surgical Robot is a cutting-edge robotic...',
    image: IMAGES.technologies.laparoscopic,
    tag: 'Advanced Imaging',
    link: '#',
  },
  {
    id: 'pet-ct',
    title: 'PET-CT Technology',
    subtitle: 'Non-Invasive Radiosurgery',
    description: 'This advanced machine combines two imaging techniques in one...',
    image: IMAGES.technologies.petCt,
    tag: 'Robotic Oncology',
    link: '#',
  },
  {
    id: 'cuvis-joint',
    title: 'CUVIS Joint Robot System',
    subtitle: 'Next-Gen Angiography',
    description: 'CUVIS Fully Active Robotic Joint Replacement System enables precise cutting and milling... ',
    image: IMAGES.technologies.cuvis,
    tag: 'Cardiac & Neuro Suite',
    link: '#',
  },

];

export const INTERNATIONAL_PATIENTS_DATA = {
  heading: 'International Patients',
  subheading: 'World-Class Healthcare Beyond Borders',
  description: 'Marengo Asia Hospitals provide personalized medical care supported by dedicated international patient services—from travel planning to recovery.',
  stats: [
    { target: 3200000, prefix: '', suffix: '+', value: '3,200,000+', label: 'Happy Patients' },
    { target: 30, prefix: '', suffix: '+', value: '30+', label: 'Specialities' },
    { target: 1000, prefix: '', suffix: '+', value: '1,000+', label: 'Doctors' },
  ],
  countries: [
    { code: 'bd', name: 'Bangladesh', image: IMAGES.countries.bd },
    { code: 'np', name: 'Nepal', image: IMAGES.countries.np },
    { code: 'kz', name: 'Kazakhstan', image: IMAGES.countries.kz },
    { code: 'iq', name: 'Iraq', image: IMAGES.countries.iq },
    { code: 'om', name: 'Oman', image: IMAGES.countries.om },
    { code: 'ug', name: 'Uganda', image: IMAGES.countries.ug },
    { code: 'tj', name: 'Tajikistan', image: IMAGES.countries.tj },
    { code: 'mm', name: 'Myanmar', image: IMAGES.countries.mm },
    { code: 'gb', name: 'United Kingdom', image: IMAGES.countries.gb },
    { code: 'us', name: 'United States', image: IMAGES.countries.us },
  ],
  features: [
    'Complimentary Medical Opinion & Quotation within 24 Hours',
    'Visa Invitation Letter & Government Healthcare Facilitation',
    'Dedicated International Patient Lounge & Language Translators',
    'Airport Pickup & Drop with Local SIM and Currency Assistance',
  ],
};

export const HEALTH_PACKAGES = [
  {
    id: 'healthy-heart',
    title: 'Healthy Heart Package',
    subtitle: 'Cardiovascular Care',
    description: 'A comprehensive cardiac screening to assess heart health and identify potential risks early.',
    originalPrice: '₹8,500',
    discountPrice: '₹3,999',
    testsCount: '24 Parameters',
    image: IMAGES.packages.healthyHeart,
    badge: 'Popular',
  },
  {
    id: 'health360',
    title: '360 health Checkup',
    subtitle: 'Whole-Body Diagnostic',
    description: 'Get a complete picture of your health with a 360° Health Check-Up Package designed ...',
    originalPrice: '₹12,000',
    discountPrice: '₹5,499',
    testsCount: '62 Parameters',
    image: IMAGES.packages.health360,
    badge: 'Comprehensive',
  },
  {
    id: 'specialScreening',
    title: 'Special Screening Package',
    subtitle: 'Early Detection Program',
    description: 'A special screening check-up package designed for early detection...',
    originalPrice: '₹15,000',
    discountPrice: '₹6,999',
    testsCount: '32 Parameters',
    image: IMAGES.packages.specialScreening,
    badge: 'Specialized',
  },
  {
    id: 'maternityCare',
    title: 'Maternity Care Package',
    subtitle: 'Mother & Child Care',
    description: 'Comprehensive maternity care designed to support the mother and baby through...',
    originalPrice: '₹9,500',
    discountPrice: '₹4,499',
    testsCount: '28 Parameters',
    image: IMAGES.packages.health360,
    badge: 'Care Package',
  },
];

export const WHY_CHOOSE_US_DATA = {
  heading: 'Why Choose Us',
  subtitle: 'Committed to clinical excellence, compassionate healing, and transparent medical outcomes',
  stats: [
    { value: '32,000,000+', label: 'Patients Healed', icon: 'Users' },
    { value: '10,000+', label: 'Doctors & Caregivers', icon: 'Award' },
    { value: '30+', label: 'Hospitals & Super Speciality Centers', icon: 'Building2' },
    { value: '99.4%', label: 'Clinical Success Rate', icon: 'ShieldCheck' },
  ],
  pillars: [
    {
      title: 'Patient First Culture',
      description: 'Every protocol, decision, and facility is designed around patient comfort, dignity, and rapid recovery.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Global Clinical Standards',
      description: 'NABH and JCI accredited facilities adhering to stringent international infection control measures.',
      icon: 'Sparkles',
    },
    {
      title: 'Cutting-Edge Robotic Platforms',
      description: 'Equipped with Da Vinci Xi, CyberKnife, and Bi-Plane systems for pin-point surgical precision.',
      icon: 'Cpu',
    },
    {
      title: 'Transparent & Ethical Care',
      description: 'Transparent treatment plans, clear cost estimations, and multi-disciplinary tumor board evaluations.',
      icon: 'FileText',
    },
  ],
};

export const PATIENT_STORIES = [
  {
    id: 'video-1',
    type: 'video',
    image: IMAGES.testimonials.patient1,
    videoUrl: 'https://youtu.be/Bv-J4XSRLx4?si=iGzlpHxM2WtVcvDI',
    hasVideo: true,
    badgeIcon: IMAGES.testimonials.smiling,
  },
  {
    id: 'quote-1',
    type: 'quote',
    cardBg: '#FFFAE3',
    rating: 5,
    quote: '"From the doctors to the nursing staff, everyone at Marengo Asia Hospitals was caring, attentive and professional. The treatment was explained clearly, and we felt supported throughout our journey. We are truly grateful for the compassionate care we received."',
    patientName: 'Dipshita Dhar',
    badgeIcon: IMAGES.testimonials.doublesmiling,
  },
  {
    id: 'video-2',
    type: 'video',
    image: IMAGES.testimonials.patient2,
    videoUrl: 'https://youtu.be/Bv-J4XSRLx4?si=iGzlpHxM2WtVcvDI',
    hasVideo: true,
    badgeIcon: IMAGES.testimonials.star,
  },
  {
    id: 'quote-2',
    type: 'quote',
    cardBg: '#EAF3FC',
    rating: 5,
    quote: '"From the moment we arrived, the entire team made us feel comfortable and cared for. The doctors took the time to explain every step of the treatment, while the nursing staff was kind, attentive and supportive throughout."',
    patientName: 'Shibnath Das',
    badgeIcon: IMAGES.testimonials.patient3,
  },
  {
    id: 'video-3',
    type: 'video',
    image: IMAGES.testimonials.patient3,
    videoUrl: 'https://youtu.be/Bv-J4XSRLx4?si=iGzlpHxM2WtVcvDI',
    hasVideo: true,
    badgeIcon: IMAGES.testimonials.smiling,
  },
  {
    id: 'quote-3',
    type: 'quote',
    cardBg: '#FFFAE3',
    rating: 5,
    quote: '"The precision of the treatment and constant reassurance from the senior doctors gave us complete peace of mind. Recovery was remarkably fast!"',
    patientName: 'Rajendra Prasad',
    badgeIcon: IMAGES.testimonials.doublesmiling,
  },
];

export const NEWS_AND_EVENTS = [
  {
    id: 'news-featured',
    title: 'Marengo Asia Hospitals Launches MAIINS',
    author: 'BW Online Bureau',
    date: 'Jul 17, 2025',
    category: 'Innovation & Expansion',
    summary: 'Marengo Asia Hospitals launches MAIINS - Marengo Asia International Institute of Neuro and Spine, uniting cutting-edge robotic neurosurgery and expert neurological care.',
    image: IMAGES.news.main,
    isFeatured: true,
  },
  {
    id: 'news-1',
    title: 'Marengo Asia Hospitals Launches MAIINS',
    author: 'BW Online Bureau',
    date: 'Jul 17, 2025',
    category: 'Conference',
    summary: 'Senior doctors and specialists inaugurate the state-of-the-art neuro-critical care unit with modern monitoring systems.',
    image: IMAGES.news.news1,
  },
  {
    id: 'news-2',
    title: 'Marengo Asia Hospitals Launches MAIINS',
    author: 'BW Online Bureau',
    date: 'Jul 17, 2025',
    category: 'Infrastructure',
    summary: 'New advanced surgical suites and intensive care beds operationalized to expand tertiary emergency care capabilities.',
    image: IMAGES.news.news2,
  },
  {
    id: 'news-3',
    title: 'Marengo Asia Hospitals Launches MAIINS',
    author: 'BW Online Bureau',
    date: 'Jul 17, 2025',
    category: 'Accreditation',
    summary: 'Clinical leadership teams present breakthrough outcomes in robotic precision spine navigation and minimally invasive therapy.',
    image: IMAGES.news.news3,
  },
  {
    id: 'news-4',
    title: 'Marengo Asia Hospitals Launches MAIINS',
    author: 'BW Online Bureau',
    date: 'Jul 17, 2025',
    category: 'Clinical Milestone',
    summary: 'Multi-disciplinary oncology and surgical teams celebrate milestones in complex adult and pediatric restorative surgeries.',
    image: IMAGES.news.news4,
  },
  {
    id: 'news-5',
    title: 'International Oncology Summit: Breakthroughs in Immunotherapy',
    author: 'Healthcare Times',
    date: 'Jun 28, 2025',
    category: 'Conference',
    summary: 'Global oncology pioneers present personalized targeted immunotherapy paradigms at Marengo international medical forum.',
    image: IMAGES.news.news1,
  },
  {
    id: 'news-6',
    title: 'Excellence in Patient Safety & Clinical Quality Recognized',
    author: 'National Health Forum',
    date: 'Jun 12, 2025',
    category: 'Accreditation',
    summary: 'Marengo Asia facilities receive top national safety awards for zero-infection compliance and patient-first initiatives.',
    image: IMAGES.news.news2,
  },
  {
    id: 'news-7',
    title: 'Advanced Cardiac Catheterization Lab Inaugurated',
    author: 'Medical News Network',
    date: 'May 20, 2025',
    category: 'Infrastructure',
    summary: 'Next-generation 3D angiographic imaging lab enhances minimally invasive transcatheter aortic valve interventions.',
    image: IMAGES.news.news3,
  },
  {
    id: 'news-8',
    title: 'Revolutionary Robotic Orthopaedic Joint Replacement Hub',
    author: 'BW Online Bureau',
    date: 'May 04, 2025',
    category: 'Innovation',
    summary: 'AI-guided sub-millimeter joint replacement technology enables same-day mobility for arthritis patients.',
    image: IMAGES.news.news4,
  },
];

export const BLOGS_DATA = [
  {
    id: 'blog-1',
    title: 'What is the ESR Level in Cancer Patients & Key Clinical Significance',
    category: 'Oncology',
    date: '28 Jul 2025',
    readTime: '4 min read',
    author: 'Dr. Anya Sharma',
    excerpt: 'Understanding ESR sedimentation rates and why doctors monitor inflammatory markers during cancer diagnosis and treatment protocols.',
    image: IMAGES.packages.health360,
  },
  {
    id: 'blog-2',
    title: 'Can a Vitamin B12 Deficiency Cause Cardiac & Neurological Issues?',
    category: 'Cardiology',
    date: '28 Jul 2025',
    readTime: '5 min read',
    author: 'Dr. Rajesh Patel',
    excerpt: 'Explore how severe B12 deficiency affects red blood cells, nerve conduction, energy levels, and heart palpitations.',
    image: IMAGES.packages.healthyHeart,
  },
  {
    id: 'blog-3',
    title: '7 Key Things to Steer Clear of for Long-Term Cardiovascular Wellness',
    category: 'Cardiology',
    date: '28 Jul 2025',
    readTime: '6 min read',
    author: 'Dr. Vivek Malhotra',
    excerpt: 'Cardiologists share vital lifestyle mistakes, dietary traps, and subtle stress factors to avoid for optimal cardiac longevity.',
    image: IMAGES.packages.maternityCare,
  },
  {
    id: 'blog-4',
    title: 'Understanding Early Warning Signs in Preventive Health Screenings',
    category: 'Preventive Care',
    date: '24 Jul 2025',
    readTime: '4 min read',
    author: 'Dr. Neha Verma',
    excerpt: 'Comprehensive insights into regular biomarkers and lipid profile monitoring to detect health risks before symptoms manifest.',
    image: IMAGES.packages.specialScreening,
  },
  {
    id: 'blog-5',
    title: 'Robotic Joint Replacement: How Faster Healing Begins on Day One',
    category: 'Orthopaedics',
    date: '18 Jul 2025',
    readTime: '5 min read',
    author: 'Dr. Anand Kumar',
    excerpt: 'Learn how sub-millimeter robotic precision minimizes bone and tissue trauma for rapid post-operative walking.',
    image: IMAGES.packages.health360,
  },
  {
    id: 'blog-6',
    title: 'Brain Health & Cognitive Longevity: Essential Daily Habits',
    category: 'Neurology',
    date: '12 Jul 2025',
    readTime: '4 min read',
    author: 'Dr. Sneha Reddy',
    excerpt: 'Practical evidence-based tips to enhance memory, sleep quality, and neural connectivity across every decade of life.',
    image: IMAGES.packages.maternityCare,
  },
];

export const HOSPITALS_DATA = [
  {
    id: 'ahmedabad',
    name: 'Marengo CIMS Hospital',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'Science City Road, Sola, Ahmedabad',
    beds: '450+ Beds',
    specialties: 'Heart Transplant, Oncology, Robotic Surgery',
    image: IMAGES.news.news1,
    phone: '+91 79 4805 1000',
  },
  {
    id: 'gurgaon',
    name: 'Marengo Asia Hospital',
    city: 'Gurugram',
    state: 'Haryana',
    address: 'Golf Course Extension Road, Sector 56, Gurugram',
    beds: '350+ Beds',
    specialties: 'Neurosciences, Cardiac, Organ Transplant',
    image: IMAGES.news.news1,
    phone: '+91 124 413 1066',
  },
  {
    id: 'faridabad',
    name: 'Marengo Asia Hospital',
    city: 'Faridabad',
    state: 'Delhi NCR',
    address: 'Sector 16, Faridabad, Haryana',
    beds: '325+ Beds',
    specialties: 'Cancer Care, Orthopaedics, Nephrology',
    image: IMAGES.news.news1,
    phone: '+91 129 425 3000',
  },
  {
    id: 'surat',
    name: 'Marengo Specialty Center',
    city: 'Surat',
    state: 'Gujarat',
    address: 'Ring Road, Majura Gate, Surat',
    beds: '200+ Beds',
    specialties: 'Mother & Child, Gastro Sciences, Dialysis',
    image: IMAGES.news.news1,
    phone: '+91 261 270 5000',
  },
  {
    id: 'vadodara',
    name: 'Marengo Asia Hospital',
    city: 'Vadodara',
    state: 'Gujarat',
    address: 'Race Course Road, Vadodara',
    beds: '280+ Beds',
    specialties: 'Robotic Spine, Oncology, Critical Care',
    image: IMAGES.news.news1,
    phone: '+91 265 6622 1000',
  },
  {
    id: 'saudi',
    name: 'Specialized Najran Hospital',
    city: 'Saudi Arabia',
    state: 'Najran',
    address: 'King Abdulaziz Road, Najran, KSA',
    beds: '300+ Beds',
    specialties: 'Cardiac Cath Lab, Urology, Pulmonology',
    image: IMAGES.news.news1,
    phone: '+966 17 522 8888',
  },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Patient Care',
    links: [
      { label: 'Find a Doctor', href: '#doctors' },
      { label: 'Book Appointment', href: '#appointment' },
      { label: 'Centers of Excellence', href: '#specialties' },
      { label: 'International Patients', href: '#international' },
      { label: 'Second Medical Opinion', href: '#second-opinion' },
      { label: 'Emergency Services (1066)', href: 'tel:1066' },
      { label: 'Patient Rights & Responsibilities', href: '#legal' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About Marengo Asia', href: '#about' },
      { label: 'Leadership & Vision', href: '#leadership' },
      { label: 'Awards & Accreditations', href: '#awards' },
      { label: 'Corporate Social Responsibility', href: '#csr' },
      { label: 'Careers at Marengo', href: '#careers' },
      { label: 'Media & Newsroom', href: '#news' },
      { label: 'Bio-Medical Waste Reports', href: '#waste' },
    ],
  },
  {
    title: 'Manage Your Health',
    links: [
      { label: 'Health Check-Up Packages', href: '#packages' },
      { label: 'Patient Portal Login', href: '#login' },
      { label: 'Download Lab Reports', href: '#reports' },
      { label: 'Pay Hospital Bills Online', href: '#pay-online' },
      { label: 'Health Blogs & Insights', href: '#blogs' },
      { label: 'Medical Insurance & TPA Desk', href: '#insurance' },
    ],
  },
  {
    title: 'Our Hospitals',
    links: [
      { label: 'Ahmedabad - CIMS Hospital', href: '#hospitals' },
      { label: 'Gurugram - Sector 56', href: '#hospitals' },
      { label: 'Faridabad - Sector 16', href: '#hospitals' },
      { label: 'Surat - Specialty Clinic', href: '#hospitals' },
      { label: 'Kolkata - Health Apex', href: '#hospitals' },
      { label: 'Noida - Super Speciality', href: '#hospitals' },
      { label: 'Delhi NCR - Apex Hospital', href: '#hospitals' },
    ],
  },
  {
    title: 'Academics & Research',
    links: [
      { label: 'Clinical Trials & Research', href: '#research' },
      { label: 'DNB & Fellowship Programs', href: '#academics' },
      { label: 'Nursing & Allied Training', href: '#nursing' },
      { label: 'Medical Journal Publications', href: '#publications' },
      { label: 'CME & Academic Conferences', href: '#cme' },
    ],
  },
];
