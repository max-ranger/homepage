<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="statusbar">
    <span class="statusbar-item"><span class="dot-inline" />ready</span>
    <span class="statusbar-item">utf-8</span>
    <span class="statusbar-item">vue</span>
    <span class="statusbar-sp" />
    <span class="statusbar-item">{{ $t('status.copyright', { year }) }}</span>
    <span class="statusbar-item">ln 99, col 1</span>
  </footer>
</template>
