<script setup lang="ts">
import { useContent } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';

const { education } = useContent();
</script>

<template>
  <section id="education" class="section">
    <SectionHead tag="// 05" :title="$t('sections.education')" />
    <div class="exp exp-continuous">
      <div v-for="e in education" :key="e.id" class="exp-row" data-reveal>
        <span class="exp-years">
          <span class="exp-years-full">{{ e.years }}</span>
          <span class="exp-years-short">{{ e.yearsShort }}</span>
        </span>
        <span class="exp-line" />
        <div class="exp-body">
          <h4>{{ e.degree }} <span>@ {{ e.org }}</span></h4>
          <p>{{ e.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
