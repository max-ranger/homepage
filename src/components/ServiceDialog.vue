<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { MAX } from '@/content';
import { useFocusTrap } from '@/composables/useFocusTrap';
import type { LocalizedService } from '@/composables/useContent';

const props = defineProps<{
  service: LocalizedService | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const dialogRef = ref<HTMLElement | null>(null);

useFocusTrap(dialogRef, () => !!props.service);

const close = () => emit('close');

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

watch(
  () => props.service,
  (s) => {
    if (s) document.addEventListener('keydown', onKey);
    else document.removeEventListener('keydown', onKey);
  },
);

onBeforeUnmount(() => document.removeEventListener('keydown', onKey));

const mailtoFor = (s: LocalizedService): string => {
  const subject = encodeURIComponent(t('serviceDialog.inquirySubject', { id: s.id, title: s.title }));
  return `mailto:${MAX.email}?subject=${subject}`;
};
</script>

<template>
  <div v-if="service" class="dialog-backdrop" @click="close">
    <article
      ref="dialogRef"
      class="dialog"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`dialog-title-${service.id}`"
      @click.stop
    >
      <header class="dialog-head">
        <span class="dialog-num">// {{ service.id }}</span>
        <h3 :id="`dialog-title-${service.id}`">{{ service.title }}</h3>
        <button class="dialog-close" data-cursor aria-label="close" @click="close">×</button>
      </header>

      <div class="dialog-body">
        <p class="dialog-lead">{{ service.details }}</p>

        <section class="dialog-section">
          <h4>{{ $t('serviceDialog.included') }}</h4>
          <ul class="dialog-list">
            <li v-for="item in service.included" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="dialog-section">
          <h4>{{ $t('serviceDialog.pricing') }}</h4>
          <dl class="dialog-pricing">
            <div v-for="tier in service.pricing" :key="tier.label" class="dialog-pricing-row">
              <dt>{{ tier.label }}</dt>
              <dd>{{ tier.range }}</dd>
            </div>
          </dl>
          <p class="dialog-note">{{ $t('serviceDialog.rangesNote') }}</p>
        </section>

        <section v-if="service.continuation" class="dialog-section">
          <h4>{{ $t('serviceDialog.continuation') }}</h4>
          <p class="dialog-continuation">{{ service.continuation }}</p>
        </section>

        <section class="dialog-meta">
          <span class="dialog-meta-label">{{ $t('serviceDialog.delivery') }}</span>
          <span>{{ service.delivery }}</span>
        </section>
      </div>

      <footer class="dialog-foot">
        <span class="dialog-hint"><kbd>Esc</kbd> {{ $t('serviceDialog.closeHint') }}</span>
        <a class="dialog-cta" data-cursor :href="mailtoFor(service)">
          {{ $t('serviceDialog.cta') }}
        </a>
      </footer>
    </article>
  </div>
</template>
