<script setup lang="ts">
const year = new Date().getFullYear();
const REPO_URL = 'https://github.com/max-ranger/homepage';

defineEmits<{
  openLegal: [];
}>();
</script>

<template>
  <footer class="statusbar">
    <a
      class="statusbar-link statusbar-shipzero"
      data-cursor
      href="https://shipzero.sh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/zero-favicon.png" alt="" class="status-logo" />{{ $t('status.shippedWith') }} ↗
    </a>
    <span class="statusbar-sp" />
    <button class="statusbar-link" data-cursor @click="$emit('openLegal')">
      {{ $t('status.legalLink') }}
    </button>
    <a
      class="statusbar-link statusbar-source"
      data-cursor
      :href="REPO_URL"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ $t('status.sourceLink') }} ↗
    </a>
    <span class="statusbar-item"
      >{{ $t('status.copyright', { year })
      }}<span class="statusbar-copyright-suffix"> {{ $t('status.copyrightSuffix') }}</span></span
    >
  </footer>
</template>
