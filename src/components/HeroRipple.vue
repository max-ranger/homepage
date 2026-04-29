<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    cellSize?: number;
  }>(),
  {
    cellSize: 36,
  },
);

const containerRef = ref<HTMLDivElement | null>(null);
let attachedParent: HTMLElement | null = null;

const onMove = (e: MouseEvent) => {
  const el = containerRef.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
};

onMounted(() => {
  attachedParent = containerRef.value?.parentElement ?? null;
  attachedParent?.addEventListener('mousemove', onMove);
});

onBeforeUnmount(() => {
  attachedParent?.removeEventListener('mousemove', onMove);
});

const cssVars = {
  '--cell': `${props.cellSize}px`,
};
</script>

<template>
  <div ref="containerRef" class="hero-ripple" :style="cssVars" />
</template>
