// ACES Centralized Configuration & Content
// Placeholders are explicitly formatted as requested and easily customizable.

export interface TeamMember {
  id: string;
  number: string;
  role: string;
  name: string;
  subtitle: string;
  bio: string;
  category: 'core' | 'committee' | 'advisors';
}

export interface ClubEvent {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  isFeatured?: boolean;
  subEvents?: {
    title: string;
    description: string;
  }[];
}

export const ACES_PLACEHOLDERS = {
  // Placeholders as explicitly specified in requirements
  LOGO: '[ACES_LOGO]',
  REGISTRATION_LINK: '[REGISTRATION_LINK]',
  INSTAGRAM_LINK: '[INSTAGRAM_LINK]',
  LINKEDIN_LINK: '[LINKEDIN_LINK]',
  EMAIL: '[ACES_EMAIL]',
};

export const ACES_INFO = {
  shortName: 'ACES',
  fullName: 'Association of Computer Engineering Students',
  department: 'Department of Computer Engineering',
  tagline: 'CODE. CONNECT. CREATE.',
  alternateTagline: 'WHERE IDEAS MEET TECHNOLOGY.',
  heroTagline: 'CODE. CONNECT. CREATE.',
  registrationDeadline: '17 • 08 • 2026',
  registrationRawDate: '2026-08-15',
  copyrightYear: '2026',
  technicalTeamCredit: 'Built by the ACES Technical Team',
};

export const ABOUT_ACES_TEXT = {
  paragraph: `Association of Computer Engineering Students (ACES) – SAOE is the official student organization of the Computer Engineering Department at Sinhgad Academy of Engineering, Pune.                     
              By the Students, For the Students 
 Code • Connect  • Create
                Thriving Through Connections.
                
                HOD/ACES Staff Coordinator - Mahendra Nivangune Sir`,
  highlightPhrases: [
    'Code',
    'Connect ',
    'Create',
    'ub',
    'By the Students',
    'For the Students',
    'experiment',
    'grow together',
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '01',
    number: '01',
    role: 'PRESIDENT',
    name: 'Tejas Dhamane',
    subtitle: 'The driving force of ACES.',
    bio: 'Leads with vision, brings people together, and turns ideas into action.',
    category: 'core',
  },
  {
    id: '02',
    number: '02',
    role: 'VICE PRESIDENT',
    name: 'Ayush Pandey',
    subtitle: 'The backbone of leadership.',
    bio: 'Supports the President, coordinates teams, and keeps the club moving forward.',
    category: 'core',
  },
  {
    id: '03',
    number: '03',
    role: 'SECRETARY',
    name: 'Aangi Siroya',
    subtitle: 'The voice behind the scenes.',
    bio: 'Keeps communication, documentation, and coordination organized and on point.',
    category: 'core',
  },
  {
    id: '04',
    number: '04',
    role: 'TREASURER COMMITTEE HEAD',
    name: 'Mayank Pawar',
    subtitle: 'The guardian of the funds.',
    bio: 'Manages finances, budgets, and resources with transparency and responsibility.',
    category: 'committee',
  },
  {
    id: '05',
    number: '05',
    role: 'SOCIAL MEDIA COMMITTEE HEAD',
    name: 'Bhumika Patil',
    subtitle: 'The digital face of ACES.',
    bio: 'Creates, curates, and delivers content that keeps the community connected and engaged.',
    category: 'committee',
  },
  {
    id: '06',
    number: '06',
    role: 'TECHNICAL COMMITTEE HEAD',
    name: 'Abhishek Nawale',
    subtitle: 'Where ideas meet code.',
    bio: 'Leads technical initiatives, projects, workshops, and everything tech at ACES.',
    category: 'committee',
  },
  {
    id: '07',
    number: '07',
    role: 'CULTURAL COMMITTEE HEAD',
    name: 'Yash Mahajan',
    subtitle: 'Keeping the culture alive.',
    bio: 'Brings creativity, celebration, and unforgettable experiences to the ACES community.',
    category: 'committee',
  },
  {
    id: '08',
    number: '08',
    role: 'CREATIVITY COMMITTEE HEAD',
    name: 'Rutuja Pisal',
    subtitle: 'Ideas without limits.',
    bio: 'Turns imagination into innovative concepts, visuals, campaigns, and experiences.',
    category: 'committee',
  },
  {
    id: '09',
    number: '09',
    role: 'SUPERVISION COMMITTEE HEAD',
    name: 'Megha Yadav',
    subtitle: 'Keeping everything on track.',
    bio: 'Oversees activities, teams, and execution to ensure things run smoothly.',
    category: 'committee',
  },
  {
    id: '10',
    number: '10',
    role: 'REGULATION COMMITTEE HEAD',
    name: 'Tanmay Bhapkar',
    subtitle: 'The standard-setter.',
    bio: 'Maintains discipline, fairness, and consistency across club activities and initiatives.',
    category: 'committee',
  },
  {
    id: '11',
    number: '11',
    role: 'SPORTS COMMITTEE HEAD',
    name: 'Manas Doltade',
    subtitle: 'Bringing the competitive spirit.',
    bio: 'Leads sports activities that build teamwork, energy, and a healthy sense of competition.',
    category: 'committee',
  },
  {
    id: '12',
    number: '12',
    role: 'SOCIAL WELFARE COMMITTEE HEAD',
    name: 'Snehal Gavhane',
    subtitle: 'Tech with a purpose.',
    bio: 'Drives initiatives that give back to the community and create a positive social impact.',
    category: 'committee',
  },
  {
    id: '13',
    number: '13',
    role: 'COMMITTEE ADVISORS HEAD',
    name: 'Hetavi Modi',
    subtitle: 'The experience behind the vision.',
    bio: 'Guides committees with insight, mentorship, and strategic direction.',
    category: 'advisors',
  },
];

export const EVENTS: ClubEvent[] = [
  {
    id: 'fe-induction',
    number: 'EVENT 01',
    title: 'FE INDUCTION',
    tagline: 'New faces. New beginnings.',
    description:
      'A warm welcome to our first-year students as they step into the world of Computer Engineering and become a part of the ACES family.',
  },
  {
    id: 'teachers-day',
    number: 'EVENT 02',
    title: "TEACHER'S DAY",
    tagline: 'Celebrating the minds that shape ours.',
    description:
      'A day dedicated to appreciating our teachers, mentors, and the people who guide us beyond textbooks and classrooms.',
  },
  {
    id: 'engineers-day',
    number: 'EVENT 03',
    title: "ENGINEER'S DAY",
    tagline: 'Celebrating the builders of tomorrow.',
    description:
      'A tribute to the spirit of engineering, innovation, problem-solving, and the people who turn ideas into reality.',
  },
  {
    id: 'techtonic',
    number: 'EVENT 04',
    title: 'TECHTONIC',
    tagline: 'Department-wide Showdown',
    description:
      "Techtonic is ACES' ultimate department-wide showdown, bringing students together through creative decorations, teamwork, and some serious competitive energy.",
    isFeatured: true,
    subEvents: [
      {
        title: 'BOX CRICKET',
        description: 'Fast-paced cricket, big energy, and even bigger rivalries.',
      },
      {
        title: 'BLIND CODER',
        description: 'A coding challenge where logic, memory, and problem-solving skills take center stage.',
      },
    ],
  },
  {
    id: 'farewell',
    number: 'EVENT 05',
    title: 'FAREWELL',
    tagline: 'One last chapter. A lifetime of memories.',
    description:
      'A celebration of the graduating batch, honoring their journey, achievements, friendships, and the legacy they leave behind at ACES.',
  },
];

export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    title: 'INSTAGRAM',
    handle: 'ACES',
    url: 'https://www.instagram.com/saoeaces/',
    icon: 'instagram',
    description: 'Follow our official handle for event updates & highlights',
  },

  {
    id: 'linkedin',
    title: 'LINKEDIN',
    handle: 'ACES — Association of Computer Engineering Students',
    url: 'https://www.linkedin.com/company/saoeaces/',
    icon: 'linkedin',
    description: 'Connect with our professional developer & alumni network',
  },

  {
    id: 'email',
    title: 'EMAIL',
    handle: 'aces.sae@sinhgad.edu',
    url: 'mailto:aces.sae@sinhgad.edu',
    icon: 'email',
    description: 'Reach out directly for inquiries, sponsorship & collaborations',
  },
];
