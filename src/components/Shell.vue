<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { MAX } from '@/content';
import { useCommandPalette, type Command } from '@/composables/useCommandPalette';
import { useLanguage } from '@/composables/useLanguage';
import { useReveals } from '@/composables/useReveals';
import { useTheme } from '@/composables/useTheme';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import CustomCursor from '@/components/CustomCursor.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Hero from '@/components/Hero.vue';
import LegalDialog from '@/components/LegalDialog.vue';
import Palette from '@/components/Palette.vue';
import Projects from '@/components/Projects.vue';
import Services from '@/components/Services.vue';
import StatusFooter from '@/components/StatusFooter.vue';
import TopBar from '@/components/TopBar.vue';

const rootRef = ref<HTMLElement | null>(null);
const scrollRef = ref<HTMLElement | null>(null);

const { theme, toggle: toggleTheme } = useTheme(rootRef);
const { lang, toggle: toggleLang } = useLanguage();
const { t } = useI18n();
useReveals(scrollRef, [theme, lang]);

const scrollTo = (selector: string) => {
  const el = scrollRef.value?.querySelector(selector);
  if (el instanceof HTMLElement) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const commands = computed<Command[]>(() => [
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.about.label'),
    hint: t('palette.items.about.hint'),
    action: () => scrollTo('#about'),
  },
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.projects.label'),
    hint: t('palette.items.projects.hint'),
    action: () => scrollTo('#projects'),
  },
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.services.label'),
    hint: t('palette.items.services.hint'),
    action: () => scrollTo('#services'),
  },
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.experience.label'),
    hint: t('palette.items.experience.hint'),
    action: () => scrollTo('#experience'),
  },
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.education.label'),
    hint: t('palette.items.education.hint'),
    action: () => scrollTo('#education'),
  },
  {
    group: t('palette.groups.nav'),
    label: t('palette.items.contact.label'),
    hint: t('palette.items.contact.hint'),
    action: () => scrollTo('#contact'),
  },
  {
    group: t('palette.groups.sys'),
    label: t('palette.items.theme.label'),
    hint: theme.value,
    action: toggleTheme,
  },
  {
    group: t('palette.groups.sys'),
    label: t('palette.items.language.label'),
    hint: lang.value.toUpperCase(),
    action: toggleLang,
  },
  {
    group: t('palette.groups.sys'),
    label: t('palette.items.mailto.label'),
    hint: MAX.email,
    action: () => {
      window.location.href = `mailto:${MAX.email}`;
    },
  },
  {
    group: t('palette.groups.sys'),
    label: t('palette.items.legal.label'),
    hint: t('palette.items.legal.hint'),
    action: () => {
      legalOpen.value = true;
    },
  },
]);

const legalOpen = ref(false);
const closeLegal = () => {
  legalOpen.value = false;
};

const palette = useCommandPalette(commands);

const openPalette = () => {
  palette.open.value = true;
  palette.query.value = '';
  palette.idx.value = 0;
};
</script>

<template>
  <div ref="rootRef" class="root">
    <CustomCursor :get-root="() => rootRef" />
    <TopBar
      :theme="theme"
      :lang="lang"
      @toggle-theme="toggleTheme"
      @toggle-lang="toggleLang"
      @palette="openPalette"
    />
    <div ref="scrollRef" class="scroll">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Education />
      <Contact />
      <StatusFooter @open-legal="legalOpen = true" />
    </div>
    <Palette
      v-model:open="palette.open.value"
      v-model:query="palette.query.value"
      v-model:idx="palette.idx.value"
      :filtered="palette.filtered.value"
    />
    <LegalDialog :open="legalOpen" @close="closeLegal" />
  </div>
</template>
