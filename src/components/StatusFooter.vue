<script setup lang="ts">
const year = new Date().getFullYear();
const REPO_URL = 'https://github.com/max-ranger/homepage';

defineEmits<{
  openLegal: [];
}>();
</script>

<template>
  <footer class="statusbar">
    <span class="statusbar-item"><span class="dot-inline" />ready</span>
    <span class="statusbar-item">utf-8</span>
    <span class="statusbar-item">vue</span>
    <span class="statusbar-sp" />
    <button class="statusbar-link" data-cursor @click="$emit('openLegal')">
      {{ $t('status.legalLink') }}
    </button>
    <a
      class="statusbar-link"
      data-cursor
      :href="REPO_URL"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ $t('status.sourceLink') }} ↗
    </a>
    <span class="statusbar-item">{{ $t('status.copyright', { year }) }}</span>
    <span class="statusbar-item">ln 99, col 1</span>
  </footer>
</template>
