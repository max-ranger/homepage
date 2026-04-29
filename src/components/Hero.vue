<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';
import HeroRipple from '@/components/HeroRipple.vue';

const { name, email, location, languages } = useContent();

const FULL = 'whoami';
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typed = ref(prefersReducedMotion ? FULL : '');
let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  if (prefersReducedMotion) return;
  let i = 0;
  intervalId = setInterval(() => {
    i++;
    typed.value = FULL.substring(0, i);
    if (i >= FULL.length && intervalId) clearInterval(intervalId);
  }, 110);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <section class="hero">
    <HeroRipple :cell-size="36" />
    <div class="hero-inner">
      <div class="prompt">
        <span class="prompt-user">max@dev</span>
        <span class="prompt-sep">:</span>
        <span class="prompt-path">~</span>
        <span class="prompt-sep">$</span>
        <span class="prompt-cmd">{{ typed }}<span class="blink">▊</span></span>
      </div>

      <h1 class="hero-title">
        <span>{{ name }}</span>
        <span class="hero-role">{{ $t('hero.titleSuffix') }}</span>
      </h1>

      <div class="hero-desc">
        <p data-reveal>{{ $t('hero.para1') }}</p>
        <p data-reveal>{{ $t('hero.para2') }}</p>
      </div>

      <dl class="hero-kv" data-reveal>
        <dt>{{ $t('hero.kv.location') }}</dt>
        <dd>{{ location }}</dd>
        <dt>{{ $t('hero.kv.status') }}</dt>
        <dd><span class="badge live">{{ $t('hero.statusValue') }}</span></dd>
        <dt>{{ $t('hero.kv.stack') }}</dt>
        <dd>.NET · C# · Vue · React · Tailwind · Postgres · Blazor</dd>
        <dt>{{ $t('hero.kv.languages') }}</dt>
        <dd>{{ languages.join(' · ') }}</dd>
        <dt>{{ $t('hero.kv.reach') }}</dt>
        <dd>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </dd>
      </dl>

      <div class="hero-hint">
        <kbd>⌘</kbd><kbd>K</kbd> <span>{{ $t('hero.hint') }}</span>
      </div>
    </div>
  </section>
</template>
