export type Social = {
  label: string;
  handle: string;
  url: string;
};

export type SkillGroupKey = 'primary' | 'fluent' | 'approach';

export type Skills = Record<SkillGroupKey, string[]>;

export type ServicePricingTier = {
  id: string;
  range: string;
};

export type ServiceData = {
  id: string;
  pricing: ServicePricingTier[];
};

export type ProjectData = {
  id: string;
  year: string;
  status: 'Live' | 'Archived' | 'OSS' | string;
  stack: string[];
  url?: string;
};

export type ExperienceData = {
  id: string;
  years: string;
};

export type EducationData = {
  id: string;
  years: string;
};

export type ProfileData = {
  name: string;
  email: string;
  socials: Social[];
  skills: Skills;
  services: ServiceData[];
  projects: ProjectData[];
  experience: ExperienceData[];
  education: EducationData[];
};

export const MAX: ProfileData = {
  name: 'Max Ranger',
  email: 'max@ranger.co.at',
  socials: [
    { label: 'Email', handle: 'max@ranger.co.at', url: 'mailto:max@ranger.co.at' },
    { label: 'GitHub', handle: '@max-ranger', url: 'https://github.com/max-ranger' },
    {
      label: 'LinkedIn',
      handle: 'in/maximilian-ranger',
      url: 'https://www.linkedin.com/in/maximilian-ranger-5197a7227',
    },
  ],
  skills: {
    primary: ['.NET', 'C#', 'Vue', 'PostgreSQL', 'Docker'],
    fluent: ['React', 'SQL', 'MySQL', 'MsSQL', 'Flutter', 'React Native'],
    approach: ['Full-stack product work', 'Prototyping', 'Code review', 'Team support'],
  },
  services: [
    {
      id: '01',
      pricing: [
        { id: 'hourly', range: '€75 – €125 / h' },
        { id: 'daily', range: '€600 – €1k / d' },
      ],
    },
    {
      id: '02',
      pricing: [
        { id: 'spike', range: '€600 – €1k' },
        { id: 'week', range: '€3k – €5k' },
        { id: 'twoWeek', range: '€6k – €10k' },
      ],
    },
    {
      id: '03',
      pricing: [
        { id: 'marketing', range: '€2.5k – €10k' },
        { id: 'singlePurpose', range: '€5k – €15k' },
        { id: 'saasMvp', range: '€10k – €25k' },
      ],
    },
    {
      id: '04',
      pricing: [
        { id: 'light', range: '€375 – €625 / month' },
        { id: 'standard', range: '€750 – €1.25k / month' },
        { id: 'heavy', range: '€1.5k – €2.5k / month' },
      ],
    },
  ],
  projects: [
    {
      id: 'p1',
      year: '2025 — now',
      status: 'Live',
      stack: ['.NET', 'Vue', 'Postgres', 'Docker'],
    },
    {
      id: 'p2',
      year: '2024 — now',
      status: 'Live',
      stack: ['.NET', 'Vue', 'MySQL'],
    },
    {
      id: 'p3',
      year: '2024',
      status: 'Live',
      stack: ['.NET', 'Vue', 'Postgres', 'Docker'],
    },
    {
      id: 'p4',
      year: '2026',
      status: 'OSS',
      stack: ['Vue 3', 'Vite', 'TypeScript', 'CSS'],
      url: 'https://ranger.ac',
    },
    {
      id: 'p5',
      year: '2023 — 2024',
      status: 'Live',
      stack: ['.NET', 'Blazor', 'MSSQL'],
    },
    {
      id: 'p6',
      year: '2022 — 2023',
      status: 'Live',
      stack: ['.NET', 'Blazor', 'MSSQL'],
    },
  ],
  experience: [
    { id: 'codebeam', years: 'Jun 2024 — now' },
    { id: 'countItFulltime', years: 'Oct 2022 — Apr 2024' },
    { id: 'countItIntern', years: 'May 2022 — Sep 2022' },
    { id: 'fhTutor', years: 'Oct 2019 — Jul 2020' },
  ],
  education: [
    { id: 'fhHagenberg', years: '2018 — 2022' },
    { id: 'wuVienna', years: '2015 — 2018' },
    { id: 'matura', years: '2006 — 2014' },
  ],
};

export const ACCENTS = {
  gold: '#e5b94a',
  forest: '#3a7a6b',
  teal: '#4ba89a',
} as const;
