<script setup lang="ts">
import { ref } from 'vue';
import { useContent, type LocalizedService } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';
import ServiceDialog from '@/components/ServiceDialog.vue';

const { services } = useContent();

const openService = ref<LocalizedService | null>(null);

const openDialog = (service: LocalizedService) => {
  openService.value = service;
};

const closeDialog = () => {
  openService.value = null;
};

const onKey = (e: KeyboardEvent, service: LocalizedService) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openDialog(service);
  }
};
</script>

<template>
  <section id="services" class="section">
    <SectionHead tag="// 03" :title="$t('sections.services')" />
    <div class="svc-flow" data-reveal>
      <div class="svc-flow-row">
        <template v-for="(s, i) in services" :key="s.id">
          <button
            class="svc-flow-step"
            data-cursor
            :aria-label="`${s.title} — view details`"
            @click="openDialog(s)"
          >
            <span class="svc-flow-num">{{ s.id }}</span>
            <span class="svc-flow-label">{{ s.flowLabel }}</span>
          </button>
          <span v-if="i < services.length - 1" class="svc-flow-arrow">→</span>
        </template>
      </div>
      <p class="svc-flow-hint">{{ $t('services.flowHint') }}</p>
    </div>
    <div class="svc-grid">
      <article
        v-for="s in services"
        :key="s.id"
        class="svc"
        data-reveal
        data-cursor
        role="button"
        tabindex="0"
        :aria-label="`${s.title} — view details`"
        @click="openDialog(s)"
        @keydown="onKey($event, s)"
      >
        <div class="svc-head">
          <span class="svc-num">{{ s.id }}</span>
          <h3>{{ s.title }}</h3>
        </div>
        <p>{{ s.desc }}</p>
        <div class="svc-foot">
          <span class="svc-price">{{ s.price }}</span>
          <span class="svc-arr">→</span>
        </div>
      </article>
    </div>
    <ServiceDialog :service="openService" @close="closeDialog" />
  </section>
</template>
