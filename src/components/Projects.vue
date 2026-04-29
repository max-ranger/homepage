<script setup lang="ts">
import { useContent } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';

const { projects } = useContent();

const pad2 = (n: number) => String(n).padStart(2, '0');

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
    <SectionHead
      tag="// 02"
      :title="$t('sections.projects')"
      :sub="$t('projects.sub', { count: projects.length })"
    />
    <div class="proj-grid">
      <component
        :is="p.url ? 'a' : 'article'"
        v-for="(p, i) in projects"
        :key="p.id"
        :href="p.url ?? null"
        :target="p.url ? '_blank' : null"
        :rel="p.url ? 'noopener noreferrer' : null"
        :tabindex="p.url ? null : 0"
        class="proj"
        :class="{ 'proj-linked': !!p.url }"
        data-reveal
        data-cursor
      >
        <div class="proj-head">
          <span class="proj-idx">[{{ pad2(i + 1) }}]</span>
          <span class="proj-title">{{ p.title }}</span>
          <span class="badge" :class="p.status.toLowerCase()">● {{ p.status }}</span>
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
        <div class="proj-peek">
          <div class="proj-peek-row">
            <span class="proj-peek-label">{{ $t('projects.peek.project') }}</span>
            <span class="proj-peek-title">{{ p.title }}</span>
          </div>
          <div class="proj-peek-row">
            <span class="proj-peek-label">{{ $t('projects.peek.status') }}</span>
            <span class="badge" :class="p.status.toLowerCase()">● {{ p.status }}</span>
          </div>
          <div class="proj-peek-row">
            <span class="proj-peek-label">{{ $t('projects.peek.stack') }}</span>
            <span class="proj-peek-stack">{{ p.stack.join(' · ') }}</span>
          </div>
          <div v-if="p.url" class="proj-peek-cta">
            {{ $t('projects.peek.visit', { host: hostnameOf(p.url) }) }}
          </div>
          <div v-else class="proj-peek-cta proj-peek-cta-muted">
            {{ $t('projects.peek.private') }}
          </div>
        </div>
      </component>
    </div>
  </section>
</template>
