<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <header class="sh" data-reveal>
    <span class="sh-tag">//</span>
    <h2>{{ title }}</h2>
  </header>
</template>
