<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { MAX, type SkillGroupKey } from '@/content';
import { useContent } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';

const { t, tm, rt } = useI18n();
const { name } = useContent();

const goodAt = computed(() => {
  const raw = tm('about.goodAt') as unknown[];
  return raw.map((m) => rt(m as Parameters<typeof rt>[0]));
});

const skillGroups = computed(() =>
  (Object.keys(MAX.skills) as SkillGroupKey[]).map((key) => ({
    key,
    label: t(`about.skillGroups.${key}`),
    items: MAX.skills[key],
  })),
);
</script>

<template>
  <section id="about" class="section">
    <SectionHead :title="$t('sections.about')" />
    <div class="about-grid">
      <div class="card about-card" data-reveal>
        <div class="card-head">{{ $t('about.cardReadme') }}</div>
        <div class="card-body md">
          <p class="md-head">{{ $t('about.headings.title') }}</p>
          <p>{{ $t('about.intro') }}</p>
          <p class="md-head">{{ $t('about.headings.howIWork') }}</p>
          <p>{{ $t('about.howIWork') }}</p>
          <p class="md-head">{{ $t('about.headings.goodAt') }}</p>
          <ul>
            <li v-for="line in goodAt" :key="line">{{ line }}</li>
          </ul>
        </div>
      </div>
      <div class="about-side">
        <div class="card about-portrait" data-reveal>
          <div class="card-head">{{ $t('about.cardPortrait') }}</div>
          <div class="card-body">
            <img
              src="/portrait.webp"
              :alt="name"
              width="680"
              height="875"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div class="card" data-reveal>
          <div class="card-head">{{ $t('about.cardStack') }}</div>
          <div class="card-body stack">
            <div v-for="group in skillGroups" :key="group.key" class="stack-group">
              <div class="stack-key">"{{ group.label }}": [</div>
              <div class="stack-val">
                <span v-for="(s, i) in group.items" :key="s" class="stack-item">
                  "{{ s }}"<template v-if="i < group.items.length - 1">,</template>
                </span>
              </div>
              <div class="stack-key">],</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
