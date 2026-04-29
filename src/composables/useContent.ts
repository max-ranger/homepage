import { computed, type ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { MAX, type ProjectData, type ServiceData } from '@/content';

export type LocalizedService = {
  id: string;
  title: string;
  flowLabel: string;
  desc: string;
  price: string;
  details: string;
  included: string[];
  pricing: { id: string; label: string; range: string }[];
  delivery: string;
  continuation?: string;
};

export type LocalizedProject = {
  id: string;
  title: string;
  year: string;
  kind: string;
  desc: string;
  stack: string[];
  status: string;
  url?: string;
};

export type LocalizedExperience = {
  id: string;
  role: string;
  org: string;
  years: string;
  note: string;
};

export type LocalizedEducation = {
  id: string;
  degree: string;
  org: string;
  years: string;
  note: string;
};

export function useContent() {
  const { t, te, tm, rt } = useI18n();

  const services: ComputedRef<LocalizedService[]> = computed(() =>
    MAX.services.map((s: ServiceData) => {
      const includedRaw = tm(`services.entries.${s.id}.included`) as unknown[];
      const continuationKey = `services.entries.${s.id}.continuation`;
      return {
        id: s.id,
        title: t(`services.entries.${s.id}.title`),
        flowLabel: t(`services.entries.${s.id}.flowLabel`),
        desc: t(`services.entries.${s.id}.desc`),
        price: t(`services.entries.${s.id}.price`),
        details: t(`services.entries.${s.id}.details`),
        included: includedRaw.map((m) => rt(m as Parameters<typeof rt>[0])),
        pricing: s.pricing.map((tier) => ({
          id: tier.id,
          label: t(`services.entries.${s.id}.pricing.${tier.id}`),
          range: tier.range,
        })),
        delivery: t(`services.entries.${s.id}.delivery`),
        continuation: te(continuationKey) ? t(continuationKey) : undefined,
      };
    }),
  );

  const projects: ComputedRef<LocalizedProject[]> = computed(() =>
    MAX.projects.map((p: ProjectData) => ({
      id: p.id,
      title: t(`projects.entries.${p.id}.title`),
      kind: t(`projects.entries.${p.id}.kind`),
      desc: t(`projects.entries.${p.id}.desc`),
      year: p.year,
      stack: p.stack,
      status: p.status,
      url: p.url,
    })),
  );

  const experience: ComputedRef<LocalizedExperience[]> = computed(() =>
    MAX.experience.map((e) => ({
      id: e.id,
      role: t(`experience.entries.${e.id}.role`),
      org: t(`experience.entries.${e.id}.org`),
      years: e.years,
      note: t(`experience.entries.${e.id}.note`),
    })),
  );

  const education: ComputedRef<LocalizedEducation[]> = computed(() =>
    MAX.education.map((e) => ({
      id: e.id,
      degree: t(`education.entries.${e.id}.degree`),
      org: t(`education.entries.${e.id}.org`),
      years: e.years,
      note: t(`education.entries.${e.id}.note`),
    })),
  );

  const location = computed(() => t('hero.location'));
  const languages = computed(() => tm('hero.languages') as string[]);

  return {
    name: MAX.name,
    email: MAX.email,
    socials: MAX.socials,
    skills: MAX.skills,
    location,
    languages,
    services,
    projects,
    experience,
    education,
  };
}
