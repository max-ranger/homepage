<script setup lang="ts">
import { useContent } from '@/composables/useContent';
import SectionHead from '@/components/SectionHead.vue';

const { email, socials } = useContent();
</script>

<template>
  <section id="contact" class="section contact">
    <SectionHead tag="// 06" :title="$t('sections.contact')" />
    <div class="contact-grid">
      <div class="card" data-reveal>
        <div class="card-head">{{ $t('contact.cardHead') }}</div>
        <div class="card-body">
          <p class="contact-big">{{ $t('contact.big') }}</p>
          <p class="contact-sub">{{ $t('contact.sub') }}</p>
          <a class="contact-btn" :href="`mailto:${email}`">
            <span>{{ $t('contact.sendCta') }}</span>
            <span class="contact-email">{{ email }}</span>
          </a>
        </div>
      </div>
      <div class="socials" data-reveal>
        <a v-for="s in socials" :key="s.label" :href="s.url" class="social">
          <span>{{ s.label.toLowerCase() }}</span>
          <span class="social-handle">{{ s.handle }}</span>
          <span class="social-arr">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
