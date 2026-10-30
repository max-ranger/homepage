import { computed, type ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { MAX, type PriceUnit, type ProjectData, type ProjectStatus, type ServiceData } from '@/content';

export type LocalizedService = {
  id: string;
  title: string;
  desc: string;
  fromLabel: string;
  details: string;
  included: string[];
  pricing: { id: string; label: string; range: string }[];
  delivery: string;
  continuation?: string;
};

export type LocalizedProject = {
  id: string;
  group: ProjectData['group'];
  title: string;
  year: string;
  kind?: string;
  desc: string;
  stack: string[];
  statusKey?: ProjectStatus;
  statusLabel?: string;
  url?: string;
  org?: string;
};

export type LocalizedExperience = {
  id: string;
  role: string;
  org: string;
  years: string;
  yearsShort: string;
  note: string;
  current: boolean;
};

export type LocalizedEducation = {
  id: string;
  degree: string;
  org: string;
  years: string;
  yearsShort: string;
  note: string;
};

export function useContent() {
  const { t, te, tm, rt, locale } = useI18n();

  // Prices keep a decimal point in content.ts. German reads them with a comma.
  const formatPrice = (price: string, unit?: PriceUnit): string => {
    const amount = locale.value === 'de' ? price.replace(/\./g, ',') : price;
    return unit ? `${amount} / ${t(`services.units.${unit}`)}` : amount;
  };

  const services: ComputedRef<LocalizedService[]> = computed(() =>
    MAX.services.map((s: ServiceData) => {
      const includedRaw = tm(`services.entries.${s.id}.included`) as unknown[];
      const continuationKey = `services.entries.${s.id}.continuation`;
      return {
        id: s.id,
        title: t(`services.entries.${s.id}.title`),
        desc: t(`services.entries.${s.id}.desc`),
        fromLabel: t('services.from', { price: formatPrice(s.from.price, s.from.unit) }),
        details: t(`services.entries.${s.id}.details`),
        included: includedRaw.map((m) => rt(m as Parameters<typeof rt>[0])),
        pricing: s.pricing.map((tier) => ({
          id: tier.id,
          label: t(`services.entries.${s.id}.pricing.${tier.id}`),
          range: formatPrice(tier.range, tier.unit),
        })),
        delivery: t(`services.entries.${s.id}.delivery`),
        continuation: te(continuationKey) ? t(continuationKey) : undefined,
      };
    }),
  );

  const projects: ComputedRef<LocalizedProject[]> = computed(() =>
    MAX.projects.map((p: ProjectData) => ({
      id: p.id,
      group: p.group,
      title: t(`projects.entries.${p.id}.title`),
      kind: te(`projects.entries.${p.id}.kind`) ? t(`projects.entries.${p.id}.kind`) : undefined,
      desc: t(`projects.entries.${p.id}.desc`),
      year: p.year,
      stack: p.stack,
      statusKey: p.status,
      statusLabel: p.status ? t(`projects.status.${p.status}`) : undefined,
      url: p.url,
      org: p.org,
    })),
  );

  const experience: ComputedRef<LocalizedExperience[]> = computed(() =>
    MAX.experience.map((e) => ({
      id: e.id,
      role: t(`experience.entries.${e.id}.role`),
      org: t(`experience.entries.${e.id}.org`),
      years: t(`experience.entries.${e.id}.years`),
      yearsShort: t(`experience.entries.${e.id}.yearsShort`),
      note: t(`experience.entries.${e.id}.note`),
      current: !!e.current,
    })),
  );

  const education: ComputedRef<LocalizedEducation[]> = computed(() =>
    MAX.education.map((e) => ({
      id: e.id,
      degree: t(`education.entries.${e.id}.degree`),
      org: t(`education.entries.${e.id}.org`),
      years: t(`education.entries.${e.id}.years`),
      yearsShort: t(`education.entries.${e.id}.yearsShort`),
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
