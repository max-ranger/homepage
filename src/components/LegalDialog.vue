<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useFocusTrap } from '@/composables/useFocusTrap';

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const dialogRef = ref<HTMLElement | null>(null);

useFocusTrap(dialogRef, () => props.open);

const close = () => emit('close');

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) document.addEventListener('keydown', onKey);
    else document.removeEventListener('keydown', onKey);
  },
);

onBeforeUnmount(() => document.removeEventListener('keydown', onKey));
</script>

<template>
  <div v-if="open" class="dialog-backdrop" @click="close">
    <article
      ref="dialogRef"
      class="dialog legal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      @click.stop
    >
      <header class="dialog-head">
        <span class="dialog-num">// legal</span>
        <h3 id="legal-title">{{ $t('legal.notice.title') }}</h3>
        <button class="dialog-close" data-cursor aria-label="close" @click="close">×</button>
      </header>

      <div class="dialog-body legal-body">
        <section class="legal-section">
          <h4>{{ $t('legal.notice.imprintHead') }}</h4>
          <h5 class="legal-sub">{{ $t('legal.notice.imprintIntroHead') }}</h5>
          <p class="legal-text">{{ $t('legal.notice.imprintIntroBody') }}</p>
          <h5 class="legal-sub">{{ $t('legal.notice.imprintTaxHead') }}</h5>
          <p class="legal-text">{{ $t('legal.notice.imprintTaxBody') }}</p>
          <p class="legal-note">{{ $t('legal.notice.imprintObligation') }}</p>
          <h5 class="legal-sub">{{ $t('legal.notice.imprintContactHead') }}</h5>
          <p class="legal-text">{{ $t('legal.notice.imprintContactBody') }}</p>
        </section>

        <section class="legal-section">
          <h4>{{ $t('legal.notice.copyrightHead') }}</h4>
          <p class="legal-text">{{ $t('legal.notice.copyrightBody') }}</p>
        </section>

        <section class="legal-section">
          <h4>{{ $t('legal.notice.privacyHead') }}</h4>
          <p class="legal-text">{{ $t('legal.notice.privacyBody') }}</p>
        </section>

        <section class="legal-section">
          <h4>{{ $t('legal.notice.liabilityHead') }}</h4>
          <p class="legal-text">{{ $t('legal.notice.liabilityBody') }}</p>
        </section>

        <section class="legal-section">
          <h4>{{ $t('legal.notice.odrHead') }}</h4>
          <p class="legal-text">{{ $t('legal.notice.odrBody') }}</p>
        </section>
      </div>

      <footer class="dialog-foot">
        <span class="dialog-hint"><kbd>Esc</kbd> {{ $t('legal.closeHint') }}</span>
      </footer>
    </article>
  </div>
</template>
