<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Locale } from '@/i18n';
import type { ThemeMode } from '@/composables/useTheme';

defineProps<{
  theme: ThemeMode;
  lang: Locale;
}>();

defineEmits<{
  toggleTheme: [];
  toggleLang: [];
  palette: [];
}>();

const time = ref(new Date());
let intervalId: ReturnType<typeof setInterval> | null = null;

const formatted = computed(() => {
  const t = time.value;
  return [t.getHours(), t.getMinutes(), t.getSeconds()]
    .map((n) => n.toString().padStart(2, '0'))
    .join(':');
});

const offset = computed(() => {
  const minutesFromUtc = -time.value.getTimezoneOffset();
  const sign = minutesFromUtc >= 0 ? '+' : '-';
  const abs = Math.abs(minutesFromUtc);
  const hh = Math.floor(abs / 60)
    .toString()
    .padStart(2, '0');
  const mm = (abs % 60).toString().padStart(2, '0');
  return `${sign}${hh}:${mm}`;
});

onMounted(() => {
  intervalId = setInterval(() => (time.value = new Date()), 1000);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="topbar">
    <div class="topbar-l">
      <span class="dot dot-red" />
      <span class="dot dot-amber" />
      <span class="dot dot-green" />
      <span class="topbar-path">max@dev ~ % <span class="cursor">_</span></span>
    </div>
    <div class="topbar-c">{{ $t('topbar.domain') }}</div>
    <div class="topbar-r">
      <span>{{ formatted }} {{ offset }}</span>
      <button
        class="kbd"
        data-cursor
        :title="$t('topbar.paletteTooltip')"
        @click="$emit('palette')"
      >
        ⌘ K
      </button>
      <button
        class="iconbtn"
        data-cursor
        :title="$t('topbar.languageTooltip', { lang: lang.toUpperCase() })"
        @click="$emit('toggleLang')"
      >
        {{ lang.toUpperCase() }}
      </button>
      <button
        class="iconbtn"
        data-cursor
        :title="$t('topbar.themeTooltip', { theme })"
        @click="$emit('toggleTheme')"
      >
        ◐
      </button>
    </div>
  </div>
</template>
