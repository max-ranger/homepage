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
    <SectionHead :title="$t('sections.services')" />
    <p class="section-hint" data-reveal>{{ $t('services.hint') }}</p>
    <div class="svc-grid">
      <article
        v-for="s in services"
        :key="s.id"
        class="svc"
        data-reveal
        data-cursor
        role="button"
        tabindex="0"
        :aria-label="$t('services.viewDetails', { title: s.title })"
        @click="openDialog(s)"
        @keydown="onKey($event, s)"
      >
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
        <div class="svc-foot">
          <span class="svc-price">{{ s.fromLabel }}</span>
          <span class="svc-arr">→</span>
        </div>
      </article>
    </div>
    <ServiceDialog :service="openService" @close="closeDialog" />
  </section>
</template>
