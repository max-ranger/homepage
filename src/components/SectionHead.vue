<script setup lang="ts">
defineProps<{
  tag: string;
  title: string;
  sub?: string;
}>();
</script>

<template>
  <header class="sh" data-reveal>
    <span class="sh-tag">{{ tag }}</span>
    <h2>{{ title }}</h2>
    <span v-if="sub" class="sh-sub">// {{ sub }}</span>
  </header>
</template>
