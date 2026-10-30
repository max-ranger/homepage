export type Social = {
  label: string;
  handle: string;
  url: string;
};

export type SkillGroupKey = 'daily' | 'also';

export type Skills = Record<SkillGroupKey, string[]>;

export type PriceUnit = 'hour' | 'day' | 'month';

export type ServicePricingTier = {
  id: string;
  range: string;
  unit?: PriceUnit;
};

export type ServiceData = {
  id: string;
  from: { price: string; unit?: PriceUnit };
  pricing: ServicePricingTier[];
};

export type ProjectStatus = 'live' | 'testing' | 'building' | 'daily';

export type ProjectData = {
  id: string;
  group: 'own' | 'work';
  year: string;
  stack: string[];
  url?: string;
  status?: ProjectStatus;
  org?: string;
};

export type ExperienceData = {
  id: string;
  current?: boolean;
};

export type EducationData = {
  id: string;
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
  email: 'max@ranger.ac',
  socials: [
    { label: 'GitHub', handle: '@max-ranger', url: 'https://github.com/max-ranger' },
    {
      label: 'LinkedIn',
      handle: 'in/maximilian-ranger',
      url: 'https://www.linkedin.com/in/maximilian-ranger-5197a7227',
    },
  ],
  skills: {
    daily: ['.NET', 'C#', 'Vue', 'TypeScript', 'PostgreSQL', 'Flutter', 'Dart', 'Docker'],
    also: ['React', 'Hono', 'Zitadel', 'SQL Server', 'MySQL', 'CI/CD'],
  },
  services: [
    {
      id: '01',
      from: { price: '€75', unit: 'hour' },
      pricing: [
        { id: 'hourly', range: '€75-125', unit: 'hour' },
        { id: 'daily', range: '€600-1k', unit: 'day' },
      ],
    },
    {
      id: '02',
      from: { price: '€600' },
      pricing: [
        { id: 'spike', range: '€600-1k' },
        { id: 'week', range: '€3k-5k' },
        { id: 'twoWeek', range: '€6k-10k' },
      ],
    },
    {
      id: '03',
      from: { price: '€2.5k' },
      pricing: [
        { id: 'marketing', range: '€2.5k-10k' },
        { id: 'singlePurpose', range: '€5k-15k' },
        { id: 'saasMvp', range: '€10k-25k' },
      ],
    },
    {
      id: '04',
      from: { price: '€375', unit: 'month' },
      pricing: [
        { id: 'light', range: '€375-625', unit: 'month' },
        { id: 'standard', range: '€750-1.25k', unit: 'month' },
        { id: 'heavy', range: '€1.5k-2.5k', unit: 'month' },
      ],
    },
  ],
  projects: [
    {
      id: 'argos',
      group: 'own',
      year: '2026',
      status: 'live',
      stack: ['.NET', 'Vue', 'Postgres', 'Zitadel'],
      url: 'https://argos.ranger.ac',
    },
    {
      id: 'whk',
      group: 'own',
      year: '2026',
      status: 'live',
      stack: ['Vue', 'Hono', 'TypeScript', 'Docker'],
      url: 'https://welserhundesportklub.at',
    },
    {
      id: 'pegasus',
      group: 'own',
      year: '2026',
      status: 'testing',
      stack: ['Flutter', 'Dart', 'Supabase'],
    },
    {
      id: 'cerberus',
      group: 'own',
      year: '2026',
      status: 'building',
      stack: ['.NET', 'Vue', 'Postgres', 'Zitadel'],
    },
    {
      id: 'manticore',
      group: 'own',
      year: '2026',
      status: 'building',
      stack: ['.NET', 'Vue', 'Postgres'],
    },
    {
      id: 'kitsune',
      group: 'own',
      year: '2026',
      status: 'daily',
      stack: ['Claude Code', 'Bash'],
    },
    {
      id: 'invoice',
      group: 'work',
      org: 'codebeam',
      year: '2025',
      stack: ['.NET', 'Vue', 'Postgres', 'Docker'],
    },
    {
      id: 'energy',
      group: 'work',
      org: 'codebeam',
      year: '2025-2026',
      stack: ['.NET', 'Vue', 'MySQL'],
    },
    {
      id: 'marketplace',
      group: 'work',
      org: 'codebeam',
      year: '2025',
      stack: ['.NET', 'Vue', 'Postgres', 'Docker'],
    },
    {
      id: 'timeTracking',
      group: 'work',
      org: 'COUNT IT',
      year: '2023-2024',
      stack: ['.NET', 'Blazor', 'SQL Server'],
    },
  ],
  experience: [
    { id: 'cads', current: true },
    { id: 'codebeam' },
    { id: 'countItFulltime' },
    { id: 'countItIntern' },
    { id: 'fhTutor' },
  ],
  education: [{ id: 'fhHagenberg' }, { id: 'wuVienna' }, { id: 'matura' }],
};

export const ACCENTS = {
  gold: '#e5b94a',
  forest: '#3a7a6b',
  teal: '#4ba89a',
} as const;
