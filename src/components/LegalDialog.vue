<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFocusTrap } from '@/composables/useFocusTrap';

export type LegalKind = 'impressum' | 'privacy';

const props = defineProps<{
  kind: LegalKind | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const dialogRef = ref<HTMLElement | null>(null);

useFocusTrap(dialogRef, () => props.kind !== null);

const close = () => emit('close');

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

watch(
  () => props.kind,
  (k) => {
    if (k) document.addEventListener('keydown', onKey);
    else document.removeEventListener('keydown', onKey);
  },
);

onBeforeUnmount(() => document.removeEventListener('keydown', onKey));

const sectionKeys = {
  impressum: ['provider', 'contact', 'activity', 'regulatory', 'odr', 'liability'],
  privacy: [
    'controller',
    'data',
    'logs',
    'fonts',
    'localStorage',
    'rights',
    'authority',
  ],
} as const;

const sections = computed(() => {
  const k = props.kind;
  if (!k) return [];
  return sectionKeys[k].map((s) => ({
    head: t(`legal.${k}.${s}Head`),
    body: t(`legal.${k}.${s}Body`),
  }));
});
</script>

<template>
  <div v-if="kind" class="dialog-backdrop" @click="close">
    <article
      ref="dialogRef"
      class="dialog legal-dialog"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`legal-title-${kind}`"
      @click.stop
    >
      <header class="dialog-head">
        <span class="dialog-num">// legal</span>
        <h3 :id="`legal-title-${kind}`">{{ $t(`legal.${kind}.title`) }}</h3>
        <button class="dialog-close" data-cursor aria-label="close" @click="close">×</button>
      </header>

      <div class="dialog-body legal-body">
        <section v-for="(s, i) in sections" :key="i" class="legal-section">
          <h4>{{ s.head }}</h4>
          <p class="legal-text">{{ s.body }}</p>
        </section>
      </div>

      <footer class="dialog-foot">
        <span class="dialog-hint"><kbd>Esc</kbd> {{ $t('legal.closeHint') }}</span>
      </footer>
    </article>
  </div>
</template>
