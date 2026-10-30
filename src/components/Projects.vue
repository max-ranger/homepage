<script setup lang="ts">
import { computed } from 'vue';
import { useContent } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';

const { projects } = useContent();

const own = computed(() => projects.value.filter((p) => p.group === 'own'));
const work = computed(() => projects.value.filter((p) => p.group === 'work'));

const hostnameOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};
</script>

<template>
  <section id="projects" class="section">
    <SectionHead :title="$t('sections.projects')" />
    <h3 class="section-hint">// {{ $t('projects.groups.own') }}</h3>
    <div class="proj-grid">
      <article
        v-for="p in own"
        :key="p.id"
        class="proj"
        :class="{ 'proj-linked': !!p.url }"
        data-reveal
      >
        <div class="proj-head">
          <span class="proj-title">{{ p.title }}</span>
          <span class="badge" :class="p.statusKey">● {{ p.statusLabel }}</span>
        </div>
        <div class="proj-meta">
          <span>{{ p.year }}</span>
          <span>·</span>
          <span>{{ p.kind }}</span>
        </div>
        <p class="proj-desc">{{ p.desc }}</p>
        <div class="proj-stack">
          <span v-for="s in p.stack" :key="s">{{ s }}</span>
        </div>
        <a
          v-if="p.url"
          class="proj-link"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ hostnameOf(p.url) }} ↗</a>
      </article>
    </div>
    <h3 class="section-hint work-head">// {{ $t('projects.groups.work') }}</h3>
    <div class="work-list">
      <article v-for="p in work" :key="p.id" class="work-row" data-reveal>
        <div class="work-head-row">
          <h4>{{ p.title }} <span>@ {{ p.org }}</span></h4>
          <span class="work-year">{{ p.year }}</span>
        </div>
        <p>{{ p.desc }}</p>
        <div class="work-stack">{{ p.stack.join(' · ') }}</div>
      </article>
    </div>
  </section>
</template>
